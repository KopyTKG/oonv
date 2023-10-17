import { randomInt } from "crypto";
import Cestujici from "./cestujici.class";
import Clovek from "./clovek.class";
import { log } from "console";
import Spolecnost from "./spolecnost.class";
import Jizdenka from "./jizdenka.class";

class Pruvodci extends Clovek {
    private _exp : number = 50;
    
    public set Zkusenosti(exp: number) {
        this._exp = exp;
    }
    public get Zkusenosti(): number {
        return this._exp;
    }

    constructor(jmeno: string) {
        super(jmeno);
    }

    public Nastup(vlak:any): boolean {
        if(this.vlak === undefined) {
            this.vlak = vlak;
            vlak.Pruvodci = this;
            return true;
        } else {
            return false;
        }
    }

    public Vystup(): boolean {
        if(this.vlak === undefined) {
            return false;
        } else {
            this.vlak.Pruvodci = undefined;
            this.vlak = undefined;
            return true;
        }
    }

    public Zkotroluj() {
        if(this.vlak === undefined) {
            return;
        }
        let cerniPasazeri: any = []
        this.vlak.Cestujici.forEach((cestujici: Cestujici) => {
            if(
                (cestujici.Jizdenka.Spolecnost != this.vlak.Spolecnost)
                &&
                (!this.vlak.Spolecnost.Smlouvy.includes(cestujici.Jizdenka.Spolecnost))
                ) {
                let rng = randomInt(0, 100);
                if(rng < this.Zkusenosti) {
                    if(cestujici.Penize > cestujici.Jizdenka.Cena * 3) {
                        cestujici.Penize -= cestujici.Jizdenka.Cena*3;
                        cestujici.Jizdenka = new Jizdenka(cestujici.Jizdenka.Cena*3, this.vlak.Spolecnost);
                    } else {
                        cerniPasazeri.push(cestujici);
                    }
                }
                }
            }
        );
        this.Vyhod(cerniPasazeri);
    }

    private Vyhod(pasazeri: Array<Cestujici>) {
        pasazeri.forEach((cestujici: Cestujici) => {
            cestujici.Vystup();
        })
    }
}


export default Pruvodci;