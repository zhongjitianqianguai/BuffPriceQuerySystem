package com.tianqianguai.buffpricequerysystem.entity;

public class User {
    public int id;
    public String name;
    public String password;
    public String email;
    public String steam_id;

    public User(int id, String name, String password, String email, String steam_id) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.email = email;
        this.steam_id = steam_id;
    }

    public String getSteam_id() {
        return steam_id;
    }

    public void setSteam_id(String steam_id) {
        this.steam_id = steam_id;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
