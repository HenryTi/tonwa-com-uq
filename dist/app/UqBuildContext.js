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
exports.UqBuildContextUI = void 0;
var tonwa_core_1 = require("tonwa-core");
var UqBuildContextUI = /** @class */ (function (_super) {
    __extends(UqBuildContextUI, _super);
    function UqBuildContextUI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(UqBuildContextUI.prototype, "uiPlatform", {
        get: function () { return 'react'; },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(UqBuildContextUI.prototype, "uiPlatformUpper", {
        get: function () { return 'REACT'; },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(UqBuildContextUI.prototype, "uiPlatformCamel", {
        get: function () { return 'React'; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UqBuildContextUI.prototype, "element", {
        get: function () { return 'JSX.Element'; },
        enumerable: false,
        configurable: true
    });
    return UqBuildContextUI;
}(tonwa_core_1.UqBuildContext));
exports.UqBuildContextUI = UqBuildContextUI;
//# sourceMappingURL=UqBuildContext.js.map