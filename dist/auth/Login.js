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
exports.Login = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var tonwa_com_1 = require("tonwa-com");
var tonwa_com_2 = require("tonwa-com");
var tonwa_com_3 = require("tonwa-com");
var tonwa_com_4 = require("tonwa-com");
var tonwa_com_5 = require("tonwa-com");
var tonwa_com_6 = require("tonwa-com");
var tonwa_com_7 = require("tonwa-com");
var tonwa_com_8 = require("tonwa-com");
var UqAppBase_1 = require("../UqAppBase");
var Register_1 = require("./register/Register");
var tools_1 = require("./tools");
function Login(_a) {
    var _this = this;
    var withBack = _a.withBack, loginTop = _a.loginTop, privacy = _a.privacy, callback = _a.callback;
    var nav = (0, tonwa_com_1.useNav)();
    var uqApp = (0, UqAppBase_1.useUqAppBase)();
    var userApi = uqApp.userApi, guest = uqApp.guest;
    var onLogin = function (un, pwd) { return __awaiter(_this, void 0, void 0, function () {
        var user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userApi.login({
                        user: un,
                        pwd: pwd,
                        guest: guest,
                    })];
                case 1:
                    user = _a.sent();
                    if (user === undefined)
                        return [2 /*return*/, false];
                    console.log("onLoginSubmit: user=%s pwd:%s", user.name, user.token);
                    uqApp.logined(user);
                    return [4 /*yield*/, (callback === null || callback === void 0 ? void 0 : callback(user))];
                case 2:
                    _a.sent();
                    return [2 /*return*/, true];
            }
        });
    }); };
    var onSubmit = function (values) { return __awaiter(_this, void 0, void 0, function () {
        var un, pwd, ret, sender, type;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    un = values['username'];
                    pwd = values['password'];
                    if (pwd === undefined) {
                        return [2 /*return*/, 'something wrong, pwd is undefined'];
                    }
                    return [4 /*yield*/, onLogin(un, pwd)];
                case 1:
                    ret = _a.sent();
                    if (ret === true)
                        return [2 /*return*/];
                    sender = (0, tools_1.getSender)(un);
                    type = sender !== undefined ? sender.caption : '用户名';
                    return [2 /*return*/, type + '或密码错！'];
            }
        });
    }); };
    /*
    let onEnter = async (name: string, context: Context): Promise<string> => {
        if (name === 'password') {
            return await onSubmit('login', context);
        }
    }
    */
    var header = withBack === true ? '登录' : false;
    return (0, jsx_runtime_1.jsx)(tonwa_com_1.UPage, __assign({ header: header, footer: privacy }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "d-flex p-5 flex-column justify-content-center align-items-center" }, { children: [(0, jsx_runtime_1.jsx)("div", { className: "flex-fill" }, void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "w-20c" }, { children: [loginTop !== null && loginTop !== void 0 ? loginTop : (0, jsx_runtime_1.jsx)("div", __assign({ className: "text-center p-3 fs-5 text-primary" }, { children: "\u767B\u5F55" }), void 0), (0, jsx_runtime_1.jsx)("div", { className: "h-2c" }, void 0), (0, jsx_runtime_1.jsxs)(tonwa_com_2.Form, __assign({ BandTemplate: tonwa_com_6.FormBandTemplate1 }, { children: [(0, jsx_runtime_1.jsx)(tonwa_com_3.BandString, { label: "\u767B\u5F55\u8D26\u53F7", name: "username", placeholder: "\u624B\u673A/\u90AE\u7BB1/\u7528\u6237\u540D", rule: tonwa_com_3.ruleIsRequired, maxLength: 100 }, void 0), (0, jsx_runtime_1.jsx)(tonwa_com_5.BandPassword, { label: "\u5BC6\u7801", name: "password", placeholder: "\u5BC6\u7801", rule: tonwa_com_3.ruleIsRequired, maxLength: 100 }, void 0), (0, jsx_runtime_1.jsx)(tonwa_com_7.Band, { children: (0, jsx_runtime_1.jsx)(tonwa_com_8.FormErrors, {}, void 0) }, void 0), (0, jsx_runtime_1.jsx)(tonwa_com_7.Band, __assign({ contentContainerClassName: "text-center my-3" }, { children: (0, jsx_runtime_1.jsx)(tonwa_com_4.Submit, __assign({ onSubmit: onSubmit }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: 'mx-5' }, { children: "\u767B\u5F55" }), void 0) }), void 0) }), void 0)] }), void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "text-center" }, { children: [(0, jsx_runtime_1.jsx)("button", __assign({ className: "btn btn-link", onClick: function () { return nav.open((0, jsx_runtime_1.jsx)(Register_1.Forget, { loginTop: loginTop, privacy: privacy }, void 0)); } }, { children: "\u5FD8\u8BB0\u5BC6\u7801" }), void 0), (0, jsx_runtime_1.jsx)("button", __assign({ className: "btn btn-link", onClick: function () { return nav.open((0, jsx_runtime_1.jsx)(Register_1.Register, { loginTop: loginTop, privacy: privacy }, void 0)); } }, { children: "\u6CE8\u518C\u8D26\u53F7" }), void 0)] }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)("div", { className: "flex-fill" }, void 0), (0, jsx_runtime_1.jsx)("div", { className: "flex-fill" }, void 0)] }), void 0) }), void 0);
}
exports.Login = Login;
//# sourceMappingURL=Login.js.map