import { log } from "console";
import Warrior from "./classes/types/warrior.class";
import Warlock from "./classes/types/warlock.class";


function MainLoop() {
    let War1 = new Warrior("Karel");
    let War2 = new Warlock("Adam");
    let War3 = new Warrior("Jakub");

    War1.Oponents = [War2, War3];
    War2.Oponents = [War1, War3];
    War3.Oponents = [War1, War2];
    
    let queue = [War1, War2, War3];
    while(War1.HP > 0 || War2.HP > 0 || War3.HP > 0) {
        queue.forEach((warrior) => {
            if(warrior.HP <= 0) {
                return;
            }
            log(`This is turn of ${warrior.Name}`);
            log(`Level of ${warrior.Name}: ${warrior.Level}`);
            log(`HP of ${warrior.Name}: ${warrior.HP}/${warrior.HP_max} MP: ${warrior.MP}/${warrior.MP_max}`);
            let choice = parseInt((Math.random() * 3).toString());
            if(warrior.HP < ((warrior.HP_max*15)/100) || warrior.MP < ((warrior.MP_max*15)/100)) {
                choice = 2;
            }

            if(choice === 0) {
                if(warrior.Oponents[0].HP <= 0) {
                    return;
                }
                warrior.Attack(warrior.Oponents[0]);
            } else if(choice === 1) {
                if(warrior.Oponents[1].HP <= 0) {
                    return;
                }
                warrior.Attack(warrior.Oponents[1]);
            } else {
                warrior.Regenerate();
            }
        })
    }
}

function Cviceni3() {
    MainLoop();
}

export {
    Cviceni3
}