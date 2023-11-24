import { log } from "console";
import { CatFactory, DogFactory } from "./classes/factory";

class App{
    private _factory: any;

    public set Factory(factory: any) {
        this._factory = factory;
    }

    public GetAnimal(): any {
        return this._factory.createAnimal();
    }
}
function MainLoop() {
    const Cat = new CatFactory();
    const Dog = new DogFactory();

    const Factory = new App();
    Factory.Factory = Cat;

    const animal = Factory.GetAnimal();
    animal.doAroar();

}
function Cviceni5() {
    MainLoop();
}

export {
    Cviceni5
}