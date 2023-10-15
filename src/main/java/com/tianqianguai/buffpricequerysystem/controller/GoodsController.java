package com.tianqianguai.buffpricequerysystem.controller;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.tianqianguai.buffpricequerysystem.entity.Collect;
import com.tianqianguai.buffpricequerysystem.entity.Good;
import com.tianqianguai.buffpricequerysystem.entity.Record;
import com.tianqianguai.buffpricequerysystem.entity.User;
import com.tianqianguai.buffpricequerysystem.service.CollectService;
import com.tianqianguai.buffpricequerysystem.service.GoodsService;
import com.tianqianguai.buffpricequerysystem.service.RecordService;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.util.HtmlUtils;

import java.io.IOException;
import java.text.SimpleDateFormat;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.text.ParseException;
import java.time.*;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.util.*;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

@Controller

public class GoodsController {
    Log logger = LogFactory.getLog(GoodsController.class);

    @Autowired
    GoodsService goodsService;
    @Autowired
    RecordService recordService;
    @Autowired
    CollectService collectService;

    public List<Integer> getPageNumbers(int currentPage, int totalPages) {
        logger.debug("获取页码");
        List<Integer> pageNumbers = new ArrayList<Integer>();
        int start = Math.max(1, currentPage - 2);
        int end = Math.min(totalPages, currentPage + 2);
        for (int i = start; i <= end; i++) {
            pageNumbers.add(i);
        }
        return pageNumbers;
    }

    public List<Record> getLowestByDay(List<Record> records) {
        logger.debug("enter getLowestByDay()");
        //使用 Java 8 中的 Stream API 对记录进行处理，按时间分组，得到 Map<String, List<Record>> 类型的照时间字符串的前十个字符（即日期）进行分组。
        Map<String, List<Record>> recordMap = records.stream()
                .collect(Collectors.groupingBy(r -> r.getTime().substring(0, 10)));
        // 对于每个日期分组，选出其中价格最低的记录，存储在 List<Record> tempRecords 变量中。使用 Stream API 找出 tempRecords 中价格最低的记录，记录的最低价格使用 mapToDouble() 方法将 Record 类型的价格转换为 double 类型进行计算，并使用 orElse() 方法指定默认值为 0.0。得到 lowestPrice 变量。
        return recordMap.entrySet().stream()
                .flatMap(entry -> {
                    List<Record> tempRecords = entry.getValue();
                    double lowestPrice = tempRecords.stream().mapToDouble(Record::getPrice).min().orElse(0.0);
                    //对于 tempRecords 中价格等于 lowestPrice 的记录，按照时间进行排序并输出。使用 Stream API 进行筛选和排序操作，并使用 flatMap() 方法将多个 List<Record> 合并成一个流。
                    return tempRecords.stream().filter(r -> r.getPrice() == lowestPrice)
                            .sorted(Comparator.comparing(Record::getTime));
                })
                //对所有日期分组中筛选出的记录按照时间排序，并输出到控制台。使用 sorted() 方法按照 Record 类型的时间属性进行排序，使用 Collectors.toList() 方法将所有记录收集到一个 List<Record> 类型的变量 records_after_adjust 中。
                .sorted(Comparator.comparing(Record::getTime))
                .collect(Collectors.toList());
    }

