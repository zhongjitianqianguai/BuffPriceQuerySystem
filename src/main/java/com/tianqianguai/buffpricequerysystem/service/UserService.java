package com.tianqianguai.buffpricequerysystem.service;

import com.tianqianguai.buffpricequerysystem.entity.User;
import com.tianqianguai.buffpricequerysystem.mapper.UserMapper;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class UserService {
    Log logger = LogFactory.getLog(UserService.class);

    @Autowired
    public UserMapper userMapper;

    public User getUserByName(String name){
        logger.debug("enter getUserByName()");
        return userMapper.getUserByName(name);
    }
    public int addUser(String name,String password){
        logger.debug("enter addUser()");
        return userMapper.addUser(name,password);
    }
}
