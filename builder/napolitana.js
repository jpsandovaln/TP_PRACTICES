const Builder = require("./builder");
const Pizza = require("./pizza");

class Napolitana extends Builder {
    constructor() {
        super();
        this.pizza = new Pizza();
        this.pizza.setDough = "soft";
        this.pizza.setSauce = "spicy";
        this.pizza.setCheese = "cheddar";
        this.pizza.setOlive = "green";
        this.pizza.setTomato = "1";
        this.pizza.setBasil = "1";
    }

    withBasil(basil) {
        this.pizza.setBasil = basil;
        return this;
    }

    build() {
        return this.pizza;
    }
}

module.exports = Napolitana;
