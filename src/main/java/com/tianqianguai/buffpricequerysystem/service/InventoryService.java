package com.tianqianguai.buffpricequerysystem.service;

import com.tianqianguai.buffpricequerysystem.entity.Inventory;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class InventoryService {

    private final String apiUrl = "https://gwapi.pwesports.cn/appdecoration/steamcn/csgo/decoration/getSteamInventory";

    public Inventory getInventory(String steamId) {
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


        HttpEntity<String> entity = new HttpEntity<>("parameters", headers);

        ResponseEntity<String> response = restTemplate.exchange(fullUrl, HttpMethod.GET, entity, String.class);
        System.out.println(response.getBody());
        // 创建HttpEntity，设置请求头
        HttpEntity<String> entity2 = new HttpEntity<>(headers);

        // 发送HTTP GET请求，并获取响应
        ResponseEntity<Inventory> response2 = restTemplate.exchange(fullUrl, HttpMethod.GET, entity2, Inventory.class);

        if (response.getStatusCode() == HttpStatus.OK) {
            // 请求成功，返回JSON响应对象
            return response2.getBody();
        } else {
            // 请求失败，你可以根据需要处理错误
            return null;
        }
    }
}