package com.tianqianguai.buffpricequerysystem.service;

import com.tianqianguai.buffpricequerysystem.entity.Collect;
import com.tianqianguai.buffpricequerysystem.mapper.CollectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CollectService {
    @Autowired
    CollectMapper collectMapper;
    public int addBookmark(String good_id, int user_id) {
        return collectMapper.addBookmark(good_id, user_id);
    }
    public int deleteBookmark(String good_id, int user_id) {
        return collectMapper.deleteBookmark(good_id, user_id);
    }
    public List<Collect> getCollectByUserId(int user_id) {
        return collectMapper.getCollectByUserId(user_id);
    }
    public Collect getCollectByUserIdAndGoodId(int user_id, String good_id) {
        return collectMapper.getCollectByUserIdAndGoodId(user_id, good_id);
    }
}