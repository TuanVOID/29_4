export  class Product {
    name:string;
    price:number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    get getName() : string {
        return this.name;
    }
    set setName(name:string) {
        this.name = name;
    }
    get getPrice() : number {
        return this.price
    }
    set setPrice(price:number) {
        this.price = price;
    }
}