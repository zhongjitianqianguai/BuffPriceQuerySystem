package com.tianqianguai.buffpricequerysystem.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller

public class TheErrorController implements ErrorController {
    Log logger = LogFactory.getLog(TheErrorController.class);

    @RequestMapping("/error")
    public ModelAndView handle404Error(HttpServletRequest request, HttpServletResponse response) {
        ModelAndView modelAndView = new ModelAndView();
        if (response.getStatus() == 404) {
            logger.debug("404错误");
            modelAndView.setViewName("404");
            modelAndView.addObject("errorCode", response.getStatus());
            modelAndView.addObject("errorMessage", "Sorry, the requested page was not found.");
        } else if (response.getStatus() == 500) {
            logger.debug("500错误");
            modelAndView.setViewName("500");
            modelAndView.addObject("errorCode", response.getStatus());
            modelAndView.addObject("errorMessage", "出错了，服务器内部错误。");
        }
        return modelAndView;
    }
}
