import Spolecnost from "./spolecnost.class";

class Jizdenka {
    private _cena: number;
    private _spolecnost: Spolecnost;

    constructor(cena: number, spolecnost : Spolecnost) {
        this._cena = cena;
        this._spolecnost = spolecnost;
    }

    public get Cena(): number {
        return this._cena;
    }

    public get Spolecnost(): Spolecnost {
        return this._spolecnost;
    }
}

export default Jizdenka;