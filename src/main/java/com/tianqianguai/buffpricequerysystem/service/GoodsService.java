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
}
