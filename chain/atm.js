const Dispense100Bs = require("./dispense100bs");
const Dispense50Bs = require("./dispense50bs");
const Dispense20Bs = require("./dispense20bs");
const Dispense10Bs = require("./dispense10bs");

class ATM {
    constructor(value) {
        this.value = value;
    }

    getMoney() {
        /*if (this.value >= 100) {
            const data = new Dispense100Bs();
            this.value = data.dispense(this.value);
        }
        if (this.value >= 50) {
            const data = new Dispense50Bs();
            this.value = data.dispense(this.value);
        }
        if (this.value >= 20) {
            const data = new Dispense20Bs();
            this.value = data.dispense(this.value);
        }
        if (this.value >= 10) {
            const data = new Dispense10Bs();
            this.value = data.dispense(this.value);
        }
        console.info("reminder = " + this.value);*/

        const dispense100bs = new Dispense100Bs();
        const dispense50bs = new Dispense50Bs();
        const dispense20Bs = new Dispense20Bs();
        const dispense10Bs = new Dispense10Bs();

        dispense100bs.setNextChain(dispense50bs);
        dispense50bs.setNextChain(dispense20Bs);
        dispense20Bs.setNextChain(dispense10Bs);

        dispense100bs.dispense(this.value);
    }
}

module.exports = ATM;
