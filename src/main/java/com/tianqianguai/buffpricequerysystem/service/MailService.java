package com.tianqianguai.buffpricequerysystem.service;

import com.tianqianguai.buffpricequerysystem.entity.Mail;
import com.tianqianguai.buffpricequerysystem.mapper.MailMapper;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MailService {
    Log logger = LogFactory.getLog(MailService.class);
    @Autowired
    MailMapper mailMapper;

    public List<Mail> getMailByUserId(int user_id,int offset, int limit){
        logger.debug("根据用户id返回信息");
        return mailMapper.getMailByUserId(user_id,offset,limit);
    }

}
