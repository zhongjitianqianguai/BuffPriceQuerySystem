package com.tianqianguai.buffpricequerysystem.controller;

import com.tianqianguai.buffpricequerysystem.entity.Inventory;
import com.tianqianguai.buffpricequerysystem.service.InventoryService;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller

public class InventoryContorller {
    Log logger = LogFactory.getLog(UserController.class);

    @Autowired
    private InventoryService inventoryService;

    @RequestMapping("show_inventory")
    public String Login(){
        System.out.println(inventoryService.getInventory("76561198307802394").toString());
        return "login";
    }
    @RequestMapping("/show_inventory_test")
    public ResponseEntity <Inventory> getInventory(@RequestParam("steamId") String steamId) {
        Inventory inventory = inventoryService.getInventory(steamId);
        System.out.println(inventory.getCode());

        if (inventory != null) {
            return new ResponseEntity<>(inventory, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
