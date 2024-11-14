console.log("Hello Typescript!");

type Chair = {
    height: number;
    brand: string;
}

const eames: Chair = {
    height: 1.9,
    brand: "Eames",
};

type Vector = {
    dx: number;
    dy: number;
}

type Spaceship = {
    position: Vector;
    velocity: Vector;
    accel: Vector;
}

const myShip: Spaceship = {
    position: {
        dx: 0,
        dy: 0
    },
    velocity: {
        dx: 0,
        dy: 0
    },
    accel: {
        dx: 0,
        dy: 0
    }
}