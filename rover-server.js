'use strict'
const ports = require('./gpio-ports');

const MAX_DISTANCE = 40;
const POLLING_INTERVAL = 2000;
// The number of microseconds it takes sound to travel 1cm at 20 degrees celcius
const SOUND_SPEED = 1e6/34321;

//let distance = Number.MAX_SAFE_INTEGER;
//let sensor = null;

let duration, cm;

module.exports = class RoverServer {
    onMove(joystick) {
        Object.keys(joystick).forEach(key => {
            this.move(key.toUpperCase(), joystick[key]);
        });
    }
/*
    pollDistance() {
        if (control) {
            const goingFwd = control.left.direction > 0 || control.right.direction > 0;
            distance = sensor();
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
    }*/
/*        let startTick;

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
    }*/

    eBrake(direction) {
        return false;
    //    return distance > MAX_DISTANCE && direction > 0;
    }

    move(side, direction) {
        ports.SERVOS[side].forEach((port, i) => {
            let value = !this.eBrake(direction) &&
            direction !== 0 &&
            ((direction < 0 || !!i) && !(direction < 0 && !!i));

            port.writeSync(+value);
        });
    }

    loop() {
        //Setup
        ports.RANGE_SENSOR.TRIG.writeSync(0);
        setTimeout(() => {
            const start = + new Date()
            ports.RANGE_SENSOR.TRIG.writeSync(1);
            setTimeout(() => {
                ports.RANGE_SENSOR.TRIG.writeSync(0);

                let echo = ports.RANGE_SENSOR.ECHO.readSync();
                while (!echo) {
                    echo = ports.RANGE_SENSOR.ECHO.readSync();
                }
                duration = + new Date() - start;
                console.log("duration", duration)
                cm = (duration/2) / 29.1;
                console.log(cm)
            }, 0.01);
        }, 1000);
    }

    constructor() {
        setInterval(() => {
            loop();
        }, POLLING_INTERVAL);

        this.pollDistance();
    }
};
