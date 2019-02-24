'use strict'
const ports = require('./gpio-ports');

const MAX_DISTANCE = 40;
const POLLING_INTERVAL = 500;
// The number of microseconds it takes sound to travel 1cm at 20 degrees celcius
const SOUND_SPEED = 1e6/34321;

let distance = Number.MAX_SAFE_INTEGER;
let control = null;

module.exports = class RoverServer {
    onMove(joystick) {
        control = joystick;
        Object.keys(control).forEach(key => {
            this.move(key.toUpperCase(), control[key]);
        });
    }

    pollDistance() {
        let startTick;

        ports.RANGE_SENSOR.ECHO.watch((level, tick) => {
            console.log(leve, tick)
            if (level == 1) {
                startTick = tick;
            } else {
                const endTick = tick;
                const diff = (endTick >> 0) - (startTick >> 0); // Unsigned 32 bit arithmetic
                distance = diff / 2 / SOUND_SPEED;
                console.log( distance );

                if (control) {
                    const goingFwd = control.left.direction > 0 || control.right.direction > 0;
                    console.log('fwd', goingFwd);
                    console.log('distance', distance);
                    console.log('max', MAX_DISTANCE)

                    if (distance > MAX_DISTANCE && goingFwd) {
                        ports.SERVOS.LEFT[0].writeSync(0);
                        ports.SERVOS.LEFT[1].writeSync(0);
                        ports.SERVOS.RIGHT[0].writeSync(0);
                        ports.SERVOS.RIGHT[1].writeSync(0);
                        console.log('BREAK!')
                    }
                }
            }
        });
    }

    eBrake(direction) {
        return distance > MAX_DISTANCE && direction > 0;
    }

    move(side, direction) {
        //console.log(side, direction)

        ports.SERVOS[side].forEach((port, i) => {
            let value = !this.eBrake(direction) &&
            direction !== 0 &&
            ((direction < 0 || !!i) && !(direction < 0 && !!i));

            port.writeSync(+value);
        });
    }

    constructor() {
        ports.RANGE_SENSOR.TRIG.writeSync(0);
        setInterval(() => {
            ports.RANGE_SENSOR.TRIG.writeSync(1); // Set trigger high for 10 microseconds
            $setTimeout(() {
                ports.RANGE_SENSOR.TRIG.writeSync(0);
            }, 0.01);
        }, POLLING_INTERVAL);

        this.pollDistance();
    }
};
