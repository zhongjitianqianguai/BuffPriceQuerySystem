package com.tianqianguai.buffpricequerysystem.mapper;

import com.tianqianguai.buffpricequerysystem.entity.Good;
import com.tianqianguai.buffpricequerysystem.entity.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface InventoryMapper {
    @Select("select * from buff_user where name = #{name}")
    User getUserByName(String name);
    @Select("select * from buff_user where steam_id = #{steam_id}")
    User getUserBySteamId(String steam_id);
    @Select("select * from buff_goods where name like  '%' #{goods_name}")
    Good getGoodsByLikeAName(String goods_name);


    @Select("<script>"
            + "select * from buff_goods where name in "
            + "<foreach item='item' index='index' collection='list' open='(' separator=',' close=')'>"
            + "#{item}"
            + "</foreach>"
            + "</script>")
    List<Good> getGoodsByLikeNames(List<String> names);
    @Select("<script>"
            + "select name, count(*) as quantity from buff_goods where name in "
            + "<foreach item='item' index='index' collection='list' open='(' separator=',' close=')'>"
            + "'${item}'"
            + "</foreach>"
            + " group by name"
            + "</script>")
    List<Good> getGoodsWithQuantity(List<String> names);









}
