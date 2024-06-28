package com.tianqianguai.buffpricequerysystem.mapper;

import com.tianqianguai.buffpricequerysystem.entity.Record;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface RecordMapper {
    @Select("select * from #{goods_id}_record where source=#{platform} order by time")
    List<Record> getGoodRecordByIdAndPlatform(int goods_id,String platform);
    @Select("select * from #{goods_id}_record wheretime>#{time} order by time ")
    List<Record> getGoodRecordByIdAndTime(int goods_id, String time);
}
