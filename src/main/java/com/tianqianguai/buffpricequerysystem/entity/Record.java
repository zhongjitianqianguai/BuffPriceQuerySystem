package com.tianqianguai.buffpricequerysystem.entity;

public class Record {
    String goods_id;
    String time;
    double price;
    String source;

    public String getSource() {
        return source;
    }

    public void setSource(String source) {
        this.source = source;
    }

    public Record( String goods_id, String time, double price, String source) {
        this.goods_id = goods_id;
        this.time = time;
        this.price = price;
        this.source = source;
    }

    public String getGoods_id() {
        return goods_id;
    }

    public void setGoods_id(String goods_id) {
        this.goods_id = goods_id;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }


}
