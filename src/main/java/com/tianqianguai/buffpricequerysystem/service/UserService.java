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

    public User getUserByName(String username){
        logger.debug("enter getUserByName()");
        return userMapper.getUserByName(username);
    }
}
