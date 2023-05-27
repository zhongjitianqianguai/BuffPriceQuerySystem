package com.tianqianguai.buffpricequerysystem.controller;

import com.tianqianguai.buffpricequerysystem.entity.User;
import com.tianqianguai.buffpricequerysystem.service.CollectService;
import com.tianqianguai.buffpricequerysystem.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;

@Controller

public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    CollectService collectService;
    @RequestMapping("show_login")
    public String Login(){
        return "login";
    }
    @RequestMapping("logout")
    public String Logout(HttpServletRequest request) {
        request.getSession().setAttribute("user", null);
        return "redirect:home";
    }
    @PostMapping("login")
    public String AdminLogin(HttpServletRequest request){
        String username = request.getParameter("name");
//        System.out.println(username);
        String password = request.getParameter("password");
//        System.out.println(password);
        User user = userService.getUserByName(username);
        String user_status;
        if (user == null){
            user_status= "用户不存在";
            //用户不存在
        } else if (!user.getPassword().equals(password)){
            user_status = "密码错误";
            //密码错误
        }else {
            //登录成功
            user_status = "登录成功";
            request.getSession().setAttribute("user", user);
        }
        request.getSession().setAttribute("user_status", user_status);
        return "redirect:home";
    }
}
