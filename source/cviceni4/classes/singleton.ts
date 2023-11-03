class Server {
    private static instance: Server;
    private entities: Array<any>;
    private constructor() {
        this.entities = [];
    }

    static getInstance(): Server {
        if (!Server.instance) {
            Server.instance = new Server();
        }
        return Server.instance;
    }

    public SpawnEnemy(num: number, X: number, Y: number) {
        this.entities.push({Type: `Enemy${num}`, X: X, Y: Y});
    }

    public SpawnHero(num: number, X: number, Y: number) {
        this.entities.push({Type: `Hero${num}`, X: X, Y: Y});
    }

    public get Entities(): Array<any> {
        return this.entities;
    }

}

export {
    Server
}