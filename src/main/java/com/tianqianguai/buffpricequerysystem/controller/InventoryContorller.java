package com.tianqianguai.buffpricequerysystem.controller;

import com.tianqianguai.buffpricequerysystem.entity.*;
import com.tianqianguai.buffpricequerysystem.service.GoodsService;
import com.tianqianguai.buffpricequerysystem.service.InventoryService;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
@Controller

public class InventoryContorller {
    Log logger = LogFactory.getLog(UserController.class);

    @Autowired
    private InventoryService inventoryService;
    @Autowired
    private GoodsService goodsService;

    public List<Integer> getPageNumbers(int currentPage, int totalPages) {
        logger.debug("获取页码");
        List<Integer> pageNumbers = new ArrayList <Integer>();
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
        Map <String, List<Record>> recordMap = records.stream()
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
    @RequestMapping("/show_inventory")
    public String Inventory(HttpServletRequest request, Model model, HttpServletResponse response,@RequestParam("steamId") String steamId, @RequestParam(value = "page", defaultValue = "0") int page) throws IOException {
        Pageable pageable = PageRequest.of(page, 20);
        String search = request.getParameter("search");
        String searchbool="true";
        System.out.println("search"+search);
        if (search==null){
            search="";
        }
//        steamId = request.getParameter("steamId");
        Page <Result> pageResults = inventoryService.getInventory(steamId, pageable,search);



        if (pageResults.getContent().isEmpty()){
            System.out.println("空搜索");
            searchbool="false";

        }

        User user = (User) request.getSession().getAttribute("user");


        System.out.println(steamId);
        model.addAttribute("search", search);
        model.addAttribute("searchbool", searchbool);

        model.addAttribute("user", user);
        model.addAttribute("pageResults", pageResults);
        model.addAttribute("steamid",steamId);

        model.addAttribute("page", page);

        return "inventory";

    }

}
