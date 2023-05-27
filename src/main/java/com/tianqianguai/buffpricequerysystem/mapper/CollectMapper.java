package com.tianqianguai.buffpricequerysystem.mapper;

import com.tianqianguai.buffpricequerysystem.entity.Collect;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface CollectMapper {
    @Insert("insert into buff_user_collect(goods_id,user_id) values(#{good_id},#{user_id})")
    int addBookmark(String good_id, int user_id);
    @Delete("delete from buff_user_collect where goods_id=#{good_id} and user_id=#{user_id}")
    int deleteBookmark(String good_id, int user_id);
    @Select("select * from buff_user_collect where user_id=#{user_id}")
    List<Collect> getCollectByUserId(int user_id);
    @Select("select * from buff_user_collect where user_id=#{user_id} and goods_id=#{good_id}")
    Collect getCollectByUserIdAndGoodId(int user_id, String good_id);
}
