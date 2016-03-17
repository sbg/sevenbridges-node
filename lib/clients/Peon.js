"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Base_1 = require('./Base');
var Peon = (function (_super) {
    __extends(Peon, _super);
    function Peon() {
        _super.call(this);
        this.sessionId = '';
    }
    return Peon;
}(Base_1.Base));
exports.Peon = Peon;
