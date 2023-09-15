const Dispenser = require("./dispenser");

class Dispense100Bs extends Dispenser {
    constructor() {
        super();
        this.newChain = null;
    }

    setNextChain(nextDispense) {
        this.newChain = nextDispense;
    }

    dispense(value) {
        if (value >= 100) {
            const num = Math.trunc(value / 100);
            const remainder = value % 100;
            console.info("Dispense 100 = " + num + " + Bs");
           if (remainder !== 0) {
               this.newChain.dispense(remainder);
           }
        } else {
            this.newChain.dispense(value);
        }
    }
}

module.exports = Dispense100Bs;
