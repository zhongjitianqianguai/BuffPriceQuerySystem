package com.tianqianguai.buffpricequerysystem.controller;

import com.tianqianguai.buffpricequerysystem.entity.Mail;
import com.tianqianguai.buffpricequerysystem.entity.User;
import com.tianqianguai.buffpricequerysystem.service.MailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

@Controller
public class MailController {
    @Autowired
    MailService mailService;

    public List<Integer> getPageNumbers(int currentPage, int totalPages) {
        List<Integer> pageNumbers = new ArrayList<Integer>();
        int start = Math.max(1, currentPage - 2);
        int end = Math.min(totalPages, currentPage + 2);
        for (int i = start; i <= end; i++) {
            pageNumbers.add(i);
        }
        return pageNumbers;
    }

    @RequestMapping("/show_message")
    public String showMessage(HttpServletRequest request, Model model){
        User user=(User)request.getSession().getAttribute("user");
        if (user==null) {
            //非法请求
        }
        String page = request.getParameter("page");
        int offset = 0;
        if (page == null) {
            page = "1";
        } else {
            offset = (Integer.parseInt(page) - 1) * 10;
        }
        List<Mail> mails=mailService.getMailByUserId(user.getId(),offset,10);
        model.addAttribute("user",user);
        model.addAttribute("mails",mails);
        model.addAttribute("page", Integer.parseInt(page));
        model.addAttribute("pageNumbers", getPageNumbers(Integer.parseInt(page), 10));
        return "mail";
    }
}
