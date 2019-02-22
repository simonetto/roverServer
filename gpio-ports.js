'use strict'
const Gpio = require('onoff').Gpio;

module.exports = Object.freeze({
    SERVOS : {
        LEFT : [new Gpio(7, 'out'), new Gpio(11, 'out')],
        RIGHT : [new Gpio(13, 'out'), new Gpio(15, 'out')]
    },
    RANGE_SENSOR : {
        TRIG : new Gpio(37, 'out'),
        ECHO : new Gpio(24, 'in')
    }
});
