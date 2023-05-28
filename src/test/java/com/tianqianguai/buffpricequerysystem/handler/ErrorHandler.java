package com.tianqianguai.buffpricequerysystem.handler;

import com.tianqianguai.buffpricequerysystem.controller.CollectController;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.junit.platform.commons.logging.Logger;
import org.junit.platform.commons.logging.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.client.HttpServerErrorException;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.NoHandlerFoundException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.net.BindException;

@ControllerAdvice
@Controller
public class ErrorHandler {
    Log logger = LogFactory.getLog(ErrorHandler.class);

    @ExceptionHandler(value = Exception.class)
    public ModelAndView handleException(HttpServletRequest request, HttpServletResponse response, Exception e) {
        logger.error(e);
        ModelAndView mav = new ModelAndView();
        mav.addObject("errMsg", "系统异常，请稍后再试！");
        mav.setViewName("error");
        return mav;
    }

    @ExceptionHandler(value = NoHandlerFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public String handle404(HttpServletRequest request, HttpServletResponse response, NoHandlerFoundException e) {

        return "404";
    }

    @ExceptionHandler(value = HttpServerErrorException.class)
    public ModelAndView handle500(HttpServletRequest request, HttpServletResponse response, HttpServerErrorException e) {
        logger.error("HttpServerErrorException: ", e);
        ModelAndView mav = new ModelAndView();
        mav.addObject("errMsg", "服务异常，请稍后再试！");
        mav.setViewName("error");
        return mav;
    }




}
