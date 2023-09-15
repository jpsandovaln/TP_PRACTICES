const Builder = require("./builder");
const Pizza = require("./pizza");

class Hawaiana extends Builder {
    constructor() {
        super();
        this.pizza = new Pizza();
        this.pizza.setDough = 'soft';
        this.pizza.sauce = 'sweet';
        this.pizza.setCheese = 'mozzarella';
    }

    withSauce(sauce) {
        this.pizza.setSauce = sauce;
        return this;
    }

    withHam(ham) {
        this.pizza.setHam = ham;
        return this;
    }

    withPineapplee(pineapple) {
        this.pizza.setPineapple = pineapple;
        return this;
    }

    build() {
        return this.pizza;
    }
}

module.exports = Hawaiana;
