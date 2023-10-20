package com.tianqianguai.buffpricequerysystem.mapper;

import com.tianqianguai.buffpricequerysystem.entity.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface InventoryMapper {
    @Select("select * from buff_user where name = #{name}")
    User getUserByName(String name);
    @Select("select * from buff_user where steam_id = #{steam_id}")
    User getUserBySteamId(String steam_id);
}
