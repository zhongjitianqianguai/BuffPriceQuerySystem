package com.tianqianguai.buffpricequerysystem.entity;


public class Good {
    String goods_id;
    double trend;
    String name;
    String category;
    String img_url;
    double now_price_buff;
    double the_lowest_price_buff;
    String wear_tear_group;
    double the_lowest_price_uu;
    double the_lowest_price_igxe;
    double the_lowest_price_c5;
    double now_price_uu;
    double now_price_igxe;
    double now_price_c5;
    double now_price_steam;

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

    public double getThe_lowest_price_buff() {
        return the_lowest_price_buff;
    }

    public void setThe_lowest_price_buff(double the_lowest_price_buff) {
        this.the_lowest_price_buff = the_lowest_price_buff;
    }

    public double getNow_price_buff() {
        return now_price_buff;
    }

    public void setNow_price_buff(double now_price_buff) {
        this.now_price_buff = now_price_buff;
    }

    public double getThe_lowest_price_uu() {
        return the_lowest_price_uu;
    }

    public void setThe_lowest_price_uu(double the_lowest_price_uu) {
        this.the_lowest_price_uu = the_lowest_price_uu;
    }

    public double getThe_lowest_price_igxe() {
        return the_lowest_price_igxe;
    }

    public void setThe_lowest_price_igxe(double the_lowest_price_igxe) {
        this.the_lowest_price_igxe = the_lowest_price_igxe;
    }

    public double getThe_lowest_price_c5() {
        return the_lowest_price_c5;
    }

    public void setThe_lowest_price_c5(double the_lowest_price_c5) {
        this.the_lowest_price_c5 = the_lowest_price_c5;
    }

    public double getNow_price_uu() {
        return now_price_uu;
    }

    public void setNow_price_uu(double now_price_uu) {
        this.now_price_uu = now_price_uu;
    }

    public double getNow_price_igxe() {
        return now_price_igxe;
    }

    public void setNow_price_igxe(double now_price_igxe) {
        this.now_price_igxe = now_price_igxe;
    }

    public double getNow_price_c5() {
        return now_price_c5;
    }

    public void setNow_price_c5(double now_price_c5) {
        this.now_price_c5 = now_price_c5;
    }

    public double getNow_price_steam() {
        return now_price_steam;
    }

    public void setNow_price_steam(double now_price_steam) {
        this.now_price_steam = now_price_steam;
    }

    public Good(String goods_id, double trend, String name, String category, String img_url, double now_price_buff, double the_lowest_price_buff, String wear_tear_group, double the_lowest_price_uu, double the_lowest_price_igxe, double the_lowest_price_c5, double now_price_uu, double now_price_igxe, double now_price_c5, double now_price_steam) {
        this.goods_id = goods_id;
        this.trend = trend;
        this.name = name;
        this.category = category;
        this.img_url = img_url;
        this.now_price_buff = now_price_buff;
        this.the_lowest_price_buff = the_lowest_price_buff;
        this.wear_tear_group = wear_tear_group;
        this.the_lowest_price_uu = the_lowest_price_uu;
        this.the_lowest_price_igxe = the_lowest_price_igxe;
        this.the_lowest_price_c5 = the_lowest_price_c5;
        this.now_price_uu = now_price_uu;
        this.now_price_igxe = now_price_igxe;
        this.now_price_c5 = now_price_c5;
        this.now_price_steam = now_price_steam;
    }
}
