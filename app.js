const Bolognesa = require("./builder/bolognesa");
const Hawaiana = require("./builder/hawaiana");
const Napolitana = require("./builder/napolitana");
const Pizza = require("./builder/pizza");
const ATM = require("./chain/atm");
const CbbaServer = require("./command/cbba_server");
const EndServices = require("./command/end_services");
const Invoker = require("./command/invoker");
const LaPazServer = require("./command/lapaz_server");
const StartServices = require("./command/start_service");
const CompositeProduct = require("./composite/compositeProduct");
const Hardware = require("./composite/hardware");
const Sales = require("./composite/sales");
const Software = require("./composite/software");
const CompleteState = require("./state/complete_state");
const Document = require("./state/document");
const ImportantDocument = require("./state/important_document");
const ProgressState = require("./state/progress_state");
const ReviewState = require("./state/review_state");

class Init {
    constructor() {
        //this.pizza = new Pizza("soft", "spicy", "cheddar", undefined, undefined);
        //this.pizza = new Pizza("soft", "spicy", "cheddar", 1, 1, undefined, undefined, undefined, undefined,undefined, undefined);
        //this.pizza = new Pizza("soft", "spicy", "cheddar", undefined, undefined, "green", undefined, "1", undefined, undefined,undefined, undefined);
        //this.pizza = new Hawaiana().withHam("1").withPineapplee("2").build();
        //this.pizza = new Napolitana().withBasil("1").build();
        //this.pizza = new Bolognesa().withMeat("yes").withCorn("2").build();

        const memory = new Hardware("memory", 100, "xyz");
        const hdd = new Hardware("hdd", 200, "abc");
        const motherboard = new Hardware("motherboard", 300, "asus");

        const cd = new Software("windows", 30, "os");

        const comProduct = new CompositeProduct("PC Gamer");
        comProduct.addProduct(memory);
        comProduct.addProduct(motherboard);
        comProduct.addProduct(hdd);

        const comProduct2 = new CompositeProduct("PC1");
        comProduct2.addProduct(memory);
        comProduct2.addProduct(hdd);

        const comProduct3 = new CompositeProduct("PC2");
        comProduct3.addProduct(memory);
        comProduct3.addProduct(hdd);
        comProduct3.addProduct(motherboard);
        comProduct3.addProduct(cd);

        const combo = new CompositeProduct("combo pc");
        combo.addProduct(comProduct);
        combo.addProduct(comProduct2);

        const sale1 = new Sales(1);
        sale1.addProduct(memory);
        sale1.display();

        const sale2 = new Sales(2);
        sale2.addProduct(comProduct);
        sale2.display();

        const sale3 = new Sales(3);
        sale3.addProduct(combo);
        sale3.display();

        const sale4 = new Sales(4);
        sale4.addProduct(combo);
        sale4.addProduct(comProduct2);
        sale4.addProduct(motherboard);
        sale4.display();
    }

    display() {
        console.info("----------PIZZA-------------------");
        console.info(this.pizza.getDough);
        console.info(this.pizza.getSauce);
        console.info(this.pizza.getCheese);
        console.info(this.pizza.getHam);
        console.info(this.pizza.getPineapple);
        console.info(this.pizza.getOlive);
        console.info(this.pizza.getBasil);
        console.info(this.pizza.getTomato);
        console.info(this.pizza.getCorn);
        console.info(this.pizza.getMeat);
        console.info("---------------------------------");
    }
}

//const init = new Init();
//init.display();
/*const atm = new ATM(880);
atm.getMoney();*/

/*const document = new Document("doc1", "d:/doc1.pdf");
document.displayState();

document.state = "review";
document.displayState();

document.state = "complete";
document.displayState();*/

/*
const importDoc = new ImportantDocument("doc1", "e:/doc1.pdf");
importDoc.displayState();

importDoc.state = new ReviewState();
importDoc.displayState();

importDoc.state = new ProgressState();
importDoc.displayState();

importDoc.state = new CompleteState();
importDoc.displayState();*/

// Start cbba server

const server = new CbbaServer();
server.openConnection();
server.verifyConnection();
server.turnOn();
server.startServices();
server.getLog();
server.closeConnection();

console.info("---------end ----------");
const serverEnd = new CbbaServer();
serverEnd.openConnection();
serverEnd.turnOff();
serverEnd.closeConnection();

console.info("---------Start pattern ----------");
// const command = new StartServices(new CbbaServer());
//const command = new StartServices(new LaPazServer());

// const command = new EndServices(new CbbaServer());

const command = new EndServices(new LaPazServer());
const invoker = new Invoker(command);
invoker.run();
