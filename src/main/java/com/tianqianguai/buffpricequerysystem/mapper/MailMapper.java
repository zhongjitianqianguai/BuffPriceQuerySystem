package com.tianqianguai.buffpricequerysystem.mapper;

import com.tianqianguai.buffpricequerysystem.entity.Mail;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface MailMapper {
    @Select("select * from buff_mail where user_id=#{user_id} order by time desc limit #{offset},#{limit}")
    List<Mail> getMailByUserId(int user_id,int offset, int limit);
}
