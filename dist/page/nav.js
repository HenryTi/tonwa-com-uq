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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useNav = exports.useTabNav = exports.useAppNav = exports.PageStackContext = exports.TabNavContext = exports.AppNavContext = exports.Nav = exports.StackNav = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importStar(require("react"));
var coms_1 = require("../coms");
var valtio_1 = require("valtio");
var Page_1 = require("./Page");
var StackNav = /** @class */ (function () {
    function StackNav() {
        this.callStack = [];
        this.pageKeyNO = 0;
        this.data = (0, valtio_1.proxy)({
            stack: [],
        });
    }
    StackNav.prototype.open = function (page, onClose) {
        var _this = this;
        if (typeof (page) === 'function') {
            var promise = page();
            var isWaiting_1 = false;
            setTimeout(function () {
                if (isWaiting_1 === undefined)
                    return;
                _this.open((0, jsx_runtime_1.jsx)(Waiting, {}, void 0));
                isWaiting_1 = true;
            }, 200);
            promise.then(function (pg) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (isWaiting_1 === true) {
                        this.close();
                    }
                    isWaiting_1 = undefined;
                    this.open(pg, onClose);
                    return [2 /*return*/];
                });
            }); });
            return;
        }
        this.internalOpen(page, onClose);
    };
    StackNav.prototype.internalOpen = function (page, onClose) {
        var pageItem = {
            key: String(++this.pageKeyNO),
            page: page,
            onClose: onClose,
        };
        this.data.stack.push((0, valtio_1.ref)(pageItem));
    };
    StackNav.prototype.close = function (level) {
        if (level === void 0) { level = 1; }
        for (var i = 0; i < level; i++)
            this.innerClose();
    };
    StackNav.prototype.call = function (page) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.callStack.push(resolve);
            _this.open(page);
        });
    };
    StackNav.prototype.returnCall = function (returnValue) {
        var resolve = this.callStack.pop();
        if (resolve === undefined) {
            console.error('nav.call and nav.returnCall not matched');
            return;
        }
        this.close();
        resolve(returnValue);
    };
    StackNav.prototype.confirm = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, window.confirm(msg)];
            });
        });
    };
    StackNav.prototype.clear = function () {
        alert('nav clear');
    };
    StackNav.prototype.innerClose = function () {
        var stack = this.data.stack;
        var len = stack.length;
        if (len === 0) {
            //this.appNav?.close(this.appPageItem);
            return;
        }
        var onClose = stack[len - 1].onClose;
        if ((onClose === null || onClose === void 0 ? void 0 : onClose()) === false)
            return;
        stack.pop();
    };
    return StackNav;
}());
exports.StackNav = StackNav;
function Waiting() {
    return (0, jsx_runtime_1.jsx)(Page_1.UPage, __assign({ header: "...", back: "none", headerClassName: "bg-secondary" }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "px-5 py-5 text-info text-center" }, { children: (0, jsx_runtime_1.jsx)(coms_1.Spinner, {}, void 0) }), void 0) }), void 0);
}
var Nav = /** @class */ (function (_super) {
    __extends(Nav, _super);
    function Nav(appNav, tabNav, initPage) {
        var _this = _super.call(this) || this;
        _this.appNav = appNav;
        _this.tabNav = tabNav;
        _this.internalOpen(initPage);
        return _this;
    }
    /*
        navigate(to: To, options?: NavigateOptions) {
            this.appNav.navigate(to, options);
        }
    */
    Nav.prototype.openTab = function (tabItem) {
        this.tabNav.openTab(tabItem);
    };
    Nav.prototype.innerClose = function () {
        _super.prototype.innerClose.call(this);
        if (this.data.stack.length > 0)
            return;
        if (this.tabNav) {
            this.tabNav.closeTab();
        }
        else {
            this.appNav.close();
        }
    };
    return Nav;
}(StackNav));
exports.Nav = Nav;
exports.AppNavContext = react_1.default.createContext(undefined);
exports.TabNavContext = react_1.default.createContext(undefined);
exports.PageStackContext = react_1.default.createContext(undefined);
function useAppNav() {
    return (0, react_1.useContext)(exports.AppNavContext);
}
exports.useAppNav = useAppNav;
function useTabNav() {
    return (0, react_1.useContext)(exports.TabNavContext);
}
exports.useTabNav = useTabNav;
function useNav() {
    return (0, react_1.useContext)(exports.PageStackContext);
}
exports.useNav = useNav;
//# sourceMappingURL=nav.js.map