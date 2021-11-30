"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.VUser = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var vm_1 = require("../../vm");
var VUser = /** @class */ (function (_super) {
    __extends(VUser, _super);
    function VUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VUser.prototype.render = function () {
        return (0, jsx_runtime_1.jsx)("div", { children: "User" }, void 0);
    };
    return VUser;
}(vm_1.View));
exports.VUser = VUser;
//# sourceMappingURL=VUser.js.map