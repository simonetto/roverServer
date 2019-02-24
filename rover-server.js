'use strict'
//const ports = require('./gpio-ports');

const MAX_DISTANCE = 30;
const POLLING_INTERVAL = 500;
const SOUND_SPEED = 3430;

let distance = Number.MAX_SAFE_INTEGER;

module.exports = class RoverServer {
    onMove(control) {
        this.control = control;
        Object.keys(control).forEach(key => {
            this.move(key.toUpperCase(), control[key]);
        });
    }

    pollDistance() {
        let pulseStart = 0;
        let pulseEnd = 0;

    //    ports.RANGE_SENSOR.TRIG.writeSync(1);

        setTimeout(() => {
    //        ports.RANGE_SENSOR.TRIG.writeSync(0);

    //        while (ports.RANGE_SENSOR.ECHO.readSync() === 0) {
                pulseStart = + new Date();
    //        }

    //        while (ports.RANGE_SENSOR.ECHO.readSync() === 1) {
                pulseEnd = + new Date();
    //        }

            const pulseDuration = pulseEnd - pulseStart;
            distance = pulseDuration * SOUND_SPEED / 1000;

	console.log(this.control)
            if (this.control) {
                const goingFwd = this.control.left.direction < 0 || this.control.right.direction;


            if (distance > MAX_DISTANCE && goingFwd) {
                // ports.SERVOS.LEFT[0].writeSync(0);
                // ports.SERVOS.LEFT[1].writeSync(0);
                // ports.SERVOS.RIGHT[0].writeSync(0);
                // ports.SERVOS.RIGHT[1].writeSync(0);
                console.log('BREAK!')
                }
            }
        }, 0.01);
    }

    eBrake(direction) {
        return distance > MAX_DISTANCE && direction < 0;
    }

    move(side, direction) {
        ports.SERVOS[side].forEach((port, i) => {
            let value = !this.eBrake(direction) &&
                        direction !== 0 &&
                        ((direction < 0 || !!i) && !(direction < 0 && !!i));

        //    port.writeSync(+value);
        });
    }

    constructor() {
        this.control = null
        setInterval(this.pollDistance, POLLING_INTERVAL);
    }
};
