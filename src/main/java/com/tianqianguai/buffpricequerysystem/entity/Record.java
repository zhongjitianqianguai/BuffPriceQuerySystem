package com.tianqianguai.buffpricequerysystem.entity;

public class Record {
    String record_id;
    String goods_id;
    String time;
    double price;

    public Record(String record_id, String goods_id, String time, double price) {
        this.record_id = record_id;
        this.goods_id = goods_id;
        this.time = time;
        this.price = price;
    }

    public String getRecord_id() {
        return record_id;
    }

    public void setRecord_id(String record_id) {
        this.record_id = record_id;
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

    @Override
    public String toString() {
        return "Record{" +
                "record_id='" + record_id + '\'' +
                ", goods_id='" + goods_id + '\'' +
                ", time='" + time + '\'' +
                ", price=" + price +
                '}';
    }
}
