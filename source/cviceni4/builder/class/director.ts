import IBuilder from "../interface/builder";
import Engine from "./engine";

class Director {
  private _builder: IBuilder;

  constructor(builder: IBuilder) {
    this._builder = builder;
  }

  public set builder(builder: IBuilder) {
    this._builder = builder;
  }

  public getProduct(moreSeats: boolean = false, engine: boolean = false): any {
    this._builder.reset();
    if (moreSeats) {
      this._builder.setSeats(5);
    } else {
      this._builder.setSeats(2);
    }

    if (engine) {
      this._builder.setEngine(new Engine(1.2, 100, false, "Gasoline"));
    } 
    this._builder.setTripComputer();
    this._builder.setGPS();
    const car = this._builder.getCar();
    return car;
  }
}

export default Director;
