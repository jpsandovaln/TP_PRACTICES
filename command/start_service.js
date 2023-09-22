const Command = require("./command");

class StartServices extends Command {
    constructor(server) {
        super();
        this._server = server;
    }

    execute() {
        this._server.openConnection();
        this._server.verifyConnection();
        this._server.turnOn();
        this._server.startServices();
        this._server.getLog();
        this._server.closeConnection();
    }
}

module.exports = StartServices;
