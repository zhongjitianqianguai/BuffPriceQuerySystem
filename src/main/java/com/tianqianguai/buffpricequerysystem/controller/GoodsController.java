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

import javax.servlet.http.HttpServletRequest;
import java.util.*;
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

    @RequestMapping("home")
    public String show_index(HttpServletRequest request, Model model) {
        String page = request.getParameter("page");
        String category = request.getParameter("category");
        int offset = 0;
        if (page == null) {
            page = "1";
        } else {
            offset = (Integer.parseInt(page) - 1) * 20;
        }
        List<Good> first_goods;
        if (category != null) {
            first_goods = goodsService.selectGoodsIwantByCategory(offset, 20, category);
        } else {
            first_goods = goodsService.getGoodsIwant(offset, 20);

        }
        model.addAttribute("first_goods", first_goods);
        model.addAttribute("page", Integer.parseInt(page));
        model.addAttribute("pageNumbers", getPageNumbers(Integer.parseInt(page), 58));
        model.addAttribute("totalPages", 58);
        model.addAttribute("category", category);
        return "index";
    }

    @RequestMapping("goods")

    public String show_good(HttpServletRequest request, Model model) throws JsonProcessingException {
        String goods_id = request.getParameter("goods_id");
        Good good = goodsService.getGoodById(goods_id);
        model.addAttribute("good", good);
        List<Record> records = recordService.getGoodRecordById(goods_id);
        //使用 Java 8 中的 Stream API 对记录进行处理，按时间分组，得到 Map<String, List<Record>> 类型的照时间字符串的前十个字符（即日期）进行分组。
        Map<String, List<Record>> recordMap = records.stream()
                .collect(Collectors.groupingBy(r -> r.getTime().substring(0, 10)));
        // 对于每个日期分组，选出其中价格最低的记录，存储在 List<Record> tempRecords 变量中。使用 Stream API 找出 tempRecords 中价格最低的记录，记录的最低价格使用 mapToDouble() 方法将 Record 类型的价格转换为 double 类型进行计算，并使用 orElse() 方法指定默认值为 0.0。得到 lowestPrice 变量。
        List<Record> records_after_adjust = recordMap.entrySet().stream()
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
        model.addAttribute("records", records_after_adjust);
//        ObjectMapper mapper = new ObjectMapper();
//        String json = mapper.writeValueAsString(records_after_adjust);
//        json = json.replaceAll("&", "\u0026");
//        System.out.println(json);
//        model.addAttribute("json", json);
        return "good";
    }

}
