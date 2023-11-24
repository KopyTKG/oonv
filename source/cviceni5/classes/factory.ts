import { log } from "console";


interface Ianimal {
    doAroar(): void;
}

class Cat implements Ianimal {
    public doAroar(): void {
        log("Meow");
    }
}

class Dog implements Ianimal {
    public doAroar(): void {
        log("Woof");
    }
}

abstract class Factory {
    abstract createAnimal(): Ianimal;

    doAroar(): Ianimal {
        const animal = this.createAnimal();
        return animal;
    }
}


class CatFactory extends Factory {
    createAnimal(): Ianimal {
        return new Cat();
    }
}

class DogFactory extends Factory {
    createAnimal(): Ianimal {
        return new Dog();
    }
}

export {
    CatFactory,
    DogFactory
}