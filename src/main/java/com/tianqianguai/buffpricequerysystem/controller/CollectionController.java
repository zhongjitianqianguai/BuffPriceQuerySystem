package com.tianqianguai.buffpricequerysystem.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

import javax.servlet.http.HttpServletRequest;

@Controller
public class CollectionController {
    @PostMapping("/add_bookmark")
    public String addBookmark(HttpServletRequest request) {
        String good_id=request.getParameter("good_id");
        String user_id=request.getParameter("user_id");
        return "redirect:/goods?goods_id="+good_id;
    }
}
