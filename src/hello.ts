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

export type Spaceship = {
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

export function moveShip(ship: Spaceship, positionChange: Vector) {
    ship.position = { dx: ship.position.dx + positionChange.dx, dy: ship.position.dy + positionChange.dy };
}

/*
"@jest/globals": "^29.7.0",
    "@types/jest": "^29.5.14",
    "jest": "^29.7.0",
    "ts-jest": "^29.2.5",
    
*/