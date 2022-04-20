"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildTFunc = void 0;
var tools_1 = require("../tools");
function buildTFunc(res) {
    var langRes = res[tools_1.env.lang];
    return function (str) {
        return langRes[str];
    };
}
exports.buildTFunc = buildTFunc;
//# sourceMappingURL=buildTFunc.js.map