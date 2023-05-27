package com.tianqianguai.buffpricequerysystem.entity;

public class Mail {
    int id;
    String content;
    String time;
    int user_id;
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public Mail(int id, String content, String time, int user_id) {
        this.id = id;
        this.content = content;
        this.time = time;
        this.user_id = user_id;
    }
}
