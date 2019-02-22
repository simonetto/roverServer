'use strict'
const ports = require('./gpio-ports');

const MIN_DISTANCE = 10;
const POLLING_INTERVAL = 200;
const SOUND_SPEED = 17150;

let distance = 0;

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

        ports.RANGE_SENSOR.TRIG.writeSync(1);

        setTimeout(() => {
            ports.RANGE_SENSOR.TRIG.writeSync(0);

            while (ports.RANGE_SENSOR.ECHO.readSync() === 0) {
                pulseStart = + new Date();
            }

            while (ports.RANGE_SENSOR.ECHO.readSync() === 1) {
                pulseEnd = + new Date();
            }

            const pulseDuration = pulseEnd - pulseStart;
            distance = pulseDuration * SOUND_SPEED;

console.log('-------------------')
console.log('distance', distance)
console.log(pulseDuration, pulseEnd, pulseStart)

            if (this.control) {
                const goingFwd = this.control.left.direction < 0 || this.control.right.direction;

                if (distance < MIN_DISTANCE && goingFwd) {
                    move('left', -1);
                    move('right', -1);
                }
            }
        }, 0.01);
    }

    eBrake(direction) {
        return distance < MIN_DISTANCE && direction < 0;
    }

    move(side, direction) {
        ports.SERVOS[side].forEach((port, i) => {
            let value = !this.eBrake(direction) &&
                        direction !== 0 &&
                        ((direction > 0 || !!i) && !(direction > 0 && !!i));

            port.writeSync(+value);
        });
    }

    constructor() {
        this.control = null
        setInterval(this.pollDistance, POLLING_INTERVAL);
    }
};
