import { moveShip, Spaceship } from "./hello"

test("Be sure the ship can move!", () => {
    const enterprise: Spaceship = {
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
    moveShip(enterprise, { dx: 1, dy: 1 });
    // expect(enterprise.position.dx).toBe(1);
    expect(enterprise.position.dx).toBeCloseTo(1);
    console.log(enterprise.position.dy);
    expect(enterprise.position.dy).toBeCloseTo(1);
})