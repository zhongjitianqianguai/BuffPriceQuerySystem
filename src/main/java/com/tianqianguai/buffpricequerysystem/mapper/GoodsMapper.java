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
    @Select("select * from buff_goods where name like  '%' #{goods_name}  '%' limit #{offset},#{limit}")
    List<Good> getGoodsByName(String goods_name,int offset, int limit);
    @Select("select * from buff_goods order by now_price asc limit #{offset},#{limit}")
    List<Good> getGoodByPriceSortAsc(int offset, int limit);
    @Select("select * from buff_goods  order by now_price desc limit #{offset},#{limit}")
    List<Good> getGoodByPriceSortDesc(int offset, int limit);
    @Select("select * from buff_goods where name like  '%' #{goods_name}  '%' order by now_price desc limit #{offset},#{limit}")
    List<Good> getGoodByPriceSortSearchDesc(String goods_name,int offset, int limit);
    @Select("select * from buff_goods where name like  '%' #{goods_name}  '%' order by now_price Asc limit #{offset},#{limit}")
    List<Good> getGoodByPriceSortSearchAsc(String goods_name,int offset, int limit);
    @Select("select * from buff_goods where category=#{category} order by now_price desc  limit #{offset},#{limit}")
    List<Good> getGoodByPriceSortCategoryDesc(int offset, int limit,String category);
    @Select("select * from buff_goods where category=#{category} order by now_price asc  limit #{offset},#{limit}")
    List<Good> getGoodByPriceSortCategoryAsc(int offset, int limit,String category);

    @Select("select * from buff_goods where now_price between #{minPrice} and #{maxPrice} limit #{offset},#{limit}")
    List<Good> getGoodsByPriceBetween(double minPrice, double maxPrice, int offset, int limit);
    @Select("select * from buff_goods where now_price between #{minPrice} and #{maxPrice} order by now_price asc limit #{offset},#{limit}")
    List<Good> getGoodByPriceSortBetweenAsc(double minPrice, double maxPrice, int offset, int limit);
    @Select("select * from buff_goods where now_price between #{minPrice} and #{maxPrice} order by now_price desc limit #{offset},#{limit}")
    List<Good> getGoodByPriceSortBetweenDesc(double minPrice, double maxPrice, int offset, int limit);
}
