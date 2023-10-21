import { IPojozdne } from "../interfaces/pojizdne.interface";


class Kacenka implements IPojozdne {
    private _name: string = "";

    constructor(jmeno: string) {
        this._name = jmeno;
    }

    jedDoPredu(rychlost: number) {
        return this._name + " jede do predu " + rychlost + " tapoty/h";
    }
    
    jedDoZadu(rychlost: number) {
        return this._name + " jede do zadu " + rychlost + " tapoty/h";
    }

    zatocDoLeva(stupne: number) {
        return this._name + " otaci do leva o " + stupne + " tapek";
    }

    zatocDoPrava(stupne: number) {
        return this._name + " otaci do prava o " + stupne + " tapek";
    }
}   


export {
    Kacenka
}