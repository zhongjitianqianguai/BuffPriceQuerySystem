package com.tianqianguai.buffpricequerysystem.entity;

public class Record {
    String time;
    double price;
    String source;

    public String getSource() {
        return source;
    }

    public void setSource(String source) {
        this.source = source;
    }

    public Record( String time, double price, String source) {
        this.time = time;
        this.price = price;
        this.source = source;
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
