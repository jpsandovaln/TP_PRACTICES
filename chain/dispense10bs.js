const Dispenser = require("./dispenser");

class Dispense10Bs extends Dispenser {
    constructor() {
        super();
        this.newChain = null;
    }

    setNextChain(nextDispense) {
        this.newChain = nextDispense;
    }

    dispense(value) {
        if (value >= 10) {
            const num = Math.trunc(value / 10);
            const remainder = value % 10;
            console.info("Dispense 10 = " + num + " + Bs");
           if (remainder !== 0) {
               this.newChain.dispense(remainder);
           }
        } else {
            this.newChain.dispense(value);
        }
    }
}

module.exports = Dispense10Bs;
