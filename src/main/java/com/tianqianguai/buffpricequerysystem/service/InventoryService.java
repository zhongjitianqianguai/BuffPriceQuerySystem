package com.tianqianguai.buffpricequerysystem.service;

import com.tianqianguai.buffpricequerysystem.entity.Inventory;
import com.tianqianguai.buffpricequerysystem.entity.Result;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;

import java.util.List;

@Service
public class InventoryService {

    private final String apiUrl = "https://gwapi.pwesports.cn/appdecoration/steamcn/csgo/decoration/getSteamInventory";

    public Page<Result> getInventory(String steamId, Pageable pageable) {
        // 创建一个RestTemplate对象，它可以用来进行HTTP请求
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
            List <Result> results = inventory.getResult();

            // 计算当前页的开始和结束索引
            int start = (int) pageable.getOffset();
            int end;
            if (start==0) {
                System.out.println("diyi:" + start);
                System.out.println(start + pageable.getPageSize());
                System.out.println(results.size());
                end = Math.min((start + pageable.getPageSize()), results.size());
            }else {
                System.out.println("diyi:" + start);
                System.out.println(start + pageable.getPageSize());
                System.out.println(results.size());
                end = Math.min((start + pageable.getPageSize()), results.size());
            }
            System.out.println("start:" + start);
            // 创建一个新的结果列表，只包含当前页的结果
            System.out.println("end:"+end);
            List<Result> pageResults = results.subList(start, end);

            // 创建并返回一个Page对象
            return new PageImpl<>(pageResults, pageable, results.size());
        } else {
            // 请求失败，你可以根据需要处理错误
            return null;
        }
    }
}