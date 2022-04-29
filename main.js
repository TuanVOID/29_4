"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product_1 = require("./Product");
var ProductManager_1 = require("./ProductManager");
var laptop = new Product_1.Product("msi", 2000);
var iphone = new Product_1.Product("iphone", 1500);
var productManager = new ProductManager_1.ProductManager();
productManager.add = laptop;
productManager.add = iphone;
console.log(productManager.getAll);
laptop.setName = "lenovo";
console.log(laptop.getName);
