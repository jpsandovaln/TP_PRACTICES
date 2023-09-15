const IDocState = require("./state");

class ProgressState extends IDocState {
    constructor() {
        super();
    }

    displayState() {
        console.info("progress state");
    }
}

module.exports = ProgressState;
