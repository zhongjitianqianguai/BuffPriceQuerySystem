package com.tianqianguai.buffpricequerysystem.service;

import com.tianqianguai.buffpricequerysystem.entity.Good;
import com.tianqianguai.buffpricequerysystem.mapper.GoodsMapper;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GoodsService {
    Log logger = LogFactory.getLog(GoodsService.class);

    @Autowired
    GoodsMapper goodsMapper;

    public List<Good> getGoodsIwant(int offset, int limit) {
        logger.debug("enter getGoodsIwant()");
        return goodsMapper.selectGoodsIwant(offset, limit);
    }
    public List<Good> selectGoodsIwantByCategory(int offset, int limit,String category) {
        logger.debug("enter selectGoodsIwantByCategory()");
        return goodsMapper.selectGoodsIwantByCategory(offset, limit,category);
    }
    public Good getGoodById(String goods_id) {
        logger.debug("enter getGoodById()");
        return goodsMapper.getGoodById(goods_id);
    }
    public List<Good> getGoodsByName(String goods_name,int offset, int limit) {
        logger.debug("enter getGoodsByName()");
        return goodsMapper.getGoodsByName(goods_name,offset,limit);
    }
    public List<Good> getGoodByPriceSortAsc(int offset, int limit ){
        logger.debug("enter getGoodByPriceSortAsc()");
        return goodsMapper.getGoodByPriceSortAsc(offset,limit);
    }
    public List<Good> getGoodByPriceSortDesc(int offset, int limit ){
        logger.debug("enter getGoodByPriceSortDesc()");
        return goodsMapper.getGoodByPriceSortDesc(offset,limit);
    }
    public List<Good> getGoodByPriceSortCategoryAsc(int offset, int limit,String category){
        logger.debug("enter getGoodByPriceSortCategoryAsc()");
        return goodsMapper.getGoodByPriceSortCategoryAsc(offset,limit,category);
    }
    public List<Good> getGoodByPriceSortCategoryDesc(int offset, int limit,String category){
        logger.debug("enter getGoodByPriceSortCategoryDesc()");
        return goodsMapper.getGoodByPriceSortCategoryDesc(offset,limit,category);
    }
    public List<Good> getGoodByPriceSortSearchAsc(String goods_name,int offset, int limit){
        logger.debug("enter getGoodByPriceSortSearchAsc()");
        return goodsMapper.getGoodByPriceSortSearchAsc(goods_name,offset,limit);
    }
    public List<Good> getGoodByPriceSortSearchDesc(String goods_name,int offset, int limit){
        logger.debug("enter getGoodByPriceSortSearchDesc()");
        return goodsMapper.getGoodByPriceSortSearchDesc(goods_name,offset,limit);
    }
    public List<Good> getGoodsByPriceBetween(double minPrice, double maxPrice, int offset, int limit){
        logger.debug("enter getGoodsByPriceBetween()");
        return goodsMapper.getGoodsByPriceBetween(minPrice,maxPrice,offset,limit);
    }
    public List<Good> getGoodByPriceSortBetweenAsc(double minPrice, double maxPrice, int offset, int limit){
        logger.debug("enter getGoodByPriceSortBetweenAsc()");
        return goodsMapper.getGoodByPriceSortBetweenAsc(minPrice,maxPrice,offset,limit);
    }
    public List<Good> getGoodByPriceSortBetweenDesc(double minPrice, double maxPrice, int offset, int limit){
        logger.debug("enter getGoodByPriceSortBetweenDesc()");
        return goodsMapper.getGoodByPriceSortBetweenDesc(minPrice,maxPrice,offset,limit);
    }

    public List<Good> getGoodByPriceSortCategoryUpTrendDesc(int offset, int limit, String category){
        logger.debug("enter getGoodByPriceSortCategoryUpTrendDesc()");
        return goodsMapper.getGoodByPriceSortCategoryUpTrendDesc(offset,limit,category);
    }
    public List<Good> getGoodByPriceSortCategoryDownTrendDesc(int offset, int limit, String category){
        logger.debug("enter getGoodByPriceSortCategoryDownTrendDesc()");
        return goodsMapper.getGoodByPriceSortCategoryDownTrendDesc(offset,limit,category);
    }
    public List<Good> getGoodByPriceSortSearchTrendUpDesc(String goods_name,int offset, int limit){
        logger.debug("enter getGoodByPriceSortSearchTrendUpDesc()");
        return goodsMapper.getGoodByPriceSortSearchTrendUpDesc(goods_name,offset,limit);
    }
    public List<Good> getGoodByPriceSortSearchTrendDownDesc(String goods_name,int offset, int limit){
        logger.debug("enter getGoodByPriceSortSearchTrendDownDesc()");
        return goodsMapper.getGoodByPriceSortSearchTrendDownDesc(goods_name,offset,limit);
    }
    public List<Good> getGoodByPriceSortTrendUpBetweenDesc(double minPrice, double maxPrice, int offset, int limit){
        logger.debug("enter getGoodByPriceSortTrendUpBetweenDesc()");
        return goodsMapper.getGoodByPriceSortTrendUpBetweenDesc(minPrice,maxPrice,offset,limit);
    }
    public List<Good> getGoodByPriceSortTrendDownBetweenDesc(double minPrice, double maxPrice, int offset, int limit){
        logger.debug("enter getGoodByPriceSortTrendDownBetweenDesc()");
        return goodsMapper.getGoodByPriceSortTrendDownBetweenDesc(minPrice,maxPrice,offset,limit);
    }
    public List<Good> getGoodByPriceSortTrendUpDesc(int offset, int limit){
        logger.debug("enter getGoodByPriceSortTrendUpDesc()");
        return goodsMapper.getGoodByPriceSortTrendUpDesc(offset,limit);
    }
    public List<Good> getGoodByPriceSortTrendDownDesc(int offset, int limit){
        logger.debug("enter getGoodByPriceSortTrendDownDesc()");
        return goodsMapper.getGoodByPriceSortTrendDownDesc(offset,limit);
    }

}
