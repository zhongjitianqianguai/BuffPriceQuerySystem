package com.tianqianguai.buffpricequerysystem.controller;

import com.tianqianguai.buffpricequerysystem.entity.User;
import com.tianqianguai.buffpricequerysystem.service.CollectService;
import com.tianqianguai.buffpricequerysystem.service.UserService;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;

@Controller

public class UserController {
    Log logger = LogFactory.getLog(UserController.class);

    @Autowired
    private UserService userService;
    @Autowired
    CollectService collectService;
    @RequestMapping("show_login")
    public String Login(){
        logger.info("enter Login()");
        logger.info("to login");
        return "login";
    }
    @RequestMapping("logout")
    public String Logout(HttpServletRequest request) {
        logger.info("enter Logout()");
        request.getSession().setAttribute("user", null);
        logger.info("重定向到主页");
        return "redirect:home";
    }
    @PostMapping("login")
    public String AdminLogin(HttpServletRequest request){
        logger.info("enter AdminLogin()");
        String username = request.getParameter("name");
//        System.out.println(username);
        String password = request.getParameter("password");
//        System.out.println(password);
        logger.debug("username:"+username+"password"+password);
        User user = userService.getUserByName(username);
        String user_status;
        if (user == null){
            logger.debug("用户不存在");
            user_status= "用户不存在";
            //用户不存在
        } else if (!user.getPassword().equals(password)){
            logger.debug("密码错误");
            user_status = "密码错误";
            //密码错误
        }else {
            //登录成功
            logger.debug("登录成功");
            user_status = "登录成功";
            request.getSession().setAttribute("user", user);
        }
        request.getSession().setAttribute("user_status", user_status);
        logger.info("重定向到主页");
        return "redirect:home";
    }
}
