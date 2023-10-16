import Vlak from "./vlak.class";

class Spolecnost {
    private _name?: string;
    private _smlouvy?: Array<Spolecnost>;
    private _vlaky?: Array<Vlak>;

    constructor(name: string) {
        this._name = name;
        this._smlouvy = [];
        this._vlaky = [];
    }

    public get Vlaky(): Array<Vlak> | undefined {
        return this._vlaky;
    }
    public set Vlaky(vlaky: Array<Vlak> | undefined) {
        this._vlaky = vlaky;
    }

    public get Smlouvy(): Array<Spolecnost> | undefined {
        return this._smlouvy;
    }
    public set Smlouvy(smlouvy: Array<Spolecnost> | undefined) {
        this._smlouvy = smlouvy;
    }

    public PrivlastnitVlak(vlak: Vlak) {
        if (this._vlaky === undefined) {
            this._vlaky = [];
        }
        this._vlaky.push(vlak);
        vlak.Spolecnost = this;
    }

    public SepsatSmlouvu(spolecnost: Spolecnost) {
        if (this._smlouvy === undefined) {
            this._smlouvy = [];
        }
        this._smlouvy.push(spolecnost);
        spolecnost._smlouvy.push(this);
    }
}

export default Spolecnost