import { randomInt } from "crypto";
import { Remove } from "../../tools/tools";
import Clovek from "./clovek.class";
import Jizdenka from "./jizdenka.class";

class Cestujici extends Clovek {
    
    private _jizdenka: Jizdenka;

    public Penize: number = randomInt(0, 2000);

    constructor(jmeno: string, jizdenka: Jizdenka) {
        super(jmeno);
        this._jizdenka = jizdenka;
    }

    public set Jizdenka(jizdenka: Jizdenka) {
        this._jizdenka = jizdenka;
    }
    public get Jizdenka(): Jizdenka {
        return this._jizdenka;
    }
    
    public Nastup(vlak:any): boolean {
        if(this.vlak === undefined) {
            this.vlak = vlak;
            let cestujici = vlak.Cestujici;
            cestujici.push(this);
            vlak.Cestujici = cestujici;
            return true;
        } else {
            return false;
        }
    }

    public Vystup(): boolean {
        if(this.vlak === undefined) {
            return false;
        } else {
            const index = this.vlak.Cestujici.indexOf(this, 0);
            let tmp: Array<Cestujici> = []
            if(index < -1) {
                return false;
            } else {
                tmp = Remove(this, this.vlak.Cestujici);
            }
            this.vlak.Cestujici = tmp;
            this.vlak = undefined;
            return true;
        }
    }
}

export default Cestujici;


