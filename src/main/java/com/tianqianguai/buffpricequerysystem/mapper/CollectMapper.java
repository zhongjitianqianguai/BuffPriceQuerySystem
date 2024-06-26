package com.tianqianguai.buffpricequerysystem.mapper;

import com.tianqianguai.buffpricequerysystem.entity.Collect;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface CollectMapper {
    @Insert("insert into buff_user_collect(goods_id,user_id,expected_price) values(#{good_id},#{user_id},1)")
    int addBookmark(String good_id, int user_id);
    @Delete("delete from buff_user_collect where goods_id=#{good_id} and user_id=#{user_id}")
    int deleteBookmark(String good_id, int user_id);
    @Select("select * from buff_user_collect where user_id=#{user_id}")
    List<Collect> getCollectByUserId(int user_id);
    @Select("select * from buff_user_collect where user_id=#{user_id} and goods_id=#{good_id}")
    Collect getCollectByUserIdAndGoodId(int user_id, String good_id);
    @Update("update buff_user_collect set expected_price=#{expected_price} where goods_id=#{goods_id}")
    int changeExpectedPrice(String goods_id,double expected_price);
}
