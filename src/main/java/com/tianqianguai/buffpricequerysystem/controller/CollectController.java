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

import javax.jws.WebParam;
import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

@Controller
public class CollectController {
    Log logger = LogFactory.getLog(MessageController.class);

    @Autowired
    CollectService collectService;
    @Autowired
    GoodsService goodsService;
    @PostMapping("/add_bookmark")
    public String addBookmark(HttpServletRequest request, Model model){
        logger.info("添加收藏");
        String good_id=request.getParameter("goods_id");
        String user_id=request.getParameter("user_id");
        int status=collectService.addBookmark(good_id,Integer.parseInt(user_id));
        String add_bookmark_status=null;
        if (status==1) {
            logger.debug("收藏成功");
            add_bookmark_status = "收藏成功";
        }else {
            logger.debug("收藏失败");
            add_bookmark_status = "收藏失败";
        }
        model.addAttribute("add_bookmark_status",add_bookmark_status);
        logger.info("重定向到goods");
        return "redirect:/goods?goods_id="+good_id;
    }
    public List<Integer> getPageNumbers(int currentPage, int totalPages) {
        logger.info("enter getPageNumbers()");
        List<Integer> pageNumbers = new ArrayList<Integer>();
        int start = Math.max(1, currentPage - 2);
        int end = Math.min(totalPages, currentPage + 2);
        for (int i = start; i <= end; i++) {
            pageNumbers.add(i);
        }
        logger.info("to pageNumbers");
        return pageNumbers;
    }
    @PostMapping("/delete_bookmark")
    public String deleteBookmark(HttpServletRequest request, Model model){
        logger.info("删除收藏");
        String good_id=request.getParameter("goods_id");
        String user_id=request.getParameter("user_id");
        int status=collectService.deleteBookmark(good_id,Integer.parseInt(user_id));
        String add_bookmark_status=null;
        if (status==1) {
            logger.debug("删除收藏成功");
            add_bookmark_status = "删除收藏成功";
        }else {
            logger.debug("删除收藏失败");
            add_bookmark_status = "删除收藏失败";
        }
        model.addAttribute("add_bookmark_status",add_bookmark_status);
        if (request.getParameter("where")!=null) {
            logger.info("回到收藏页");
            return "redirect:/show_bookmark";
        }else {
            logger.info("回到物品页");
            return "redirect:/goods?goods_id=" + good_id;
        }
    }
    @RequestMapping("/show_bookmark")
    public String showBookmark(HttpServletRequest request, Model model){
        logger.info("显示收藏页");
        User user = (User) request.getSession().getAttribute("user");
        String page = request.getParameter("page");
        String search = request.getParameter("search");
        int offset = 0;
        if (page == null) {
            page = "1";
        } else {
            offset = (Integer.parseInt(page) - 1) * 10;
        }
        if (user!=null) {
            List<Collect> collects=collectService.getCollectByUserId(user.getId());
            logger.info("根据用户id查询收藏");
            logger.trace(collects);
            int totalPage = collects.size() / 10 + 1;
            model.addAttribute("user", user);
            model.addAttribute("collects", collects);
            List<Good> goods=new ArrayList<>();
            if(search!=null){
                int goodsOffset = 0;
                List<Good> goodsTemp = new ArrayList<>();
                logger.info("根据物品id查询收藏");
                for (Collect collect : collects) {
                    Good good = goodsService.getGoodById(collect.getGoods_id());
                    logger.trace(good);
                    if (good.getName().contains(search)){
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
                model.addAttribute("page", Integer.parseInt(page));
                model.addAttribute("pageNumbers", getPageNumbers(Integer.parseInt(page), totalPageGoods));
            } else {
                if (offset >= 0 && offset < collects.size()) {
                    int end = Math.min(offset + 10, collects.size());
                    for (int i = offset; i < end; i++) {
                        Collect collect = collects.get(i);
                        Good good = goodsService.getGoodById(collect.getGoods_id());
                        goods.add(good);
                    }
                }
                model.addAttribute("goods",goods);
                model.addAttribute("search", search);
                model.addAttribute("page", Integer.parseInt(page));
                model.addAttribute("pageNumbers", getPageNumbers(Integer.parseInt(page), totalPage));
            }
        } else {
            logger.warn("非法请求");
            //非法请求
        };
        return "collect";
    }
}
