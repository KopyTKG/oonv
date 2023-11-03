import IBuilder from "../interface/builder";
import { Car, CarManual } from "./car";
import Engine from "./engine";

class CarBuilder implements IBuilder {
    private _car: Car;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this._car = new Car();
    }

    public setSeats(count: number): void {
        this._car.Seats = count;
    }

    public setEngine(engine: Engine): void {
        this._car.Engine = engine;
    }

    public setTripComputer(): void {
        this._car.TripComputer = 1;
    }

    public setGPS(): void {
        this._car.GPSNavigator = [0, 0];
    }

    public getCar(): Car {
        return this._car;
    }

}


class CarManualBuilder implements IBuilder {
    private _car: CarManual;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this._car = new CarManual();
    }

    public setSeats(count: number): void {
        this._car.Seats = count;
    }
    public setEngine(engine: Engine): void {
        this._car.Engine = engine;
    }

    public setTripComputer(): void {
        this._car.TripComputer = 1;
    }

    public setGPS(): void {
        this._car.GPSNavigator = [0, 0];
    }

    public getCar(): CarManual {
        return this._car;
    }

}

export { CarBuilder, CarManualBuilder };