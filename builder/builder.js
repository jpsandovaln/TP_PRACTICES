const Pizza = require("./pizza");

class Builder {
    constructor() {
        if (this.constructor === Builder) {
            throw new Error('Abstract class cannot be instantiated');
        }
    }

    build() {
        throw new Error('Method build must be implemented');
    }
}

module.exports = Builder;
