class Command {
    constructor() {
      if (this.constructor === Command) {
          throw new Error("Error");
      }
    }
  
    execute() {
      throw new Error("Error");
    }
}

module.exports = Command;
