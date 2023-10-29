import { Remove } from "../../tools/tools";
import { IPojozdne } from "../interfaces/pojizdne.interface";
import { IZaparkovatelne } from "../interfaces/zaparkovatelne.interface";
import { Parkoviste } from "./parkoviste.class";

class Auto implements IPojozdne, IZaparkovatelne {
    private _parkoviste?: Parkoviste;

    zaparkovat(parkoviste: any) { 
        parkoviste.Parkoviste.push(this);
        this._parkoviste = parkoviste;
        return "Zaparkovano na "+ parkoviste
    }
    /**
     * Remove the current instance from the parkoviste array and set the _parkoviste property to undefined.
     *
     * @param {type} paramName - description of parameter
     * @return {type} description of return value
     */
    vyjet(){
        let index = this._parkoviste.Parkoviste.indexOf(this);
        Remove(this, this._parkoviste.Parkoviste);
        this._parkoviste = undefined;
    }
    
    jedDoPredu(rychlost: number) {
        
    }

    jedDoZadu(rychlost: number) {
    
    }

    zatocDoLeva(stupne: number) {
    
    }

    zatocDoPrava(stupne: number) {
    
    }
}

export {
    Auto
}