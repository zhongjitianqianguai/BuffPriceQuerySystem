package com.tianqianguai.buffpricequerysystem.mapper;

import com.tianqianguai.buffpricequerysystem.entity.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;


@Mapper
@Repository
public interface UserMapper {
    @Select("select * from buff_user where name = #{name}")
    User getUserByName(String name);
    @Insert("insert into buff_user(name,password,email) values(#{name},#{password},#{name})")
    int addUser(String name,String password);
}
