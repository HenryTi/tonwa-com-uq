"use strict";
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
exports.Controller = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var tonwa_core_1 = require("tonwa-core");
var ui_1 = require("../ui");
var components_1 = require("../components");
var mobx_1 = require("mobx");
var Controller = /** @class */ (function () {
    function Controller(tonwa) {
        var _this = this;
        this.res = {};
        this.t = function (str) { return _this.internalT(str) || str; };
        this.isDev = tonwa_core_1.env.isDevelopment;
        this.tonwa = tonwa;
        this.nav = tonwa.nav;
    }
    Controller.prototype.shallow = function (data) {
        var ret = (0, mobx_1.makeObservable)(data, this.buildReactiveProps(data, mobx_1.observable.shallow));
        return ret;
    };
    Controller.prototype.deep = function (data) {
        var ret = (0, mobx_1.makeObservable)(data, this.buildReactiveProps(data, mobx_1.observable));
        return ret;
    };
    Controller.prototype.buildReactiveProps = function (data, ob) {
        var ret = {};
        for (var i in data) {
            var v = data[i];
            switch (typeof v) {
                default:
                    ob = mobx_1.observable;
                    break;
                case 'object':
                case 'function':
                    break;
            }
            ret[i] = ob;
        }
        return ret;
    };
    Controller.prototype.runInAction = function (fn) {
        return (0, mobx_1.runInAction)(fn);
    };
    Controller.prototype.getTonwa = function () { return this.tonwa; };
    Controller.prototype.beforeInit = function () { };
    Controller.prototype.afterInit = function () { };
    Controller.prototype.internalInit = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        this.beforeInit();
        this.init.apply(this, param);
        this.pageWebNav = this.getPageWebNav();
        this.afterInit();
    };
    Controller.prototype.init = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
    };
    Controller.prototype.internalT = function (str) {
        var _a, _b;
        return (_b = (_a = this.res) === null || _a === void 0 ? void 0 : _a[str]) !== null && _b !== void 0 ? _b : (0, ui_1.t)(str);
    };
    Controller.prototype.getPageWebNav = function () { return undefined; };
    Controller.prototype.setRes = function (res) {
        if (res === undefined)
            return;
        var $lang = tonwa_core_1.resOptions.$lang, $district = tonwa_core_1.resOptions.$district;
        Object.assign(this.res, res);
        if ($lang !== undefined) {
            var l = res[$lang];
            if (l !== undefined) {
                Object.assign(this.res, l);
                var d = l[$district];
                if (d !== undefined) {
                    Object.assign(this.res, d);
                }
            }
        }
    };
    Controller.prototype.getRes = function () { return this.res; };
    Controller.prototype.openVPage = function (vp, param, afterBack) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ret = new vp(this);
                        return [4 /*yield*/, ret.open(param, afterBack)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    Controller.prototype.replaceVPage = function (vp, param, afterBack) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ret = new vp(this);
                        return [4 /*yield*/, ret.replaceOpen(param, afterBack)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    Controller.prototype.renderView = function (view, param) {
        var v = new view(this);
        return v.render(param);
    };
    Controller.prototype.event = function (type, value) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.onEvent(type, value)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Controller.prototype.onEvent = function (type, value) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    Controller.prototype.msg = function (text) {
        alert(text);
    };
    Controller.prototype.errorPage = function (header, err) {
        this.openPage((0, jsx_runtime_1.jsx)(components_1.Page, __assign({ header: "App error!" }, { children: (0, jsx_runtime_1.jsx)("pre", { children: typeof err === 'string' ? err : err.message }, void 0) }), void 0));
    };
    Controller.prototype.openPage = function (page, onClosePage) {
        var disposer;
        if (onClosePage !== undefined) {
            disposer = function () {
                //if (this.disposer) this.disposer();
                onClosePage(undefined);
            };
        }
        this.nav.push(page, disposer);
        //this.disposer = undefined;
    };
    Controller.prototype.replacePage = function (page, onClosePage) {
        this.nav.replace(page, onClosePage);
        //this.disposer = undefined;
    };
    Controller.prototype.backPage = function () {
        this.nav.back(false);
    };
    Controller.prototype.closePage = function (level) {
        this.nav.pop(level);
    };
    Controller.prototype.ceasePage = function (level) {
        this.nav.ceaseTop(level);
    };
    Controller.prototype.go = function (showPage, url, absolute) {
        this.go(showPage, url, absolute);
    };
    Controller.prototype.removeCeased = function () {
        this.nav.removeCeased();
    };
    Controller.prototype.regConfirmClose = function (confirmClose) {
        this.nav.regConfirmClose(confirmClose);
    };
    Controller.prototype.startAction = function () {
        this.topPageKey = this.nav.topKey();
    };
    Object.defineProperty(Controller.prototype, "TopKey", {
        get: function () {
            return this.topPageKey;
        },
        enumerable: false,
        configurable: true
    });
    Controller.prototype.SetTopKey = function (key) {
        this.topPageKey = key;
    };
    Controller.prototype.popToTopPage = function () {
        this.nav.popTo(this.topPageKey);
    };
    Controller.prototype.confirm = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var caption, message, ok, yes, no, classNames, close, buttons;
                        var _this = this;
                        return __generator(this, function (_a) {
                            caption = options.caption, message = options.message, ok = options.ok, yes = options.yes, no = options.no, classNames = options.classNames;
                            close = function (res) {
                                _this.closePage();
                                resolve(res);
                            };
                            buttons = [];
                            if (ok !== undefined) {
                                buttons.push((0, jsx_runtime_1.jsx)("button", __assign({ className: "btn btn-primary me-3", onClick: function () { return close('ok'); } }, { children: ok }), "ok"));
                            }
                            if (yes !== undefined) {
                                buttons.push((0, jsx_runtime_1.jsx)("button", __assign({ className: "btn btn-success me-3", onClick: function () { return close('yes'); } }, { children: yes }), "yes"));
                            }
                            if (no !== undefined) {
                                buttons.push((0, jsx_runtime_1.jsx)("button", __assign({ className: "btn btn-outline-danger me-3", onClick: function () { return close('no'); } }, { children: no }), "no"));
                            }
                            this.openPage((0, jsx_runtime_1.jsx)(components_1.Page, __assign({ header: caption || '请确认', back: "close" }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: classNames || "rounded bg-white m-5 p-3 border" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "d-flex align-items-center justify-content-center" }, { children: message }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "mt-3 d-flex align-items-center justify-content-center" }, { children: buttons }), void 0)] }), void 0) }), void 0));
                            this.nav.regConfirmClose(function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    resolve(undefined);
                                    return [2 /*return*/, true];
                                });
                            }); });
                            return [2 /*return*/];
                        });
                    }); })];
            });
        });
    };
    return Controller;
}());
exports.Controller = Controller;
//# sourceMappingURL=Controller.js.map