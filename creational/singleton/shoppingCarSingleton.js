/**
 * 1. Make the constructor private
 * 2. Create a static method who calls the private constructor
 * and save the instance in a static variable 
 */
class Product {

    constructor(id, name, cost) {
        this.id = id;
        this.name = name;
        this.cost = cost;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getCost() {
        return this.cost;
    }
}

class ShoppingCarSingleton {
    static instance = undefined;
    cart = [];
    constructor() {

    }

    getCart() {
        return this.cart;
    }

    add(product) {
        if (product instanceof Product) {
            this.cart.push(product);
        }
    }

    deleteById(id) {
        this.cart = this.cart.filter((prod) => prod.getId() !== id);
    }

    static getInstance() {
        if (!ShoppingCarSingleton.instance) {
            ShoppingCarSingleton.instance = new ShoppingCarSingleton();
        }
        return ShoppingCarSingleton.instance;
    }
}

function appSingleton() {
    //Prodcuts disponibles 
    const product1 = new Product(1, "Producto 1", 10);
    const product2 = new Product(2, "Producto 2", 20);
    const product3 = new Product(3, "Producto 3", 30);
    const product4 = new Product(4, "Producto 4", 40);

    cart1 = ShoppingCarSingleton.getInstance();
    cart2 = ShoppingCarSingleton.getInstance();

    // Agregar productos al primer cart1
    cart1.add(product1);
    cart1.add(product2);

    // Agregar productos al segundo cart2
    cart2.add(product3);
    cart2.add(product4);

    // Verificar que ambas instancias de Singleton son la misma
    console.log(cart1 === cart2);

    // Verificar los productos en cada carrito
    console.log("Productos en el carrito 1:");
    console.log(cart1.getCart());

    console.log("Productos en el carrito 2:");
    console.log(cart2.getCart());
}

appSingleton();
