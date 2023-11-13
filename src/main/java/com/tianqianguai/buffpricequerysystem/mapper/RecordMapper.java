package com.tianqianguai.buffpricequerysystem.mapper;

import com.tianqianguai.buffpricequerysystem.entity.Record;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface RecordMapper {
    @Select("select * from buff_record where goods_id=#{goods_id} and source=#{platform} order by time")
    List<Record> getGoodRecordByIdAndPlatform(String goods_id,String platform);
    @Select("select * from buff_record where goods_id=#{goods_id} and time>#{time} order by time ")
    List<Record> getGoodRecordByIdAndTime(String goods_id, String time);
}
