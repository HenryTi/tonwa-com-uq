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
exports.TonwaReact = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var mobx_1 = require("mobx");
var tonwa_core_1 = require("tonwa-core");
var app_1 = require("./app");
var components_1 = require("./components");
require("font-awesome/css/font-awesome.min.css");
require("./css/va-form.css");
require("./css/va.css");
require("./css/animation.css");
var reloadPage_1 = require("./components/reloadPage");
var login_1 = require("./components/login");
var FetchErrorView_1 = require("./nav/FetchErrorView");
var nav_1 = require("./nav");
var TonwaReact = /** @class */ (function (_super) {
    __extends(TonwaReact, _super);
    function TonwaReact() {
        var _this = _super.call(this) || this;
        _this.showPrivacyPage = function () {
            var privacy = _this.getPrivacyContent();
            if (privacy) {
                _this.privacyPage(privacy);
            }
            else {
                _this.navView.push((0, jsx_runtime_1.jsx)(components_1.Page, __assign({ header: "\u9690\u79C1\u653F\u7B56" }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "p-3" }, { children: "AppConfig \u4E2D\u6CA1\u6709\u5B9A\u4E49 privacy\u3002\u53EF\u4EE5\u5B9A\u4E49\u4E3A\u5B57\u7B26\u4E32\uFF0C\u6216\u8005url\u3002markdown\u683C\u5F0F" }), void 0) }), void 0));
            }
        };
        _this.privacyPage = function (htmlString) { return __awaiter(_this, void 0, void 0, function () {
            var content;
            return __generator(this, function (_a) {
                content = { __html: htmlString };
                this.navView.push((0, jsx_runtime_1.jsx)(components_1.Page, __assign({ header: "\u9690\u79C1\u653F\u7B56" }, { children: (0, jsx_runtime_1.jsx)("div", { className: "p-3", dangerouslySetInnerHTML: content }, void 0) }), void 0));
                return [2 /*return*/];
            });
        }); };
        _this.resetAll = function () {
            _this.navView.push((0, jsx_runtime_1.jsx)(reloadPage_1.ConfirmReloadPage, { confirm: function (ok) {
                    if (ok === true) {
                        _this.showReloadPage('彻底升级');
                        localStorage.clear();
                    }
                    else {
                        _this.navView.pop();
                    }
                    return;
                } }, void 0));
        };
        _this.upgradeUq = function () {
            _this.start();
        };
        (0, mobx_1.makeObservable)(_this, {
            user: mobx_1.observable,
        });
        _this.setCreateLogin(login_1.createLogin);
        return _this;
    }
    TonwaReact.prototype.createWeb = function () { return new app_1.WebReact(); };
    TonwaReact.prototype.createObservableMap = function () {
        return mobx_1.observable.map({}, { deep: false });
    };
    TonwaReact.prototype.set = function (navView) {
        //this.logo = logo;
        this.navView = navView;
    };
    Object.defineProperty(TonwaReact.prototype, "nav", {
        get: function () { return this.navView; },
        enumerable: false,
        configurable: true
    });
    ;
    TonwaReact.prototype.renderNavView = function (onLogined, notLogined, userPassword) {
        var _this = this;
        return (0, jsx_runtime_1.jsx)(nav_1.NavView, { ref: function (nv) { return _this.navView = nv; }, onLogined: onLogined, notLogined: notLogined, userPassword: userPassword }, void 0);
    };
    /*
    setIsWebNav() {
        this.isWebNav = true;
        this.navView.backIcon = <i className="fa fa-arrow-left" />;
        this.navView.closeIcon = <i className="fa fa-close" />;
    }
    */
    // pageWebNav: PageWebNav;
    TonwaReact.prototype.showAppView = function (isUserLogin) {
        return __awaiter(this, void 0, void 0, function () {
            var onLogined;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        onLogined = this.navView.props.onLogined;
                        if (onLogined === undefined) {
                            this.navView.push((0, jsx_runtime_1.jsx)("div", { children: "NavView has no prop onLogined" }, void 0));
                            return [2 /*return*/];
                        }
                        this.nav.clear();
                        return [4 /*yield*/, onLogined(isUserLogin)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TonwaReact.prototype.privacyEntry = function () {
        if (!this.getPrivacyContent())
            return;
        return (0, jsx_runtime_1.jsx)("div", __assign({ className: "text-center" }, { children: (0, jsx_runtime_1.jsx)("button", __assign({ className: "btn btn-sm btn-link", onClick: this.showPrivacyPage }, { children: (0, jsx_runtime_1.jsx)("small", __assign({ className: "text-muted" }, { children: "\u9690\u79C1\u653F\u7B56" }), void 0) }), void 0) }), void 0);
    };
    TonwaReact.prototype.getPrivacyContent = function () {
        if (!this.navSettings)
            return;
        var privacy = this.navSettings.privacy;
        return privacy;
    };
    TonwaReact.prototype.showRegister = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                (0, login_1.showRegister)(this);
                return [2 /*return*/];
            });
        });
    };
    TonwaReact.prototype.showForget = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                (0, login_1.showForget)(this);
                return [2 /*return*/];
            });
        });
    };
    TonwaReact.prototype.showReloadPage = function (msg) {
        var seconds = -1;
        this.navView.push((0, jsx_runtime_1.jsx)(reloadPage_1.ReloadPage, { message: msg, seconds: seconds }, void 0));
    };
    TonwaReact.prototype.onError = function (fetchError) {
        return __awaiter(this, void 0, void 0, function () {
            var err, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        err = fetchError.error;
                        if (!(err !== undefined)) return [3 /*break*/, 6];
                        if (!(err.unauthorized === true)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.showLogin(undefined)];
                    case 1:
                        _b.sent();
                        //nav.navigateToLogin();
                        return [2 /*return*/];
                    case 2:
                        _a = err.type;
                        switch (_a) {
                            case 'unauthorized': return [3 /*break*/, 3];
                            case 'sheet-processing': return [3 /*break*/, 5];
                        }
                        return [3 /*break*/, 6];
                    case 3: return [4 /*yield*/, this.showLogin(undefined)];
                    case 4:
                        _b.sent();
                        //nav.navigateToLogin();
                        return [2 /*return*/];
                    case 5:
                        this.navView.push((0, jsx_runtime_1.jsx)(FetchErrorView_1.SystemNotifyPage, { message: "\u5355\u636E\u6B63\u5728\u5904\u7406\u4E2D\u3002\u8BF7\u91CD\u65B0\u64CD\u4F5C\uFF01" }, void 0));
                        return [2 /*return*/];
                    case 6:
                        this.navView.setState({
                            fetchError: fetchError,
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    TonwaReact.prototype.showUpgradeUq = function (uq, version) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.navView.show((0, jsx_runtime_1.jsx)(components_1.Page, __assign({ header: false }, { children: (0, jsx_runtime_1.jsxs)("div", { children: ["UQ\u5347\u7EA7\u4E86\uFF0C\u8BF7\u70B9\u51FB\u6309\u94AE\u5347\u7EA7 ", (0, jsx_runtime_1.jsx)("br", {}, void 0), (0, jsx_runtime_1.jsxs)("small", __assign({ className: "text-muted" }, { children: [uq, " ver-", version] }), void 0), (0, jsx_runtime_1.jsx)("button", __assign({ className: "btn btn-primary", onClick: this.upgradeUq }, { children: "\u5347\u7EA7" }), void 0)] }, void 0) }), void 0));
                return [2 /*return*/];
            });
        });
    };
    return TonwaReact;
}(tonwa_core_1.Tonwa));
exports.TonwaReact = TonwaReact;
//# sourceMappingURL=TonwaReact.js.map