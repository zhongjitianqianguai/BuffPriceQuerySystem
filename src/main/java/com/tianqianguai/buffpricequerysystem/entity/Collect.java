package com.tianqianguai.buffpricequerysystem.entity;

public class Collect {
    int id;
    int user_id;
    String  goods_id;
    double expected_price;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public String getGoods_id() {
        return goods_id;
    }

    public void setGoods_id(String goods_id) {
        this.goods_id = goods_id;
    }

    public double getExpected_price() {
        return expected_price;
    }

    public void setExpected_price(double expected_price) {
        this.expected_price = expected_price;
    }

    public Collect(int id, int user_id, String goods_id, double expected_price) {
        this.id = id;
        this.user_id = user_id;
        this.goods_id = goods_id;
        this.expected_price = expected_price;
    }
}
