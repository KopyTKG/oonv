import { log } from "console";

interface Iclonable {
    clone(): Iclonable;
}

class Car implements Iclonable {
    public name: string;
    constructor(car?: Car) {
        this.name = car?.name ?? "Car1";
    }
    
    public Honk(): void {
        log("Honk");
    }
    public clone(): Iclonable {
        return new Car(this);
    }
}


export default Car;