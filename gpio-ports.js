'use strict'
const Gpio = require('onoff').Gpio;

module.exports = Object.freeze({
    SERVOS : {
        LEFT : [new Gpio(17, 'out'), new Gpio(22, 'out')],
        RIGHT : [new Gpio(23, 'out'), new Gpio(24, 'out')]
    },
    RANGE_SENSOR : {
        TRIG : new Gpio(25, 'out'),
        ECHO : new Gpio(18, 'in')
    }
});
