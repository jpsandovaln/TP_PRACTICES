class Server {
  constructor() {
    if (this.constructor === Server) {
        throw new Error("Error");
    }
  }

  turnOn() {
    throw new Error("Error");
  }

  turnOff() {
    throw new Error("Error");
  }

  openConnection() {
    throw new Error("Error");
  }

  closeConnection() {
    throw new Error("Error");
  }

  verifyConnection() {
    throw new Error("Error");
  }

  startServices() {
    throw new Error("Error");
  }

  stopServices() {
    throw new Error("Error");
  }

  getLog() {
    throw new Error("Error");
  }
}

module.exports = Server;