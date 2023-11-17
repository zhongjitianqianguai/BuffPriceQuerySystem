package com.tianqianguai.buffpricequerysystem.service;

import com.sun.javaws.IconUtil;
import com.tianqianguai.buffpricequerysystem.controller.GoodsController;
import com.tianqianguai.buffpricequerysystem.entity.Good;
import com.tianqianguai.buffpricequerysystem.entity.Inventory;
import com.tianqianguai.buffpricequerysystem.entity.Result;
import com.tianqianguai.buffpricequerysystem.mapper.GoodsMapper;
import com.tianqianguai.buffpricequerysystem.mapper.InventoryMapper;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class InventoryService {
    @Autowired
    InventoryMapper inventoryMapper;
    @Autowired
    GoodsMapper goodsMapper;
    Log logger = LogFactory.getLog(GoodsController.class);



    private final String apiUrl = "https://gwapi.pwesports.cn/appdecoration/steamcn/csgo/decoration/getSteamInventory";

    public Page<Result> getInventory(String steamId, Pageable pageable,String Search) {
        // 创建一个RestTemplate对象，它可以用来进行HTTP请求
        Good good=new Good("0",0,"0","0","0",0,0);
        RestTemplate restTemplate = new RestTemplate();
        // 设置请求头
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.add("User-Agent", "Your-User-Agent-String");
        headers.add("Accept-Language", "zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2");
        headers.add("Referer", "https://steamcommunity.com/");

        // 构建URL，包括动态的steamId参数
        String fullUrl = apiUrl + "?steamId=" + steamId;

        // 创建HttpEntity，设置请求头
        HttpEntity<String> entity = new HttpEntity<>(headers);

        // 发送HTTP GET请求，并获取响应
        ResponseEntity<Inventory> response = restTemplate.exchange(fullUrl, HttpMethod.GET, entity, Inventory.class);

        if (response.getStatusCode() == HttpStatus.OK) {

            // 请求成功，获取JSON响应对象
            Inventory inventory = response.getBody();

            // 获取结果列表
            List<Result> results = inventory.getResult();

            // 创建一个Map用于存储商品名称和对应的数量
            Map<String, Integer> productCountMap = new HashMap<>();

            // 遍历结果列表，记录每个商品的数量
            for (Result result : results) {
                String productName = result.getMarketName();
                // 如果商品已经在Map中，增加数量；如果不在，将商品添加到Map并初始化数量为1
                // 检查商品名称是否已经在Map中
                if (productCountMap.containsKey(productName)) {
                    // 如果存在，增加数量
                    int count = productCountMap.get(productName);
                    productCountMap.put(productName, count + 1);

                } else {
                    // 如果不存在，将商品名称添加到Map，并初始化数量为1
                    productCountMap.put(productName, 1);

                }
            }

            // 生成新的结果列表，删除重复商品并保留数量
            List<Result> uniqueResults = new ArrayList<>();
            for (Result result : results) {
                String productName = result.getMarketName();
                int count = productCountMap.get(productName);
                // 将数量设置到相应的Result对象中
                result.setCount(count);

                // 如果新的结果列表中没有当前商品，则添加到新的结果列表中
                if (!uniqueResults.contains(result)) {
                    uniqueResults.add(result);
                }
            }




            List<Result> toRemove = new ArrayList<>();

            if (!Search.equals("")) {
                System.out.println(Search);
                for (Result uniresult : uniqueResults) {
                    if (!uniresult.getMarketName().toLowerCase().contains(Search.toLowerCase())) {
                        toRemove.add(uniresult);
                    }
                }
                uniqueResults.removeAll(toRemove);
            }


            // 计算当前页的开始和结束索引
            int start = (int) pageable.getOffset();
            int end;
            if (start==0) {
                System.out.println("diyi:" + start);
                System.out.println(start + pageable.getPageSize());
                System.out.println(uniqueResults.size());
                end = Math.min((start + pageable.getPageSize()), uniqueResults.size());
            }else {
                System.out.println("diyi:" + start);
                System.out.println(start + pageable.getPageSize());
                System.out.println(uniqueResults.size());
                end = Math.min((start + pageable.getPageSize()), uniqueResults.size());
            }
            System.out.println("start:" + start);
            // 创建一个新的结果列表，只包含当前页的结果
            System.out.println("end:"+end);
            List<Result> pageResults = uniqueResults.subList(start, end);




            for (int i = 0; i <pageResults.size() ; i++) {
                if (inventoryMapper.getGoodsByLikeAName(pageResults.get(i).getMarketName())!=null){//如果
                    pageResults.get(i).setGoods(inventoryMapper.getGoodsByLikeAName(pageResults.get(i).getMarketName()));
                }else {
                    pageResults.get(i).setGoods(good);
                }
            }
            // 创建并返回一个Page对象
            return new PageImpl<>(pageResults, pageable, uniqueResults.size());
        } else {
            // 请求失败，你可以根据需要处理错误
            return null;
        }
    }
}