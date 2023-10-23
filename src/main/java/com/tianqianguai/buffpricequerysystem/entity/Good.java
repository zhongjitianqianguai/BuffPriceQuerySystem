package com.tianqianguai.buffpricequerysystem.entity;


public class Good {
    String goods_id;
    double trend;
    String name;
    String category;
    String img_url;
    double  now_price;
    double the_lowest_price;
    String wear_tear_group;

    public String getWear_tear_group() {
        return wear_tear_group;
    }

    public void setWear_tear_group(String wear_tear_group) {
        this.wear_tear_group = wear_tear_group;
    }

    public String getGoods_id() {
        return goods_id;
    }

    public void setGoods_id(String goods_id) {
        this.goods_id = goods_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }



    public String getImg_url() {
        return img_url;
    }

    public void setImg_url(String img_url) {
        this.img_url = img_url;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public double getTrend() {
        return trend;
    }

    public void setTrend(double trend) {
        this.trend = trend;
    }

    public double getThe_lowest_price() {
        return the_lowest_price;
    }

    public void setThe_lowest_price(double the_lowest_price) {
        this.the_lowest_price = the_lowest_price;
    }

    public double getNow_price() {
        return now_price;
    }

    public void setNow_price(double now_price) {
        this.now_price = now_price;
    }

    public Good(String goods_id, double trend, String name, String category, String img_url, double now_price, double the_lowest_price, String wear_tear_group) {
        this.goods_id = goods_id;
        this.trend = trend;
        this.name = name;
        this.category = category;
        this.img_url = img_url;
        this.now_price = now_price;
        this.the_lowest_price = the_lowest_price;
        this.wear_tear_group = wear_tear_group;
    }
}
