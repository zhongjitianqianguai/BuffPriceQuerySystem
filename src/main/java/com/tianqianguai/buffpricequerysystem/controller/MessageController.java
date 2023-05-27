package com.tianqianguai.buffpricequerysystem.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MessageController {
    @RequestMapping("/show_message")
    public String showMessage(){
        return "mail";
    }
}
