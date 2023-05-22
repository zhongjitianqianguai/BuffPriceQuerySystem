package com.tianqianguai.buffpricequerysystem.entity;


public class Good {
    String goods_id;
    String name;
    double trend;
    double the_lowest_price;
    double expected_price;

    String img_url;
    String category;
    double  now_price;
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

    public double getExpected_price() {
        return expected_price;
    }

    public void setExpected_price(double expected_price) {
        this.expected_price = expected_price;
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

    public Good(String goods_id, double trend,String name,double expected_price,String category, String img_url,double now_price, double the_lowest_price   ) {
        this.goods_id = goods_id;
        this.name = name;
        this.trend = trend;
        this.the_lowest_price = the_lowest_price;
        this.expected_price = expected_price;
        this.img_url = img_url;
        this.category = category;
        this.now_price = now_price;
    }

    @Override
    public String toString() {
        return "Good{" +
                "goods_id='" + goods_id + '\'' +
                ", name='" + name + '\'' +
                ", trend=" + trend +
                ", the_lowest_price=" + the_lowest_price +
                ", expected_price=" + expected_price +
                ", img_url='" + img_url + '\'' +
                ", category='" + category + '\'' +
                ", now_price=" + now_price +
                '}';
    }
}
