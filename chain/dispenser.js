class Dispenser {
    constructor() {
        if (this.constructor === Dispenser) {
            throw new Error("Error");
        }
    }

    dispense(value) {
        throw new Error("Error");
    }

    setNextChain() {
        throw new Error("Error");
    }

}

module.exports = Dispenser;
