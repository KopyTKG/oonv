import { log } from "console";
import { Parkoviste } from "./classes/parkoviste.class";
import { Kacenka } from "./classes/kacenka.class";
import { Auto } from "./classes/auto.class";
import { Clovek } from "./classes/clovek.class";

function Cviceni2() {
    let Barak = new Parkoviste(2);
    let kacenka = new Kacenka("Kacenka");
    let auto = new Auto();
    let clovek = new Clovek("Clovek");

    clovek.Vozidlo = auto;
    let aa = (clovek.Vozidlo as Auto)
    
    aa.zaparkovat(Barak); 
    log(aa);

    aa.vyjet();
    log(clovek.Vozidlo);
}

export {
    Cviceni2
}