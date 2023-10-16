import Cestujici from "./cestujici.class";

class Vlak {
    private _cestujici: Array<Cestujici>;

    constructor() {
        this._cestujici = [];
    }

    public get Cestujici(): Array<Cestujici> {
        return this._cestujici;
    }

    public set Cestujici(cestujici: Array<Cestujici>) {
        this._cestujici = [];
    }
}

export default Vlak;