package com.tianqianguai.buffpricequerysystem.service;

import com.tianqianguai.buffpricequerysystem.entity.Mail;
import com.tianqianguai.buffpricequerysystem.mapper.MailMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MailService {
    @Autowired
    MailMapper mailMapper;

    public List<Mail> getMailByUserId(int user_id){
        return mailMapper.getMailByUserId(user_id);
    }

}
