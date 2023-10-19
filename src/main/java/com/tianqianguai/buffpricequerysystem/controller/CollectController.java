package com.tianqianguai.buffpricequerysystem.controller;

import com.tianqianguai.buffpricequerysystem.entity.Collect;
import com.tianqianguai.buffpricequerysystem.entity.Good;
import com.tianqianguai.buffpricequerysystem.entity.User;
import com.tianqianguai.buffpricequerysystem.service.CollectService;
import com.tianqianguai.buffpricequerysystem.service.GoodsService;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Controller
public class CollectController {
    Log logger = LogFactory.getLog(CollectController.class);
    @Autowired
    CollectService collectService;
    @Autowired
    GoodsService goodsService;
    @PostMapping("/add_bookmark")
    public String addBookmark(HttpServletRequest request, Model model){
        String good_id=request.getParameter("goods_id");
        String user_id=request.getParameter("user_id");
        logger.debug("good_id"+good_id+"---user_id"+user_id);
        int status=collectService.addBookmark(good_id,Integer.parseInt(user_id));
        String add_bookmark_status=null;
        if (status==1) {
            logger.info("收藏成功");
            add_bookmark_status = "收藏成功";
        }else {
            logger.error("收藏失败");
            add_bookmark_status = "收藏失败";
        }
        model.addAttribute("add_bookmark_status",add_bookmark_status);
        return "redirect:/goods?goods_id="+good_id;
    }
    public List<Integer> getPageNumbers(int currentPage, int totalPages) {
        List<Integer> pageNumbers = new ArrayList<Integer>();
        int start = Math.max(1, currentPage - 2);
        int end = Math.min(totalPages, currentPage + 2);
        for (int i = start; i <= end; i++) {
            pageNumbers.add(i);
        }
        return pageNumbers;
    }
    @PostMapping("change_expected_price")
    public String change_expected_price(HttpServletRequest request, Model model, HttpServletResponse response) throws IOException {
        logger.info("enter change_expected_price()");
        String expected_price = request.getParameter("expected_price");
        String good_id = request.getParameter("goods_id");
        User user = (User) request.getSession().getAttribute("user");
        logger.debug("用户" + user + "修改了" + good_id + "商品的预期价格");
        model.addAttribute("user", user);
        int change_status = collectService.changeExpectedPrice(good_id, Double.parseDouble(expected_price));
        if (change_status == 1) {
            logger.info("修改商品的预期价格完成");
            model.addAttribute("message", "修改成功");
        } else {
            logger.error("修改商品的预期价格失败");
            try {
                response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "修改商品的预期价格失败");
                return null;
            } finally {
                response.flushBuffer();
            }
        }
        return "redirect:/show_bookmark";
    }
    @PostMapping("/delete_bookmark")
    public String deleteBookmark(HttpServletRequest request, Model model, HttpServletResponse response) throws IOException {
        String good_id=request.getParameter("goods_id");
        String user_id=request.getParameter("user_id");
        logger.debug("good_id"+good_id+"---user_id"+user_id);
        int status=collectService.deleteBookmark(good_id,Integer.parseInt(user_id));
        String delete_bookmark_status =null;
        if (status==1) {
            logger.info("删除收藏成功");
            delete_bookmark_status = "删除收藏成功";
        }else {
            delete_bookmark_status = "删除收藏失败";
            try {
                logger.error("删除收藏失败");
                response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "删除收藏失败");
            } finally {
                response.flushBuffer();
            }
        }
        model.addAttribute("add_bookmark_status", delete_bookmark_status);
        if (request.getParameter("where")!=null) {
            logger.info("回到我的收藏");
            return "redirect:/show_bookmark";
        }else {
            logger.info("回到商品详情页");
            return "redirect:/goods?goods_id=" + good_id;
        }
    }
    @RequestMapping("/show_bookmark")
    public String showBookmark(HttpServletRequest request, Model model,HttpServletResponse response) throws IOException {
        logger.info("enter showBookmark()");
        User user = (User) request.getSession().getAttribute("user");
        String page = request.getParameter("page");
        String search = request.getParameter("search");
        logger.debug("search:"+search);
        int offset = 0;
        if (page == null) {
            page = "1";
        } else {
            offset = (Integer.parseInt(page) - 1) * 10;
        }
        if (user!=null) {
            List<Collect> collects=collectService.getCollectByUserId(user.getId());
            logger.trace(collects);
            int totalPage = collects.size() / 10 + 1;
            model.addAttribute("user", user);
            model.addAttribute("collects", collects);
            List<Good> goods=new ArrayList<>();
            logger.trace(goods);
            if(search!=null){
                int goodsOffset = 0;
                List<Good> goodsTemp = new ArrayList<>();
                for (Collect collect : collects) {
                    Good good = goodsService.getGoodById(collect.getGoods_id());
                    if (good.getName().contains(search)){
                        logger.debug(good.getName());
                        goodsTemp.add(good);
                    }
                }
                int totalPageGoods = goodsTemp.size() / 10 + 1;
                if (page == null) {
                    page = "1";
                } else {
                    goodsOffset = (Integer.parseInt(page) - 1) * 10;
                }
                if (goodsOffset >= 0 && goodsOffset < goodsTemp.size()) {
                    int goodsEnd = Math.min(goodsOffset + 10, goodsTemp.size());
                    for (int i = goodsOffset; i < goodsEnd; i++) {
                        goods.add(goodsTemp.get(i));
                    }
                }
                model.addAttribute("goods",goods);
                model.addAttribute("search", search);
                model.addAttribute("collects", collects);
                model.addAttribute("page", Integer.parseInt(page));
                model.addAttribute("pageNumbers", getPageNumbers(Integer.parseInt(page), totalPageGoods));
            } else {
                if (offset >= 0 && offset < collects.size()) {
                    int end = Math.min(offset + 10, collects.size());
                    for (int i = offset; i < end; i++) {
                        Collect collect = collects.get(i);
                        Good good = goodsService.getGoodById(collect.getGoods_id());
                        logger.debug(good.getName());
                        goods.add(good);
                    }
                }
                model.addAttribute("goods",goods);
                model.addAttribute("search", search);
                model.addAttribute("collects", collects);
                model.addAttribute("page", Integer.parseInt(page));
                model.addAttribute("pageNumbers", getPageNumbers(Integer.parseInt(page), totalPage));
                logger.info("进入我的收藏页面");
                return "collect";
            }
        } else {
            try {
                logger.error("用户未登录，非法请求");
                response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "用户未登录，非法请求");
            } finally {
                response.flushBuffer();
            }
            //非法请求
        }
        return null;
    }
}
