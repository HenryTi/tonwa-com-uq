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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavView = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var tonwa_core_1 = require("tonwa-core");
var components_1 = require("../components");
var FetchErrorView_1 = __importDefault(require("./FetchErrorView"));
var components_2 = require("../components");
;
var stackKey = 1;
var notSupportedBrowsers = ['IE'];
var NavView = /** @class */ (function (_super) {
    __extends(NavView, _super);
    function NavView(props) {
        var _this = _super.call(this, props) || this;
        _this.waitCount = 0;
        _this.isWebNav = false;
        _this.isHistoryBack = false;
        _this.navBack = function () {
            //nav.log('backbutton pressed - nav level: ' + this.stack.length);
            var tick = Date.now();
            _this.isHistoryBack = true;
            _this.back(true);
            _this.isHistoryBack = false;
            console.log("///\\\\ " + (Date.now() - tick) + "ms backbutton pressed - nav level: " + _this.stack.length);
        };
        _this.back = function (confirm) {
            if (confirm === void 0) { confirm = true; }
            return __awaiter(_this, void 0, void 0, function () {
                var stack, len, top;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            stack = this.stack;
                            len = stack.length;
                            if (len === 0)
                                return [2 /*return*/];
                            if (len === 1) {
                                if (window.self !== window.top) {
                                    window.top.postMessage({ type: 'pop-app' }, '*');
                                }
                                return [2 /*return*/];
                            }
                            top = stack[len - 1];
                            if (!(confirm === true && top.confirmClose)) return [3 /*break*/, 2];
                            return [4 /*yield*/, top.confirmClose()];
                        case 1:
                            if ((_a.sent()) === true)
                                this.pop();
                            return [3 /*break*/, 3];
                        case 2:
                            this.pop();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        _this.clearError = function () {
            _this.setState({ fetchError: undefined });
        };
        _this.backIcon = (0, jsx_runtime_1.jsx)("i", { className: "fa fa-angle-left" }, void 0);
        _this.closeIcon = (0, jsx_runtime_1.jsx)("i", { className: "fa fa-close" }, void 0);
        _this.stack = [];
        var browser = tonwa_core_1.env.browser;
        var notSupportedBrowser = notSupportedBrowsers.findIndex(function (v) { return v === browser; }) >= 0;
        _this.state = {
            notSupportedBrowser: notSupportedBrowser,
            stack: _this.stack,
            wait: 0,
            fetchError: undefined
        };
        return _this;
        //nav.set(this);
    }
    NavView.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.state.notSupportedBrowser === true)
                    return [2 /*return*/];
                window.addEventListener('popstate', this.navBack);
                return [2 /*return*/];
            });
        });
    };
    Object.defineProperty(NavView.prototype, "level", {
        get: function () {
            return this.stack.length;
        },
        enumerable: false,
        configurable: true
    });
    NavView.prototype.startWait = function () {
        var _this = this;
        if (this.waitCount === 0) {
            this.setState({ wait: 1 });
            this.waitTimeHandler = tonwa_core_1.env.setTimeout('NavView.startWait', function () {
                _this.waitTimeHandler = undefined;
                _this.setState({ wait: 2 });
            }, 1000);
        }
        ++this.waitCount;
        this.setState({
            fetchError: undefined,
        });
    };
    NavView.prototype.endWait = function () {
        var _this = this;
        tonwa_core_1.env.setTimeout(undefined, //'NavView.endWait',
        function () {
            /*
            this.setState({
                fetchError: undefined,
            });*/
            --_this.waitCount;
            if (_this.waitCount === 0) {
                if (_this.waitTimeHandler !== undefined) {
                    tonwa_core_1.env.clearTimeout(_this.waitTimeHandler);
                    _this.waitTimeHandler = undefined;
                }
                _this.setState({ wait: 0 });
            }
        }, 100);
    };
    NavView.prototype.show = function (view, disposer) {
        this.clear();
        return this.push(view, disposer);
    };
    NavView.prototype.push = function (view, disposer) {
        this.removeCeased();
        if (this.stack.length > 0) {
            window.history.pushState('forward', null, null);
        }
        var key = stackKey++;
        this.stack.push({
            key: key,
            view: view,
            ceased: false,
            disposer: disposer
        });
        this.refresh();
        //console.log('push: %s pages', this.stack.length);
        return key;
    };
    NavView.prototype.replace = function (view, disposer) {
        var item = undefined;
        var stack = this.stack;
        if (stack.length > 0) {
            item = stack.pop();
            //this.popAndDispose();
        }
        var key = stackKey++;
        this.stack.push({
            key: key,
            view: view,
            ceased: false,
            disposer: disposer
        });
        if (item !== undefined)
            this.dispose(item.disposer);
        this.refresh();
        //console.log('replace: %s pages', this.stack.length);
        return key;
    };
    NavView.prototype.ceaseTop = function (level) {
        if (level === void 0) { level = 1; }
        var p = this.stack.length - 1;
        for (var i = 0; i < level; i++, p--) {
            if (p < 0)
                break;
            var item = this.stack[p];
            item.ceased = true;
        }
    };
    NavView.prototype.pop = function (level) {
        if (level === void 0) { level = 1; }
        var stack = this.stack;
        var len = stack.length;
        //console.log('pop start: %s pages level=%s', len, level);
        if (level <= 0 || len <= 1)
            return;
        if (len < level)
            level = len;
        var backLevel = 0;
        for (var i = 0; i < level; i++) {
            if (stack.length === 0)
                break;
            //stack.pop();
            this.popAndDispose();
            ++backLevel;
        }
        if (backLevel >= len)
            backLevel--;
        this.refresh();
        if (this.isHistoryBack !== true) {
            //window.removeEventListener('popstate', this.navBack);
            //window.history.back(backLevel);
            //window.addEventListener('popstate', this.navBack);
        }
        //console.log('pop: %s pages', stack.length);
    };
    NavView.prototype.popTo = function (key) {
        if (key === undefined)
            return;
        if (this.stack.find(function (v) { return v.key === key; }) === undefined)
            return;
        while (this.stack.length > 0) {
            var len = this.stack.length;
            var top_1 = this.stack[len - 1];
            if (top_1.key === key)
                break;
            this.pop();
        }
    };
    NavView.prototype.topKey = function () {
        var len = this.stack.length;
        if (len === 0)
            return undefined;
        return this.stack[len - 1].key;
    };
    NavView.prototype.removeCeased = function () {
        for (;;) {
            var p = this.stack.length - 1;
            if (p < 0)
                break;
            var top_2 = this.stack[p];
            if (top_2.ceased === false)
                break;
            var item = this.stack.pop();
            var disposer = item.disposer;
            this.dispose(disposer);
        }
        this.refresh();
    };
    NavView.prototype.popAndDispose = function () {
        this.removeCeased();
        var item = this.stack.pop();
        if (item === undefined)
            return;
        //if (nav.isRouting) {
        //	window.history.back();
        //}
        var disposer = item.disposer;
        this.dispose(disposer);
        this.removeCeased();
        return item;
    };
    NavView.prototype.dispose = function (disposer) {
        if (disposer === undefined)
            return;
        var item = this.stack.find(function (v) { return v.disposer === disposer; });
        if (item === undefined)
            disposer();
    };
    NavView.prototype.clear = function () {
        var len = this.stack.length;
        while (this.stack.length > 0)
            this.popAndDispose();
        //this.refresh();
        if (len > 1) {
            //window.removeEventListener('popstate', this.navBack);
            //window.history.back(len-1);
            //window.addEventListener('popstate', this.navBack);
        }
    };
    NavView.prototype.regConfirmClose = function (confirmClose) {
        var stack = this.stack;
        var len = stack.length;
        if (len === 0)
            return;
        var top = stack[len - 1];
        top.confirmClose = confirmClose;
    };
    NavView.prototype.confirmBox = function (message) {
        return window.confirm(message);
    };
    NavView.prototype.render = function () {
        var _a = this.state, notSupportedBrowser = _a.notSupportedBrowser, wait = _a.wait, fetchError = _a.fetchError;
        if (notSupportedBrowser === true) {
            return (0, jsx_runtime_1.jsxs)("div", __assign({ className: "p-3 text-danger" }, { children: [tonwa_core_1.env.browser, " not supported !"] }), void 0);
        }
        var stack = this.state.stack;
        var top = stack.length - 1;
        var elWait = null, elError = null;
        switch (wait) {
            case 1:
                elWait = (0, jsx_runtime_1.jsx)("div", { className: "va-wait va-wait1" }, void 0);
                break;
            case 2:
                elWait = (0, jsx_runtime_1.jsx)("div", __assign({ className: "va-wait va-wait2" }, { children: (0, jsx_runtime_1.jsx)(components_1.Loading, {}, void 0) }), void 0);
                break;
        }
        if (fetchError) {
            elError = (0, jsx_runtime_1.jsx)(FetchErrorView_1.default, __assign({ clearError: this.clearError }, fetchError), void 0);
            ++top;
        }
        var test = tonwa_core_1.env.testing === true &&
            (0, jsx_runtime_1.jsx)("span", __assign({ className: "cursor-pointer position-fixed", style: { top: 0, left: '0.2rem', zIndex: 90001 } }, { children: (0, jsx_runtime_1.jsx)(components_2.FA, { className: "text-warning", name: "info-circle" }, void 0) }), void 0);
        return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [stack.map(function (item, index) {
                    var key = item.key, view = item.view;
                    return (0, jsx_runtime_1.jsx)("div", __assign({ style: index < top ? { visibility: 'hidden', position: 'absolute' } : undefined }, { children: view }), key);
                }), elWait, elError, test] }, void 0);
    };
    NavView.prototype.refresh = function () {
        this.setState({ stack: this.stack });
    };
    NavView.prototype.setIsWebNav = function () {
        this.isWebNav = true;
        this.backIcon = (0, jsx_runtime_1.jsx)("i", { className: "fa fa-arrow-left" }, void 0);
        this.closeIcon = (0, jsx_runtime_1.jsx)("i", { className: "fa fa-close" }, void 0);
    };
    NavView.prototype.renderNavView = function (onLogined, onNotLogined) {
        throw new Error('renderNavView');
    };
    return NavView;
}(React.Component));
exports.NavView = NavView;
//# sourceMappingURL=NavView.js.map