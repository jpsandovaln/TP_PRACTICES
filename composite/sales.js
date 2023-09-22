class Sales {
    constructor(id) {
        this._id = id;
        this._productList = [];
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    addProduct(product) {
        this._productList.push(product);
    }

    remover(process) {
        this._productList.remove(product);
    }

    get total() {
        let totalValue = 0;
        this._productList.forEach(product => {
            totalValue = totalValue + product.price;
        });
        return totalValue;
    }

    display() {
        console.info("-----------------------------");
        console.info("sales id: " + this._id);
        this._productList.forEach(product => {
            console.info("Product: " + product.name + " - price: " + product.price);
        })
        console.info("Total: " + this.total);
        console.info("-----------------------------");
    }
}

module.exports = Sales;
