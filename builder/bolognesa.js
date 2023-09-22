const Builder = require("./builder");
const Pizza = require("./pizza");

class Bolognesa extends Builder {
    constructor() {
        super();
        this.pizza = new Pizza();
        this.pizza.setDough = "soft";
        this.pizza.setSauce = "sweet";
        this.pizza.setCheese = "mozzarella";
    }

    withMeat(meat) {
        this.pizza.setMeat = meat;
        return this;
    }

    withCorn(corn) {
        this.pizza.setCorn = corn;
        return this;
    }

    build() {
        return this.pizza;
    }
}

module.exports = Bolognesa;
