package com.tianqianguai.buffpricequerysystem.service;

import com.tianqianguai.buffpricequerysystem.entity.User;
import com.tianqianguai.buffpricequerysystem.mapper.UserSettingMapper;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class UserSettingService {
    Log logger = LogFactory.getLog(UserService.class);

    @Autowired
    public UserSettingMapper userSettingMapper;

    public String UpdateUserNameById(User user){
        userSettingMapper.UpdateUserNameById(user.getName(),user.getId());
        return "success";
    }
    public String UpdateUserEmailById(User user){
        userSettingMapper.UpdateUserEmailById(user.getEmail(),user.getId());
        return "success";
    }
    public String UpdateUserPasswordById(User user){
        userSettingMapper.UpdateUserPasswordById(user.getPassword(),user.getId());
        return "success";
    }
    public String UpdateUserSteamIdById(User user){
        userSettingMapper.UpdateUserSteamIdById(user.getSteam_id(),user.getId());
        return "success";
    }
}
