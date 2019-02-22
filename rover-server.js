'use strict'
const ports = require('./gpio-ports');
const Gpio = require('onoff').Gpio;
const MIN_DISTANCE = 10;
const POLLING_INTERVAL = 70;
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
        const trigGpio = ports.RANGE_SENSOR.TRIG.gpio;
        const echoGpio = ports.RANGE_SENSOR.ECHO.gpio;

        if (!trigGpio) {
            ports.RANGE_SENSOR.TRIG.gpio = new Gpio(ports.RANGE_SENSOR.TRIG.value, 'out');
        }

        if (!echoGpio) {
            ports.RANGE_SENSOR.ECHO.gpio = new Gpio(ports.RANGE_SENSOR.ECHO.value, 'in');
        }

        ports.RANGE_SENSOR.TRIG.gpio.writeSync(1);

        setTimeout(() => {
            ports.RANGE_SENSOR.TRIG.gpio.writeSync(0);

            while (ports.RANGE_SENSOR.ECHO.gpio.readSync() === 0) {
                pulseStart = + new Date();
            }

            while (ports.RANGE_SENSOR.ECHO.gpio.readSync() === 1) {
                pulseEnd = + new Date();
            }

            const pulseDuration = pulseEnd - pulseStart;
            distance = pulseDuration * SOUND_SPEED;

            if (this.control) {
                const goingFwd = this.control.left.direction < 0 || this.control.right.direction;

                if (distance < MIN_DISTANCE && goingFwd) {
                    move('left', -1);
                    move('right', -1);
                }
            }
        }, 0,01);
    }

    eBrake(direction) {
        return distance < MIN_DISTANCE && direction < 0;
    }

    move(side, direction) {
        let ports = ports.SERVOS[side];

        ports.forEach((port, i) => {
            if (!port.gpio) {
                port.gpio = new Gpio(port.value, 'out');
            }
            let value = !this.eBrake(direction) &&
                        direction !== 0 &&
                        !((direction > 0 || !!i) && !(direction > 0 && !!i));

            port.gpio.writeSync(+value);
            console.log(side, port.value, value);
        });
    }

    constructor() {
        this.control = null
        setInterval(this.pollDistance, POLLING_INTERVAL);
    }
};
