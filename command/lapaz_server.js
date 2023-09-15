const Server = require("./server");

class LaPazServer extends Server {
    turnOn() {
        console.info("Turn on La Paz server");
    }
    
    turnOff() {
        console.info("Turn off La Paz server")
    }
    
    openConnection() {
        console.info("Open Connection La Paz server")
    }
    
    closeConnection() {
        console.info("Close Connection La Paz server")
    }
    
    verifyConnection() {
        console.info("Verify Connection La Paz server")
    }
    
    startServices() {
        console.info("Start services La Paz server")
    }
    
    stopServices() {
        console.info("Stop services La Paz server")
    }
    
    getLog() {
        console.info("Get logs La Paz server")
    } 
}

module.exports = LaPazServer;
