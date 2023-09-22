const Server = require("./server");

class CbbaServer extends Server {
    turnOn() {
        console.info("Turn on Cbba server");
    }
    
    turnOff() {
        console.info("Turn ooff Cbba server")
    }
    
    openConnection() {
        console.info("Open Connection Cbba server")
    }
    
    closeConnection() {
        console.info("Close Connection Cbba server")
    }
    
    verifyConnection() {
        console.info("Verify Connection Cbba server")
    }
    
    startServices() {
        console.info("Start services Cbba server")
    }
    
    stopServices() {
        console.info("Stop services Cbba server")
    }
    
    getLog() {
        console.info("Get logs Cbba server")
    } 
}

module.exports = CbbaServer;
