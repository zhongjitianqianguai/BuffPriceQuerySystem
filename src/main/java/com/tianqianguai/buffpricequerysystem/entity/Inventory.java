package com.tianqianguai.buffpricequerysystem.entity;

import java.util.List;

public class Inventory {
    private int code;
    private String message;
    private List<Result> result;

    // Getter and Setter methods for the above fields

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public List <Result> getResult() {
        return result;
    }

    public void setResult(List <Result> result) {
        this.result = result;
    }
}
