'use strict'
const constants = require('./gpio-ports');
const MIN_DISTANCE = 10;
const POLLING_INTERVAL = 70;
const SOUND_SPEED = 17150;

module.exports = class RoverServer {
    onMove(control) {
        this.control = control;
        Object.keys(control).forEach(key => {
            this.move(key.toUpperCase(), control[key]);
        });
    }

    pollDistance() {
        this.distance = 8;

        if (this.control) {
            const goingFwd = this.control.left.direction < 0 || this.control.right.direction;

            if (this.distance < MIN_DISTANCE && goingFwd) {
                console.log('stop!!!');
            }
        }
    }

    eBrake(direction) {
        return this.distance < MIN_DISTANCE && direction < 0;
    }

    move(side, direction) {
        let ports = constants.SERVOS[side];
        let multiplier = 1;

        ports.forEach(port => {
            let value = !this.eBrake(direction) && multiplier * direction < 0;
            multiplier = multiplier * -1;
            console.log(side, port, value);
        });
    }

    constructor() {
        this.distance = 0;
        this.control = null
        setInterval(this.pollDistance, POLLING_INTERVAL);
    }
};
