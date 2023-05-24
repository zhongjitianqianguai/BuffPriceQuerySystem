package com.tianqianguai.buffpricequerysystem.service;

import com.tianqianguai.buffpricequerysystem.entity.Good;
import com.tianqianguai.buffpricequerysystem.mapper.GoodsMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GoodsService {
    @Autowired
    GoodsMapper goodsMapper;

    public List<Good> getGoodsIwant(int offset, int limit) {
        return goodsMapper.selectGoodsIwant(offset, limit);
    }
    public List<Good> selectGoodsIwantByCategory(int offset, int limit,String category) {
        return goodsMapper.selectGoodsIwantByCategory(offset, limit,category);
    }
    public Good getGoodById(String goods_id) {
        return goodsMapper.getGoodById(goods_id);
    }
    public List<Good> getGoodsByName(String goods_name,int offset, int limit) {
        return goodsMapper.getGoodsByName(goods_name,offset,limit);
    }
    public List<Good> getGoodByPriceSortAsc(int offset, int limit ){
        return goodsMapper.getGoodByPriceSortAsc(offset,limit);
    }
    public List<Good> getGoodByPriceSortDesc(int offset, int limit ){
        return goodsMapper.getGoodByPriceSortDesc(offset,limit);
    }
    public List<Good> getGoodByPriceSortCategoryAsc(int offset, int limit,String category){
        return goodsMapper.getGoodByPriceSortCategoryAsc(offset,limit,category);
    }
    public List<Good> getGoodByPriceSortCategoryDesc(int offset, int limit,String category){
        return goodsMapper.getGoodByPriceSortCategoryDesc(offset,limit,category);
    }
    public List<Good> getGoodByPriceSortSearchAsc(String goods_name,int offset, int limit){
        return goodsMapper.getGoodByPriceSortSearchAsc(goods_name,offset,limit);
    }
    public List<Good> getGoodByPriceSortSearchDesc(String goods_name,int offset, int limit){
        return goodsMapper.getGoodByPriceSortSearchDesc(goods_name,offset,limit);
    }
}
