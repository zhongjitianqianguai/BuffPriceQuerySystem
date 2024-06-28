package com.tianqianguai.buffpricequerysystem.service;

import com.tianqianguai.buffpricequerysystem.entity.Record;
import com.tianqianguai.buffpricequerysystem.mapper.RecordMapper;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class RecordService {
    Log logger = LogFactory.getLog(RecordService.class);

    @Autowired
    RecordMapper recordMapper;
    public List<Record> getGoodRecordByIdAndPlatform(String goods_id,String platform){
        logger.debug("enter getGoodRecordById()");
        return recordMapper.getGoodRecordByIdAndPlatform(Integer.parseInt(goods_id),platform);
    }
    public List<Record> getGoodRecordByIdAndTime(String goods_id,String time){
        logger.debug("enter getGoodRecordByIdAndTime()");
        return recordMapper.getGoodRecordByIdAndTime(Integer.parseInt(goods_id),time);
    }
}
