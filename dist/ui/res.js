"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.t = void 0;
var tonwa_core_1 = require("tonwa-core");
function t(str) {
    return tonwa_core_1.resGlobal[str] || str;
}
exports.t = t;
//# sourceMappingURL=res.js.map