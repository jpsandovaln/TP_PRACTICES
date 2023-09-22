class Pizza {
    constructor(dough, sauce, cheese, ham, pineapple, olive, basil, tomato, corn, meat) {
        this.dough = dough;
        this.sauce = sauce;
        this.cheese = cheese;
        this.ham = ham;
        this.pineapple = pineapple;
        this.olive = olive;
        this.basil = basil;
        this.tomato = tomato;
        this.corn = corn;
        this.meat = meat;
    }

    get getDough() {
        return this.dough;
    }

    set setDough(dough) {
        this.dough = dough;
    }

    get getSauce() {
        return this.sauce;
    }

    get getHam() {
        return this.ham;
    }

    set setHam(ham) {
        this.ham = ham;
    }

    get getPineapple() {
        return this.pineapple;
    }

    set setPineapple(pineapple) {
        this.pineapple = pineapple;
    }

    set setSauce(sauce) {
        this.sauce = sauce;
    }

    get getCheese() {
        return this.cheese;
    }

    set setCheese(cheese) {
        this.cheese = cheese;
    }

    get getOlive() {
        return this.olive;
    }

    set setOlive(olive) {
        this.olive = olive;
    }

    get getBasi() {
        return this.basil;
    }

    set setBasil(basil) {
        this.basil = this.basil;
    }

    get getTomato() {
        return this.tomato;
    }

    set setTomato(tomato) {
        this.tomato = tomato;
    }

    get getCorn() {
        return this.corn;
    }

    set setCorn(corn) {
        this.corn = corn;
    }

    get getMeat() {
        return this.meat;
    }

    set setMeat(meat) {
        this.meat = meat;
    }
}

module.exports = Pizza;
