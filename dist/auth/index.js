"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Register = exports.Logout = exports.Login = void 0;
var Login_1 = require("./Login");
Object.defineProperty(exports, "Login", { enumerable: true, get: function () { return Login_1.Login; } });
var Logout_1 = require("./Logout");
Object.defineProperty(exports, "Logout", { enumerable: true, get: function () { return Logout_1.Logout; } });
var Register_1 = require("./register/Register");
Object.defineProperty(exports, "Register", { enumerable: true, get: function () { return Register_1.Register; } });
__exportStar(require("./ChangePassword"), exports);
__exportStar(require("./UserQuit"), exports);
//# sourceMappingURL=index.js.map