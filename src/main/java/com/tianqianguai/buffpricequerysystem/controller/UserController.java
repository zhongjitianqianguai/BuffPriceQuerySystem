package com.tianqianguai.buffpricequerysystem.controller;

import com.tianqianguai.buffpricequerysystem.entity.User;
import com.tianqianguai.buffpricequerysystem.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

@Controller

public class UserController {
    @Autowired
    private UserService userService;

    @RequestMapping("show_login")
    public String Login(HttpServletRequest httpServletRequest){
        return "/login";
    }

    @RequestMapping("admin_login")
    public String AdminLogin(User user, Model model){
        System.out.println(user.getUsername()+"  "+user.getPassword());
        User user1 = userService.AdminLogin(user);

        if (user1 == null){
            //数据库没有该用户

            return "";
        }
        //默认返回页面
        return "/index";
    }
}
