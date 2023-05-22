package com.tianqianguai.buffpricequerysystem.mapper;

import com.tianqianguai.buffpricequerysystem.entity.Good;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface GoodsMapper {
    @Select("select * from buff_goods limit #{offset},#{limit}")
    List<Good> selectGoodsIwant(int offset, int limit);
    @Select("select * from buff_goods where category=#{category} limit #{offset},#{limit} ")
    List<Good> selectGoodsIwantByCategory(int offset, int limit,String category);
    @Select("select * from buff_goods where goods_id=#{goods_id}")
    Good getGoodById(String goods_id);
}
