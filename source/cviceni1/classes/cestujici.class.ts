import { Remove } from "../../tools/tools";
import Clovek from "./clovek.class";

class Cestujici extends Clovek {
    private _jizdenka?: Number;
    constructor(jmeno: string) {
        super(jmeno);
    }

    public set Jizdenka(jizdenka : Number) {
        this._jizdenka = jizdenka;
    }
    public get Jizdenka(): Number {
        return Number(this._jizdenka);
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

