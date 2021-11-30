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
exports.CUser = void 0;
var vm_1 = require("../../vm");
var CUser = /** @class */ (function (_super) {
    __extends(CUser, _super);
    function CUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CUser;
}(vm_1.ControllerWithWeb));
exports.CUser = CUser;
//# sourceMappingURL=CUser.js.map