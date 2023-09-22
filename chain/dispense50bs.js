const Dispenser = require("./dispenser");

class Dispense50Bs extends Dispenser {
    constructor() {
        super();
        this.newChain = null;
    }

    setNextChain(nextDispense) {
        this.newChain = nextDispense;
    }

    dispense(value) {
        if (value >= 50) {
            const num = Math.trunc(value / 50);
            const remainder = value % 50;
            console.info("Dispense 50 = " + num + " + Bs");
            if (remainder !== 0) {
               this.newChain.dispense(remainder);
           }
        } else {
            this.newChain.dispense(value);
        }
    }
}

module.exports = Dispense50Bs;
