import { log } from "console";
import Engine from "./engine";

class Car {
    private _engine: Engine;
    private _tripComputer: number;
    private _gpsNavigator: Array<number>;
    private _seats: number;

    public set Engine(engine: Engine) {
        this._engine = engine;
    }

    public get Engine(): Engine {
        return this._engine;
    }

    public set Seats(seats: number) {
        this._seats = seats;
    }

    public get Seats(): number {
        return this._seats;
    }
    public set TripComputer(tripComputer: number) {
        this._tripComputer = tripComputer;
    }

    public get TripComputer(): number {
        return this._tripComputer;
    }

    public set GPSNavigator(gpsNavigator: Array<number>) {
        this._gpsNavigator = gpsNavigator;
    }

    public get GPSNavigator(): Array<number> {
        return this._gpsNavigator;
    }

    public Action(): void {
        log("Driving");
    }
}


class CarManual {
    private _engine: Engine;
    private _tripComputer: number;
    private _gpsNavigator: Array<number>;
    private _seats: number;

    public set Engine(engine: Engine) {
        this._engine = engine;
    }

    public get Engine(): Engine {
        return this._engine;
    }

    public set TripComputer(tripComputer: number) {
        this._tripComputer = tripComputer;
    }

    public get TripComputer(): number {
        return this._tripComputer;
    }

    public set GPSNavigator(gpsNavigator: Array<number>) {
        this._gpsNavigator = gpsNavigator;
    }

    public get GPSNavigator(): Array<number> {
        return this._gpsNavigator;
    }

    public set Seats(seats: number) {
        this._seats = seats;
    }

    public get Seats(): number {
        return this._seats;
    }
    public Action(): void {
        log("Reading book");
    }
}

export {
    Car,
    CarManual
}