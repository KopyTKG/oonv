import Hero from "../hero.class";
import { log } from "console";

class Warrior extends Hero {
    constructor(name: string) {
        let armor = 75;
        let weapon = 100;
        let mobility = 125;

        super(name, armor, weapon, mobility);
    }

    LevelUp(): void {
        let hpGain = 20;
        let mpGain = 15;
        let armorGain = 45;
        let weaponGain = 50;
        let mobilityGain = 10;
    
        if(this._exp >= this._level * 100) {
            this._hp_max += hpGain;
            this._hp += hpGain;
            this._mp_max += mpGain;
            this._mp += mpGain;
            this._armor += armorGain;
            this._weapon += weaponGain;
            this._mobility += mobilityGain;

            this._level++;
            this._exp = 0;
        }
    }

    Attack(enemy: Hero): void {
        if(!enemy.Dodge() && this._mp > 0 && this._hp > 0) {
            if(this._weapon > enemy.Armor) {
                enemy.GetHit(this._weapon - enemy.Armor);
                this._exp += enemy.Level * parseInt((Math.random() * 50).toString());
                this.LevelUp();
                if(enemy.HP <= 0) {
                    enemy.Death();
                }
            } else {
                log(`${enemy.Name} tanked the hit`);
            }
        } else {
            log(`${enemy.Name} Dodged`);
        }
    }

    Dodge(): boolean {
        if(Math.random() < (this._mobility /1000)) {
            return true;
        } else {
            return false;
        }

    }

    Regenerate(): void {
        let regen = parseInt((Math.random() * 10).toString())* (this._mobility/100);
        if(this._hp < this._hp_max) {
            this._hp += regen;
        }
        if(this._mp < this._mp_max) {
            this._mp += regen;
        }
    }

    Death(): void {
        log(`${this.Name} died!`);
        this._hp = 0;
        this._mp = 0;
    }

}

export default Warrior;