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
exports.ForgetPassword = exports.RegisterPassword = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var tonwa_com_1 = require("tonwa-com");
var tonwa_com_2 = require("tonwa-com");
var tonwa_com_3 = require("tonwa-com");
var tonwa_com_4 = require("tonwa-com");
var UqAppBase_1 = require("../../UqAppBase");
var Success_1 = require("./Success");
function Password(_a) {
    var _this = this;
    var header = _a.header, submitCaption = _a.submitCaption, account = _a.account, onPasswordSubmit = _a.onPasswordSubmit;
    var nav = (0, tonwa_com_1.useNav)();
    var onButtonSubmit = function (values) { return __awaiter(_this, void 0, void 0, function () {
        var pwd, rePwd, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    pwd = values.pwd, rePwd = values.rePwd;
                    if (!(!pwd || pwd !== rePwd)) return [3 /*break*/, 1];
                    error = '密码错误，请重新输入密码！';
                    return [2 /*return*/, [['pwd', undefined], ['rePwd', undefined], ['pwd', error]]];
                case 1: return [4 /*yield*/, onPasswordSubmit(pwd)];
                case 2:
                    error = _a.sent();
                    if (error !== undefined) {
                        nav.open((0, jsx_runtime_1.jsx)(tonwa_com_1.UPage, __assign({ header: "\u6CE8\u518C\u4E0D\u6210\u529F" }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "p-5 text-danger" }, { children: error }), void 0) }), void 0));
                    }
                    _a.label = 3;
                case 3: return [2 /*return*/, error];
            }
        });
    }); };
    /*
    let onEnter = async (name: string, context: Context): Promise<string> => {
        if (name === 'rePwd') {
            return await onButtonSubmit('submit', context);
        }
    }
    */
    return (0, jsx_runtime_1.jsx)(tonwa_com_1.UPage, __assign({ header: header }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "w-max-20c my-5 py-5", style: { marginLeft: 'auto', marginRight: 'auto' } }, { children: ["\u6CE8\u518C\u8D26\u53F7", (0, jsx_runtime_1.jsx)("br", {}, void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "py-2 px-3 my-2 text-primary bg-light" }, { children: (0, jsx_runtime_1.jsx)("b", { children: account }, void 0) }), void 0), (0, jsx_runtime_1.jsx)("div", { className: "h-1c" }, void 0), (0, jsx_runtime_1.jsxs)(tonwa_com_4.Form, { children: [(0, jsx_runtime_1.jsx)(tonwa_com_3.BandPassword, { name: "pwd", label: "\u5BC6\u7801", placeholder: "\u5BC6\u7801", maxLength: 100 }, void 0), (0, jsx_runtime_1.jsx)(tonwa_com_3.BandPassword, { name: "rePwd", label: "\u91CD\u590D\u5BC6\u7801", placeholder: "\u91CD\u590D\u5BC6\u7801", maxLength: 100 }, void 0), (0, jsx_runtime_1.jsx)(tonwa_com_2.Band, __assign({ contentContainerClassName: "mt-3" }, { children: (0, jsx_runtime_1.jsx)(tonwa_com_4.Submit, __assign({ onSubmit: onButtonSubmit }, { children: submitCaption }), void 0) }), void 0)] }, void 0)] }), void 0) }), void 0);
}
;
function RegisterPassword(_a) {
    var _this = this;
    var pass = _a.pass;
    var nav = (0, tonwa_com_1.useNav)();
    var userApi = (0, UqAppBase_1.useUqAppBase)().userApi;
    var type = pass.type, account = pass.account, verify = pass.verify;
    var onPasswordSubmit = function (pwd) { return __awaiter(_this, void 0, void 0, function () {
        var params, ret, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    pass.password = pwd;
                    params = {
                        nick: undefined,
                        user: account,
                        pwd: pwd,
                        country: undefined,
                        mobile: undefined,
                        mobileCountry: undefined,
                        email: undefined,
                        verify: verify
                    };
                    switch (type) {
                        case 'mobile':
                            params.mobile = Number(account);
                            params.mobileCountry = 86;
                            break;
                        case 'email':
                            params.email = account;
                            break;
                    }
                    return [4 /*yield*/, userApi.register(params)];
                case 1:
                    ret = _a.sent();
                    if (ret === 0) {
                        nav.clear();
                        nav.open((0, jsx_runtime_1.jsx)(Success_1.RegisterSuccess, { pass: pass }, void 0));
                        return [2 /*return*/];
                    }
                    error = regReturn(ret);
                    return [2 /*return*/, error];
            }
        });
    }); };
    function regReturn(registerReturn) {
        var msg;
        switch (registerReturn) {
            default: return '服务器发生错误';
            case 4: return '验证码错误';
            case 0: return;
            case 1:
                msg = '用户名 ' + account;
                break;
            case 2:
                msg = '手机号 +' + account;
                break;
            case 3:
                msg = '邮箱 ' + account;
                break;
        }
        return msg + ' 已经被注册过了';
    }
    return (0, jsx_runtime_1.jsx)(Password, { header: "\u6CE8\u518C\u8D26\u53F7", submitCaption: "\u6CE8\u518C\u65B0\u8D26\u53F7", account: account, onPasswordSubmit: onPasswordSubmit }, void 0);
}
exports.RegisterPassword = RegisterPassword;
function ForgetPassword(_a) {
    var _this = this;
    var pass = _a.pass;
    var nav = (0, tonwa_com_1.useNav)();
    var userApi = (0, UqAppBase_1.useUqAppBase)().userApi;
    var account = pass.account, password = pass.password, verify = pass.verify, type = pass.type;
    var onPasswordSubmit = function (pwd) { return __awaiter(_this, void 0, void 0, function () {
        var ret, err;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    pass.password = pwd;
                    return [4 /*yield*/, userApi.resetPassword(account, password, verify, type)];
                case 1:
                    ret = _a.sent();
                    if (ret.length === 0) {
                        err = 'something wrong in reseting password';
                        console.log(err);
                        throw err;
                    }
                    nav.clear();
                    nav.open((0, jsx_runtime_1.jsx)(Success_1.ForgetSuccess, { pass: pass }, void 0));
                    return [2 /*return*/];
            }
        });
    }); };
    return (0, jsx_runtime_1.jsx)(Password, { header: "\u8D26\u53F7\u5BC6\u7801", submitCaption: "\u6539\u5BC6\u7801", account: account, onPasswordSubmit: onPasswordSubmit }, void 0);
}
exports.ForgetPassword = ForgetPassword;
//# sourceMappingURL=Password.js.map