"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("./User");
var tuan = new User_1.User("Tuan", "tuan@gmail.com", 1);
var huy = new User_1.User("Huy", "huy@gmail.com", 2);
console.log(tuan);
console.log(tuan.getInfo());
console.log((tuan.isAdmin()));
console.log(huy);
console.log(huy.isAdmin());