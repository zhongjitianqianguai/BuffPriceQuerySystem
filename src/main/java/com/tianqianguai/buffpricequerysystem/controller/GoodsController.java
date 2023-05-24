package com.tianqianguai.buffpricequerysystem.controller;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.tianqianguai.buffpricequerysystem.entity.Good;
import com.tianqianguai.buffpricequerysystem.entity.Record;
import com.tianqianguai.buffpricequerysystem.service.GoodsService;
import com.tianqianguai.buffpricequerysystem.service.RecordService;
import org.apache.juli.logging.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.util.HtmlUtils;

import java.text.SimpleDateFormat;
import javax.servlet.http.HttpServletRequest;
import java.text.ParseException;
import java.util.*;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

@Controller

public class GoodsController {
    @Autowired
    GoodsService goodsService;
    @Autowired
    RecordService recordService;

    public List<Integer> getPageNumbers(int currentPage, int totalPages) {
        List<Integer> pageNumbers = new ArrayList<Integer>();
        int start = Math.max(1, currentPage - 2);
        int end = Math.min(totalPages, currentPage + 2);
        for (int i = start; i <= end; i++) {
            pageNumbers.add(i);
        }
        return pageNumbers;
    }

    public List<Record> getLowestByDay(List<Record> records) {
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

    @RequestMapping("home")
    public String show_index(HttpServletRequest request, Model model) {
        String page = request.getParameter("page");
        String category = request.getParameter("category");
        String search = request.getParameter("search");
        String sort = request.getParameter("sort");
        model.addAttribute("sort", sort);
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
        model.addAttribute("pageNumbers", getPageNumbers(Integer.parseInt(page), 58));
        model.addAttribute("totalPages", 58);

        List<Good> first_goods = null;
        if (category != null && sort != null) {
            if (sort.equals("asc")) {
                first_goods = goodsService.getGoodByPriceSortCategoryAsc(offset, 20, category);
            } else if (sort.equals("desc")) {
                first_goods = goodsService.getGoodByPriceSortCategoryDesc(offset, 20, category);
            }
            model.addAttribute("first_goods", first_goods);
            return "index";
        } else if (category != null) {
            first_goods = goodsService.selectGoodsIwantByCategory(offset, 20, category);
            model.addAttribute("first_goods", first_goods);
            return "index";
        } else if (search != null&&sort != null) {
            if (sort.equals("asc")) {
                first_goods = goodsService.getGoodByPriceSortSearchAsc(search,offset, 20);
            } else if (sort.equals("desc")) {
                first_goods = goodsService.getGoodByPriceSortSearchDesc(search,offset, 20);
            }
        } else if (sort != null) {
            if (sort.equals("asc")) {
                first_goods = goodsService.getGoodByPriceSortAsc(offset, 20);
            }
            else if (sort.equals("desc")) {
                first_goods = goodsService.getGoodByPriceSortDesc(offset, 20);
            }
        } else if (search!=null) {
            first_goods=goodsService.getGoodsByName(search,offset,20);

        } else {
            first_goods = goodsService.getGoodsIwant(offset, 20);
        }
        model.addAttribute("first_goods", first_goods);
        return "index";
    }


    @RequestMapping("goods")

    public String show_good(HttpServletRequest request, Model model) {
        String goods_id = request.getParameter("goods_id");
        Good good = goodsService.getGoodById(goods_id);
        model.addAttribute("good", good);
        List<Record> records = recordService.getGoodRecordById(goods_id);
        List<Record> last7Days = new ArrayList<>();
        List<Record> lastMonth = new ArrayList<>();
        List<Record> last6Months = new ArrayList<>();
        List<Record> lastYear = new ArrayList<>();
        List<Record> last2Years = new ArrayList<>();

        // 格式化日期
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date currentDate = new Date();

        for (Record record : records) {
            try {
                Date recordDate = formatter.parse(record.getTime());

                // 计算时间差
                long diffDays = TimeUnit.DAYS.convert(currentDate.getTime() - recordDate.getTime(), TimeUnit.MILLISECONDS);
                long diffMonths = diffDays / 30;
                long diffYears = diffDays / 365;

                // 判断时间差是否在规定范围内
                if (diffDays <= 7) {
                    last7Days.add(record);
                }
                if (diffMonths <= 1) {
                    lastMonth.add(record);
                }
                if (diffMonths <= 6) {
                    last6Months.add(record);
                }
                if (diffYears <= 1) {
                    lastYear.add(record);
                }
                if (diffYears <= 2) {
                    last2Years.add(record);
                }
            } catch (ParseException e) {
                e.printStackTrace();
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

        return "good";
    }

}
