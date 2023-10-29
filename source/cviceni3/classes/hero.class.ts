abstract class Hero {
    private _name: string;
    protected _level: number = 1;
    protected _exp: number = 0;
    protected _hp_max: number = 100;
    protected _hp: number = 100;
    protected _mp_max: number = 100;
    protected _mp: number = 100;
    protected _armor: number = 0;
    protected _weapon: number = 0;
    protected _gold: number = 0;
    protected _mobility: number;

    protected _oponents: Array<Hero>;



    constructor(name: string, armor: number, weapon: number, mobility: number) {
        this._name = name;
        this._armor = armor;
        this._weapon = weapon;
        this._mobility = mobility;
    }

    public get Name(): string {
        return this._name;
    }

    public get Level(): number {
        return this._level;
    }

    public get HP(): number {
        return this._hp;
    }

    public get HP_max(): number {
        return this._hp_max;
    }

    public get MP(): number {
        return this._mp;
    }

    public get MP_max(): number {
        return this._mp_max;
    }

    public get Armor(): number {
        return this._armor;
    }

    public get Damage(): number {
        return this._weapon;
    }

    public get Gold(): number {
        return this._gold;
    }

    public get Exp(): number {
        return this._exp;
    }

    public get Oponents(): Array<Hero> {
        return this._oponents;
    }

    public set Oponents(value: Array<Hero>) {
        this._oponents = value;
    }


    abstract Regenerate(): void;
    abstract LevelUp(): void;
    abstract Attack(enemy: any): void;
    public GetHit(dmg: number): void {
        this._hp -= dmg;
    }
    abstract Dodge(): boolean;
    abstract Death(): void;
}

export default Hero;