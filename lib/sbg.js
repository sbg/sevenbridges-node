"use strict";
var Api_1 = require('./Api');
var SBG = (function () {
    function SBG(config) {
        this.Config = config;
        this.Api = Api_1.Api;
    }
    SBG.prototype.send = function (options, callback) {
        var sessionid = this.Config['session-id'];
        options.headers = {
            'session-id': sessionid
        };
        this.Api.request(options, callback);
    };
    return SBG;
}());
module.exports = SBG;
