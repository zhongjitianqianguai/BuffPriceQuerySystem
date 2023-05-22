package com.tianqianguai.buffpricequerysystem.service;

import com.tianqianguai.buffpricequerysystem.entity.Good;
import com.tianqianguai.buffpricequerysystem.entity.Record;
import com.tianqianguai.buffpricequerysystem.mapper.RecordMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class RecordService {
    @Autowired
    RecordMapper recordMapper;
    public List<Record> getGoodRecordById(String goods_id){
        return recordMapper.getGoodRecordById(goods_id);
    }
}
