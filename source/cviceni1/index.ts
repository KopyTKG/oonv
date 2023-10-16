import { log } from "console";
import Cestujici from "./classes/cestujici.class";
import Vlak from "./classes/vlak.class";
import Pruvodci from "./classes/pruvodci.class";
import { randomInt } from "crypto";

    
function Cviceni1() {
    let v1 = new Vlak("v1");
    let karel = new Pruvodci("Karel");
    karel.Nastup(v1);

    for(let i = 0 ; i < 40; i++) {
        let cestujici = new Cestujici("Cestujici" + i);
        cestujici.Jizdenka  = randomInt(3);
        cestujici.Nastup(v1);
    }
    log(v1)
    karel.Zkotroluj()
    log(v1.Cestujici.length)

}



export {
    Cviceni1
};