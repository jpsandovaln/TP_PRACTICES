const Dispenser = require("./dispenser");

class Dispense20Bs extends Dispenser {
    constructor() {
        super();
        this.newChain = null;
    }

    setNextChain(nextDispense) {
        this.newChain = nextDispense;
    }

    dispense(value) {
        if (value >= 20) {
            const num = Math.trunc(value / 20);
            const remainder = value % 20;
            console.info("Dispense 20 = " + num + " + Bs");
            if (remainder !== 0) {
               this.newChain.dispense(remainder);
           }
        } else {
            this.newChain.dispense(value);
        }
    }
}

module.exports = Dispense20Bs;
