import { log } from "console";

export class Fasade {
    private SubClass = new SubClass();
    constructor() {}

    public Run() {
        this.SubClass.SubMethod();
    }
}

class SubClass {
    public SubMethod() {
        log("SubMethod");
    }
}