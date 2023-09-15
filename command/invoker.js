class Invoker {
    constructor(command) {
        this._command = command;
    }

    run() {
        this._command.execute();
    }
}

module.exports = Invoker;
