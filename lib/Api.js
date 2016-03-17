"use strict";
var Request = require('request');
var Api;
(function (Api) {
    function request(options, callback) {
        return Request(options, callback);
    }
    Api.request = request;
})(Api = exports.Api || (exports.Api = {}));
