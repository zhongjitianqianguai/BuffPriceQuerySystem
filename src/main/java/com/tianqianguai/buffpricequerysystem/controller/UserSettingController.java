package com.tianqianguai.buffpricequerysystem.controller;

import com.tianqianguai.buffpricequerysystem.entity.User;
import com.tianqianguai.buffpricequerysystem.service.UserSettingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Controller

public class UserSettingController {
    @Autowired
    private UserSettingService userSettingService;



    @RequestMapping("/show_usersetting")
    public String GoSteamID(HttpServletRequest request, Model model, HttpServletResponse response) throws IOException {
        User user = (User) request.getSession().getAttribute("user");
        String passwordbool=request.getParameter("passwordbool");
        if (passwordbool==null){
            passwordbool="true";
        }
        model.addAttribute("passwordbool", passwordbool);
        model.addAttribute("user", user);
        return "usersetting";

    }

    @RequestMapping("/update_usersetting")
    public String showUserSettingPage(HttpServletRequest request, Model model) {
        User user = (User) request.getSession().getAttribute("user");
        String nickname = request.getParameter("nickname");
        String email = request.getParameter("email");
        String steamid = request.getParameter("steamid");

        System.out.println("nickname"+nickname);
        System.out.println("email"+email);
        System.out.println("steamid"+steamid);
        //修改昵称
        if (nickname==null){
            nickname="";
        }else{
            user.setName(nickname);
            userSettingService.UpdateUserNameById(user);
        }
        String passwordbool="true";
        String newPassword = request.getParameter("newPassword");
        String oldPassword = request.getParameter("oldPassword");
        if (oldPassword==null ){
            oldPassword="";
        }
        if (newPassword==null){
            newPassword="";
        }
        if (steamid==null){
            steamid="";
        }
        System.out.println("newPassword"+newPassword);
        System.out.println("oldPassword"+oldPassword);
        //修改email
        if (email==null){
            email="";
        }else{
            user.setEmail(email);
            userSettingService.UpdateUserEmailById(user);
        }
        //旧密码判断
        if(oldPassword!="" ){
            if (oldPassword.equals(user.password)){
                //修改password
                user.setPassword(newPassword);
                userSettingService.UpdateUserPasswordById(user);
                passwordbool="true";
            }else {
                passwordbool="false";

            }
        }
        System.out.println("passwordbool"+passwordbool);


        //steamid更新或绑定
        if(steamid!="" ){
            user.setSteam_id(steamid);
            userSettingService.UpdateUserSteamIdById(user);
        }
        request.getSession().setAttribute("user", user);
        model.addAttribute("user", user);
        String redirectUrl = "redirect:/show_usersetting?passwordbool=" + passwordbool;
        return redirectUrl;
    }
}
