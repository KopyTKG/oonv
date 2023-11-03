import { log } from "console";
import { Server } from "./classes/singleton";
import Director from "./builder/class/director";
import { CarBuilder, CarManualBuilder } from "./builder/class/builder";



function MainLoop() {
    let car = new CarBuilder();
    let man = new CarManualBuilder();
    let director = new Director(car);
    let product1 = director.getProduct(false,true);
    director.builder = man;
    let product2 = director.getProduct(true);

    log(product1);
    log(product2);
}   

function Cviceni4() {
    MainLoop();
}

export {
    Cviceni4
}