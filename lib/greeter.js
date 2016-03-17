"use strict";
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
        this.da = 'dsaopda';
    }
    Greeter.prototype.greet = function () {
        return 'Bonjour, ' + this.greeting + '!';
    };
    return Greeter;
}());
module.exports = Greeter;
