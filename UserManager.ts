import {User} from "./User";

let tuan = new User("Tuan", "tuan@gmail.com", 1)
let huy = new User("Huy", "huy@gmail.com", 2)

console.log(tuan)
console.log(tuan.getInfo())
console.log((tuan.isAdmin()))

console.log(huy)
console.log(huy.isAdmin())
