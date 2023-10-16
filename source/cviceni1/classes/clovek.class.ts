import Vlak from "./vlak.class";

class Clovek {
    private _name: string;
    public vlak?: Vlak;
    constructor(jmeno: string) {
        this._name = jmeno;
    }
    
    private set Jmeno(jmeno: string) {
        this._name = jmeno;
    }
    
    public get Jmeno() {
        return this._name;
    }
}


export default Clovek;