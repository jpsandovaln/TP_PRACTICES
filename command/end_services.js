const Command = require("./command");

class EndServices extends Command {
    constructor(server) {
        super();
        this._server = server;
    }

    execute() {
        this._server.openConnection();
        this._server.turnOff();
        this._server.closeConnection();
    }
}

module.exports = EndServices;
