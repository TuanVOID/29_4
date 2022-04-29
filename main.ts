import {Product} from "./Product";
import {ProductManager} from "./ProductManager";

let laptop = new Product("msi",2000)
let iphone = new Product("iphone", 1500)

let productManager = new ProductManager();
productManager.add = laptop;
productManager.add = iphone;
console.log(productManager.getAll);
laptop.setName = "lenovo"
console.log(laptop.getName)

