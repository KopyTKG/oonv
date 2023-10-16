import Cestujici from "./cestujici.class";
import Pruvodci from "./pruvodci.class";

class Vlak {
    private _cestujici: Array<Cestujici>;
    private _pruvodci?: Pruvodci | undefined;

    public name: string;
    constructor(name: string) {
        this._cestujici = [];
        this.name = name;
    }

    public get Cestujici(): Array<Cestujici> {
        return this._cestujici;
    }

    public set Cestujici(cestujici: Array<Cestujici>) {
        this._cestujici = cestujici;
    }

    public get Pruvodci(): Pruvodci | undefined {
        return this._pruvodci;
    }

    public set Pruvodci(pruvodci: Pruvodci | undefined) {
        this._pruvodci = pruvodci;
    }
}

export default Vlak;