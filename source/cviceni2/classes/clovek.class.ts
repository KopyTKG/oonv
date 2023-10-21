import { IPojozdne } from "../interfaces/pojizdne.interface";


class Clovek {
    private _jmeno: string = "";
    private _vozidlo: IPojozdne;

    constructor(jmeno: string) {
        this._jmeno = jmeno;
    }

    public set Vozidlo(vozidlo: IPojozdne) {
        this._vozidlo = vozidlo;
    }

    public get Vozidlo() {
        return this._vozidlo;
    }
}

export {
    Clovek
}