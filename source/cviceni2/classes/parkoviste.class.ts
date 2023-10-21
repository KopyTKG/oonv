import { IZaparkovatelne } from "../interfaces/zaparkovatelne.interface";

class Parkoviste {
    private _parkoviste: Array<IZaparkovatelne> = [];
    private _limit?: number;

    constructor(limit: number) {
        this._limit = limit;
    }

    public set Parkoviste(parkoviste: Array<IZaparkovatelne>) {
        this._parkoviste = parkoviste;
    }

    public get Parkoviste() {
        return this._parkoviste;
    }
}

export { Parkoviste };