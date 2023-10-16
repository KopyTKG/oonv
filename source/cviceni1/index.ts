import { debug, log } from "console";
import Cestujici from "./classes/cestujici.class";
import Vlak from "./classes/vlak.class";
import Pruvodci from "./classes/pruvodci.class";
import { randomInt } from "crypto";
import Jizdenka from "./classes/jizdenka.class";
import Spolecnost from "./classes/spolecnost.class";

    
function Cviceni1() {

    let Sp1 = new Spolecnost("Sp1");
    let Sp2 = new Spolecnost("Sp2");
    let Sp3 = new Spolecnost("Sp3");
    let Sp4 = new Spolecnost("Sp4");

    Sp1.SepsatSmlouvu(Sp2);
    Sp1.SepsatSmlouvu(Sp3);
    Sp3.SepsatSmlouvu(Sp4);

    let v1 = new Vlak("v1");

    const Spolecnosti = [Sp1, Sp2, Sp3, Sp4];
    
    log(Sp1);
    Sp1.PrivlastnitVlak(v1);
    let karel = new Pruvodci("Karel");
    karel.Zkusenosti = 100;
    karel.Nastup(v1);

    for(let i = 0 ; i < 40; i++) {
        const jizd = new Jizdenka(randomInt(100, 500), Spolecnosti[randomInt(0,Spolecnosti.length)])
        let cestujici = new Cestujici("Cestujici" + i, jizd);
        cestujici.Nastup(v1);
        debug(jizd)
    }
    //debug(v1.Cestujici)
    karel.Zkotroluj()

    log(v1.Cestujici.length)

}



export {
    Cviceni1
};