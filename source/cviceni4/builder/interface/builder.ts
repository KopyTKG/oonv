import Engine from "../class/engine";

interface IBuilder {
    reset(): void;
    setSeats(count: number): void;
    setEngine(engine:Engine): void;
    setTripComputer(): void;
    setGPS(): void;
    getCar(): any;
}

export default IBuilder;