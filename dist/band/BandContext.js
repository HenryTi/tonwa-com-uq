"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBand = exports.VBandContext = exports.BandContext = void 0;
var react_1 = __importStar(require("react"));
var valtio_1 = require("valtio");
var BandContext = /** @class */ (function () {
    function BandContext(container, memos) {
        this.container = container;
        this.errors = (0, valtio_1.proxy)([]);
        this.memos = memos;
        this.fields = {};
        container.bands.push(this);
    }
    BandContext.prototype.setError = function (name, error) {
        if (this.fields[name] === true) {
            if (error) {
                for (var _i = 0, error_1 = error; _i < error_1.length; _i++) {
                    var err = error_1[_i];
                    this.errors.push({ name: name, error: err });
                }
            }
        }
    };
    BandContext.prototype.clearError = function (name) {
        var last = this.errors.length - 1;
        for (var i = last; i >= 0; i--) {
            var err = this.errors[i];
            if (err.name === name) {
                this.errors.splice(i, 1);
            }
        }
    };
    BandContext.prototype.clearAllErrors = function () {
        this.errors.splice(0);
    };
    return BandContext;
}());
exports.BandContext = BandContext;
exports.VBandContext = react_1.default.createContext(undefined);
function useBand() {
    return (0, react_1.useContext)(exports.VBandContext);
}
exports.useBand = useBand;
//# sourceMappingURL=BandContext.js.map