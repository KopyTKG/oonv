
class Engine {
    private _pistons: number;
    private _hp: number;
    private _turbo: boolean;
    private _fuel: string;

    constructor(pistons: number, hp: number, turbo: boolean, fuel: string) {
        this._pistons = pistons;
        this._hp = hp;
        this._turbo = turbo;
        this._fuel = fuel;
    }
        
    get Pistons(): number {
        return this._pistons;
    }

    get HP(): number {
        return this._hp;
    }

    get Turbo(): boolean {
        return this._turbo;
    }

    get Fuel(): string {
        return this._fuel;
    }
    
}

export default Engine;