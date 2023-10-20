package com.tianqianguai.buffpricequerysystem.entity;

import java.util.List;

public class Result {
    private long itemId;
    private int goodsId;
    private String name;
    private String marketName;
    private String marketHashName;
    private String weaponId;
    private int exterior;
    private int quality;
    private int rarity;
    private int type;
    private List<Object> stickerList; // 根据实际情况修改类型
    private String picUrl;
    private String wearValue;
    private int steamPrice;
    private String description;
    private int paintSeed;
    private int paintIndex;
    private Object style; // 根据实际情况修改类型
    private Object label; // 根据实际情况修改类型
    private String inspectId;
    private boolean tradable;
    private boolean marketable;
    private List<DecorationTag> decorationTags;
    private Object frozeExpireTime; // 根据实际情况修改类型
    private int suggestPrice;
    private Object changeRateMap; // 根据实际情况修改类型
    private Object changeMap; // 根据实际情况修改类型
    private Object purchasePrice; // 根据实际情况修改类型
    private List<Integer> tagIdList;

    public long getItemId() {
        return itemId;
    }

    public void setItemId(long itemId) {
        this.itemId = itemId;
    }

    public int getGoodsId() {
        return goodsId;
    }

    public void setGoodsId(int goodsId) {
        this.goodsId = goodsId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMarketName() {
        return marketName;
    }

    public void setMarketName(String marketName) {
        this.marketName = marketName;
    }

    public String getMarketHashName() {
        return marketHashName;
    }

    public void setMarketHashName(String marketHashName) {
        this.marketHashName = marketHashName;
    }

    public String getWeaponId() {
        return weaponId;
    }

    public void setWeaponId(String weaponId) {
        this.weaponId = weaponId;
    }

    public int getExterior() {
        return exterior;
    }

    public void setExterior(int exterior) {
        this.exterior = exterior;
    }

    public int getQuality() {
        return quality;
    }

    public void setQuality(int quality) {
        this.quality = quality;
    }

    public int getRarity() {
        return rarity;
    }

    public void setRarity(int rarity) {
        this.rarity = rarity;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }

    public List <Object> getStickerList() {
        return stickerList;
    }

    public void setStickerList(List <Object> stickerList) {
        this.stickerList = stickerList;
    }

    public String getPicUrl() {
        return picUrl;
    }

    public void setPicUrl(String picUrl) {
        this.picUrl = picUrl;
    }

    public String getWearValue() {
        return wearValue;
    }

    public void setWearValue(String wearValue) {
        this.wearValue = wearValue;
    }

    public int getSteamPrice() {
        return steamPrice;
    }

    public void setSteamPrice(int steamPrice) {
        this.steamPrice = steamPrice;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getPaintSeed() {
        return paintSeed;
    }

    public void setPaintSeed(int paintSeed) {
        this.paintSeed = paintSeed;
    }

    public int getPaintIndex() {
        return paintIndex;
    }

    public void setPaintIndex(int paintIndex) {
        this.paintIndex = paintIndex;
    }

    public Object getStyle() {
        return style;
    }

    public void setStyle(Object style) {
        this.style = style;
    }

    public Object getLabel() {
        return label;
    }

    public void setLabel(Object label) {
        this.label = label;
    }

    public String getInspectId() {
        return inspectId;
    }

    public void setInspectId(String inspectId) {
        this.inspectId = inspectId;
    }

    public boolean isTradable() {
        return tradable;
    }

    public void setTradable(boolean tradable) {
        this.tradable = tradable;
    }

    public boolean isMarketable() {
        return marketable;
    }

    public void setMarketable(boolean marketable) {
        this.marketable = marketable;
    }

    public List <DecorationTag> getDecorationTags() {
        return decorationTags;
    }

    public void setDecorationTags(List <DecorationTag> decorationTags) {
        this.decorationTags = decorationTags;
    }

    public Object getFrozeExpireTime() {
        return frozeExpireTime;
    }

    public void setFrozeExpireTime(Object frozeExpireTime) {
        this.frozeExpireTime = frozeExpireTime;
    }

    public int getSuggestPrice() {
        return suggestPrice;
    }

    public void setSuggestPrice(int suggestPrice) {
        this.suggestPrice = suggestPrice;
    }

    public Object getChangeRateMap() {
        return changeRateMap;
    }

    public void setChangeRateMap(Object changeRateMap) {
        this.changeRateMap = changeRateMap;
    }

    public Object getChangeMap() {
        return changeMap;
    }

    public void setChangeMap(Object changeMap) {
        this.changeMap = changeMap;
    }

    public Object getPurchasePrice() {
        return purchasePrice;
    }

    public void setPurchasePrice(Object purchasePrice) {
        this.purchasePrice = purchasePrice;
    }

    public List <Integer> getTagIdList() {
        return tagIdList;
    }

    public void setTagIdList(List <Integer> tagIdList) {
        this.tagIdList = tagIdList;
    }
}