    @PostMapping("change_expected_price")
    public String change_expected_price(HttpServletRequest request, Model model, HttpServletResponse response) throws IOException {
        logger.info("enter change_expected_price()");
        String expected_price = request.getParameter("expected_price");
        String good_id = request.getParameter("goods_id");
        User user = (User) request.getSession().getAttribute("user");
        logger.debug("用户" + user + "修改了" + good_id + "商品的预期价格");
        model.addAttribute("user", user);
        int change_status = goodsService.changeExpectedPrice(good_id, Double.parseDouble(expected_price));
        if (change_status == 1) {
            logger.info("修改商品的预期价格完成");
            model.addAttribute("message", "修改成功");
        } else {
            logger.error("修改商品的预期价格失败");
            try {
                response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "修改商品的预期价格失败");
                return null;
            } finally {
                response.flushBuffer();
            }
        }
        return "redirect:/show_bookmark";
    }

    @RequestMapping("home")
    public String show_index(HttpServletRequest request, Model model, HttpServletResponse response) throws IOException {
        logger.info("进入主页");
        String page = request.getParameter("page");
        String category = request.getParameter("category");
        String search = request.getParameter("search");
        String sort = request.getParameter("sort");
        String between_min = request.getParameter("between_min");
        String between_max = request.getParameter("between_max");
        User user = (User) request.getSession().getAttribute("user");
        String user_status = (String) request.getSession().getAttribute("user_status");
        model.addAttribute("user_status", user_status);
        model.addAttribute("user", user);
        model.addAttribute("between_min", between_min);
        model.addAttribute("between_max", between_max);
        model.addAttribute("search", search);
        model.addAttribute("category", category);
        int offset = 0;
        if (page == null) {
            page = "1";
        } else {
            offset = (Integer.parseInt(page) - 1) * 20;
        }

        model.addAttribute("page", Integer.parseInt(page));
        model.addAttribute("pageNumbers", getPageNumbers(Integer.parseInt(page), 58));
        model.addAttribute("totalPages", 58);

        List<Good> first_goods = null;
        if (category != null && sort != null) {
            logger.debug("分类为" + category + "排序为" + sort);
            if (sort.equals("asc")) {
                first_goods = goodsService.getGoodByPriceSortCategoryAsc(offset, 20, category);
            } else if (sort.equals("desc")) {
                first_goods = goodsService.getGoodByPriceSortCategoryDesc(offset, 20, category);
            } else if (sort.equals("default")) {
                first_goods = goodsService.selectGoodsIwantByCategory(offset, 20, category);
            } else if (sort.equals("trend_up_desc")) {
                first_goods = goodsService.getGoodByPriceSortCategoryUpTrendDesc(offset, 20, category);
            } else if (sort.equals("trend_down_desc")) {
                first_goods = goodsService.getGoodByPriceSortCategoryDownTrendDesc(offset, 20, category);
            } else {
                try {
                    logger.error("排序sort为非法参数");
                    response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "排序sort为非法参数");
                    return null;
                } finally {
                    response.flushBuffer();
                }
            }
        } else if (category != null) {
            logger.debug("分类为" + category);
            first_goods = goodsService.selectGoodsIwantByCategory(offset, 20, category);
        } else if (search != null && sort != null) {
            logger.debug("搜索为" + search + "排序为" + sort);
            if (sort.equals("asc")) {
                first_goods = goodsService.getGoodByPriceSortSearchAsc(search, offset, 20);
            } else if (sort.equals("desc")) {
                first_goods = goodsService.getGoodByPriceSortSearchDesc(search, offset, 20);
            } else if (sort.equals("default")) {
                first_goods = goodsService.getGoodsByName(search, offset, 20);
            } else if (sort.equals("trend_up_desc")) {
                first_goods = goodsService.getGoodByPriceSortSearchTrendUpDesc(search, offset, 20);
            } else if (sort.equals("trend_down_desc")) {
                first_goods = goodsService.getGoodByPriceSortSearchTrendDownDesc(search, offset, 20);
            }else {
                try {
                    logger.error("排序sort为非法参数");
                    response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "排序sort为非法参数");
                    return null;
                } finally {
                    response.flushBuffer();
                }
            }
        } else if (sort != null && between_max != null && between_min != null) {
            logger.debug("排序为" + sort + "价格在" + between_min + "-" + between_max + "之间");
            if (sort.equals("asc")) {
                first_goods = goodsService.getGoodByPriceSortBetweenAsc(Double.parseDouble(between_min), Double.parseDouble(between_max), offset, 20);
            } else if (sort.equals("desc")) {
                first_goods = goodsService.getGoodByPriceSortBetweenDesc(Double.parseDouble(between_min), Double.parseDouble(between_max), offset, 20);
            }else if (sort.equals("default")) {
                first_goods = goodsService.getGoodsByPriceBetween(Double.parseDouble(between_min), Double.parseDouble(between_max), offset, 20);
            } else if (sort.equals("trend_up_desc")) {
                first_goods = goodsService.getGoodByPriceSortTrendUpBetweenDesc(Double.parseDouble(between_min), Double.parseDouble(between_max), offset, 20);
            } else if (sort.equals("trend_down_desc")) {
                first_goods = goodsService.getGoodByPriceSortTrendDownBetweenDesc(Double.parseDouble(between_min), Double.parseDouble(between_max), offset, 20);
            } else {
                try {
                    logger.error("非法参数排序");
                    response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "排序sort为非法参数");
                    return null;
                } finally {
                    response.flushBuffer();
                }
            }
        } else if (sort != null) {
            logger.debug("排序为" + sort);
            if (sort.equals("asc")) {
                first_goods = goodsService.getGoodByPriceSortAsc(offset, 20);
            } else if (sort.equals("desc")) {
                first_goods = goodsService.getGoodByPriceSortDesc(offset, 20);
            }else if (sort.equals("default")) {
                first_goods = goodsService.getGoodsIwant(offset, 20);
            } else if (sort.equals("trend_up_desc")) {
                first_goods = goodsService.getGoodByPriceSortTrendUpDesc(offset, 20);
            } else if (sort.equals("trend_down_desc")) {
                first_goods = goodsService.getGoodByPriceSortTrendDownDesc(offset, 20);
            } else {
                try {
                    logger.error("非法参数排序");
                    response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "非法参数排序");
                    return null;
                } finally {
                    response.flushBuffer();
                }
            }
        } else if (search != null) {
            logger.debug("搜索项目为" + search);
            first_goods = goodsService.getGoodsByName(search, offset, 20);

        } else if (between_max != null && between_min != null) {
            logger.debug("价格在" + between_min + "-" + between_max + "之间");
            first_goods = goodsService.getGoodsByPriceBetween(Double.parseDouble(between_min), Double.parseDouble(between_max), offset, 20);
        } else {
            logger.debug("默认排序");
            first_goods = goodsService.getGoodsIwant(offset, 20);
        }
        model.addAttribute("first_goods", first_goods);
        logger.trace(first_goods);
        logger.info("to index");
        if (sort == null) {
            sort = "default";
        }
        model.addAttribute("sort", sort);
        return "index";
    }


    @RequestMapping("goods")

    public String show_good(HttpServletRequest request, Model model) {
        logger.info("enter show_good()");
        String goods_id = request.getParameter("goods_id");
        model.addAttribute("goods_id", goods_id);
        Good good = goodsService.getGoodById(goods_id);
        model.addAttribute("good", good);
        User user = (User) request.getSession().getAttribute("user");
        String user_status = (String) request.getSession().getAttribute("user_status");
        model.addAttribute("user_status", user_status);
        model.addAttribute("user", user);
        if (user != null) {
            Collect collect = collectService.getCollectByUserIdAndGoodId(user.getId(), goods_id);
            logger.debug(collect);
            if (collect != null) {
                model.addAttribute("bookmark_status", "1");
            } else {
                model.addAttribute("bookmark_status", "0");
            }
        }
        List<Record> records = recordService.getGoodRecordById(goods_id);
        logger.debug(records);
        List<Record> last7Days = new ArrayList<>();
        List<Record> lastMonth = new ArrayList<>();
        List<Record> last6Months = new ArrayList<>();
        List<Record> lastYear = new ArrayList<>();
        List<Record> last2Years = new ArrayList<>();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        // 获取当前时间
        // 获取当前时间
        Instant currentInstant = LocalDateTime.now().atZone(ZoneId.systemDefault()).toInstant();

        // 计算7天前的时间
        Instant last7DaysInstant = currentInstant.minus(7, ChronoUnit.DAYS);

        // 计算一个月前的时间
        LocalDate lastMonthDate = LocalDate.now().minusMonths(1);
        Instant lastMonthInstant = lastMonthDate.atStartOfDay(ZoneId.systemDefault()).toInstant();
        // 计算六个月前的时间
        LocalDate last6MonthsDate = LocalDate.now().minusMonths(6);
        Instant last6MonthsInstant = last6MonthsDate.atStartOfDay(ZoneId.systemDefault()).toInstant();

        // 计算一年前的时间
        LocalDate lastYearDate = LocalDate.now().minusYears(1);
        Instant lastYearInstant = lastYearDate.atStartOfDay(ZoneId.systemDefault()).toInstant();


        // 计算两年前的时间
        LocalDate last2YearsDate = LocalDate.now().minusYears(2);
        Instant last2YearsInstant = last2YearsDate.atStartOfDay(ZoneId.systemDefault()).toInstant();

        // 遍历所有记录
        for (Record record : records) {
            // 将记录时间转换为Instant对象
            Instant recordInstant = LocalDateTime.parse(record.getTime(), formatter).atZone(ZoneId.systemDefault()).toInstant();

            // 判断记录时间是否在规定范围内
            if (recordInstant.isAfter(last7DaysInstant)) {
                last7Days.add(record);
            }
            if (recordInstant.isAfter(lastMonthInstant)) {
                lastMonth.add(record);
            }
            if (recordInstant.isAfter(last6MonthsInstant)) {
                last6Months.add(record);
            }
            if (recordInstant.isAfter(lastYearInstant)) {
                lastYear.add(record);
            }
            if (recordInstant.isAfter(last2YearsInstant)) {
                last2Years.add(record);
            }
        }
        model.addAttribute("all_records_last7Days", last7Days);
        model.addAttribute("all_records_lastMonth", lastMonth);
        model.addAttribute("all_records_last6Months", last6Months);
        model.addAttribute("all_records_lastYear", lastYear);
        model.addAttribute("all_records_last2Years", last2Years);

        model.addAttribute("lowest_records_last7Days", getLowestByDay(last7Days));
        model.addAttribute("lowest_records_lastMonth", getLowestByDay(lastMonth));
        model.addAttribute("lowest_records_last6Months", getLowestByDay(last6Months));
        model.addAttribute("lowest_records_lastYear", getLowestByDay(lastYear));
        model.addAttribute("lowest_records_last2Years", getLowestByDay(last2Years));

        logger.info("to good");
        return "good";
    }

}
