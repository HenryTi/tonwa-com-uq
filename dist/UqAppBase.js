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
exports.UqAppBaseView = exports.useUqAppBase = exports.UqAppContext = exports.UqAppBase = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var tonwa_com_1 = require("tonwa-com");
var tonwa_uq_1 = require("tonwa-uq");
var tonwa_uq_2 = require("tonwa-uq");
var uq_1 = require("./uq");
var tonwa_com_2 = require("tonwa-com");
var valtio_1 = require("valtio");
var tonwa_com_3 = require("tonwa-com");
var tonwa_com_4 = require("tonwa-com");
var tonwa_com_5 = require("tonwa-com");
var uqAppId = 1;
var UqAppBase = /** @class */ (function () {
    function UqAppBase(appConfig, uqConfigs) {
        //private uqsUserId: number = -1;
        this.initCalled = false;
        this.uqAppBaseId = uqAppId++;
        this.appConfig = appConfig;
        this.uqConfigs = uqConfigs;
        this.version = appConfig.version;
        this.responsive = (0, valtio_1.proxy)({
            user: undefined,
        });
        var props = {
            center: appConfig.center,
            debug: appConfig.debug,
            unit: tonwa_com_2.env.unit,
            testing: tonwa_com_2.env.testing,
            localDb: new LocalStorageDb(),
            createObservableMap: function () { return new Map(); }, //new ObservableMap(),
        };
        this.net = new tonwa_uq_2.Net(props);
        this.localData = new tonwa_com_2.LocalData();
        this.appNav = new tonwa_com_1.AppNav();
        this.userApi = this.net.userApi;
    }
    UqAppBase.prototype.logined = function (user) {
        this.net.logoutApis();
        this.responsive.user = user;
        this.appNav.onLoginChanged(true);
        if (user) {
            this.net.setCenterToken(user.id, user.token);
        }
        else {
            this.net.clearCenterToken();
        }
        this.localData.user.set(user);
    };
    UqAppBase.prototype.setUserProp = function (propName, value) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userApi.userSetProp(propName, value)];
                    case 1:
                        _a.sent();
                        user = this.responsive.user;
                        user[propName] = value;
                        this.localData.user.set(user);
                        return [2 /*return*/];
                }
            });
        });
    };
    UqAppBase.prototype.saveLocalData = function () {
        this.localData.saveToLocalStorage();
    };
    UqAppBase.prototype.onInited = function () {
        return;
    };
    UqAppBase.prototype.init = function (initPage, navigateFunc) {
        return __awaiter(this, void 0, void 0, function () {
            var user, guest, version, uqsLoader, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.initCalled === true)
                            return [2 /*return*/];
                        this.initCalled = true;
                        //if (this.responsive.user?.id === this.uqsUserId) return;
                        return [4 /*yield*/, this.net.init()];
                    case 1:
                        //if (this.responsive.user?.id === this.uqsUserId) return;
                        _b.sent();
                        user = this.localData.user.get();
                        if (!user) return [3 /*break*/, 2];
                        this.logined(user);
                        return [3 /*break*/, 5];
                    case 2:
                        guest = this.localData.guest.get();
                        if (!(guest === undefined)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.net.userApi.guest()];
                    case 3:
                        guest = _b.sent();
                        _b.label = 4;
                    case 4:
                        if (!guest) {
                            debugger;
                            throw Error('guest can not be undefined');
                        }
                        this.net.setCenterToken(0, guest.token);
                        this.localData.guest.set(guest);
                        _b.label = 5;
                    case 5:
                        version = this.appConfig.version;
                        uqsLoader = new tonwa_uq_2.UQsLoader(this.net, version, this.uqConfigs);
                        _a = this;
                        return [4 /*yield*/, uqsLoader.build()];
                    case 6:
                        _a.initErrors = _b.sent();
                        this.uqs = (0, uq_1.uqsProxy)(uqsLoader.uqsMan); //  this.uqsMan.proxy;
                        if (!!this.initErrors) return [3 /*break*/, 8];
                        this.appNav.init(initPage, navigateFunc);
                        return [4 /*yield*/, this.onInited()];
                    case 7:
                        _b.sent();
                        _b.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    return UqAppBase;
}());
exports.UqAppBase = UqAppBase;
var LocalStorageDb = /** @class */ (function (_super) {
    __extends(LocalStorageDb, _super);
    function LocalStorageDb() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LocalStorageDb.prototype.getItem = function (key) {
        return localStorage.getItem(key);
    };
    LocalStorageDb.prototype.setItem = function (key, value) {
        localStorage.setItem(key, value);
    };
    LocalStorageDb.prototype.removeItem = function (key) {
        localStorage.removeItem(key);
    };
    return LocalStorageDb;
}(tonwa_uq_1.LocalDb));
exports.UqAppContext = react_1.default.createContext(undefined);
function useUqAppBase() {
    return (0, react_1.useContext)(exports.UqAppContext);
}
exports.useUqAppBase = useUqAppBase;
function UqAppBaseView(_a) {
    var uqApp = _a.uqApp, children = _a.children;
    var appNav = uqApp.appNav;
    var _b = (0, react_1.useState)(false), appInited = _b[0], setAppInited = _b[1];
    var stack = (0, valtio_1.useSnapshot)(appNav.data).stack;
    var navigateFunc = (0, react_router_dom_1.useNavigate)();
    (0, react_1.useEffect)(function () {
        function appInit() {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, uqApp.init(children, navigateFunc)];
                        case 1:
                            _a.sent();
                            setAppInited(true);
                            return [2 /*return*/];
                    }
                });
            });
        }
        appInit();
    }, [uqApp, children, navigateFunc]);
    if (appInited === false) {
        return (0, jsx_runtime_1.jsx)("div", __assign({ className: "p-5 text-center" }, { children: (0, jsx_runtime_1.jsx)(tonwa_com_3.Spinner, { className: "text-info" }, void 0) }), void 0);
    }
    if (uqApp.initErrors) {
        return (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", { children: "uq app start failed. init errors: " }, void 0), (0, jsx_runtime_1.jsx)("ul", __assign({ className: "text-danger" }, { children: uqApp.initErrors.map(function (v, index) { return (0, jsx_runtime_1.jsx)("li", { children: v }, index); }) }), void 0)] }, void 0);
    }
    return (0, jsx_runtime_1.jsx)(exports.UqAppContext.Provider, __assign({ value: uqApp }, { children: (0, jsx_runtime_1.jsx)(tonwa_com_4.AppNavContext.Provider, __assign({ value: appNav }, { children: (0, jsx_runtime_1.jsx)(tonwa_com_5.StackContainer, { stackItems: stack }, void 0) }), void 0) }), void 0);
}
exports.UqAppBaseView = UqAppBaseView;
//# sourceMappingURL=UqAppBase.js.map