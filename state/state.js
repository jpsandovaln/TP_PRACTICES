class IDocState {
    constructor() {
        if (this.constructor === IDocState) {
            throw new Error("Error");
        }
    }

    displayState() {
        throw new Error("Error");
    }
}

module.exports = IDocState;
