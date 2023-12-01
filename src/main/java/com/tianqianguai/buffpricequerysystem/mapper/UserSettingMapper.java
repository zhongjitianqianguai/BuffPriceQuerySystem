package com.tianqianguai.buffpricequerysystem.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface UserSettingMapper {
    @Update("UPDATE buff_user set `name` = #{nickname} where id=#{id}")
    void UpdateUserNameById(@Param("nickname") String nickname, @Param("id") int id);

    @Update("UPDATE buff_user set `email` = #{email} where id=#{id}")
    void UpdateUserEmailById(@Param("email") String email, @Param("id") int id);

    @Update("UPDATE buff_user set `Password` = #{Password} where id=#{id}")
    void UpdateUserPasswordById(@Param("Password") String Password, @Param("id") int id);

    @Update("UPDATE buff_user set `steam_id` = #{steam_id} where id=#{id}")
    void UpdateUserSteamIdById(@Param("steam_id") String steam_id, @Param("id") int id);
}
