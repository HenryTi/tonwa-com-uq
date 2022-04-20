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
exports.Forget = exports.Register = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var tonwa_com_1 = require("tonwa-com");
var tools_1 = require("../tools");
var Verify_1 = require("./Verify");
var Password_1 = require("./Password");
var Login_1 = require("../Login");
var UqAppBase_1 = require("../../UqAppBase");
var tonwa_com_2 = require("tonwa-com");
var tonwa_com_3 = require("tonwa-com");
var tonwa_com_4 = require("tonwa-com");
function RegisterPageBase(_a) {
    var _this = this;
    var header = _a.header, accountLable = _a.accountLable, privacy = _a.privacy, loginTop = _a.loginTop, Password = _a.Password, accountError = _a.accountError, sendVerifyOem = _a.sendVerifyOem;
    var nav = (0, tonwa_com_1.useNav)();
    var userApi = (0, UqAppBase_1.useUqAppBase)().userApi;
    var pass = (0, react_1.useRef)({}).current;
    function onValuesChanged(_a, context) {
        var name = _a.name, value = _a.value;
        return __awaiter(this, void 0, void 0, function () {
            var field;
            return __generator(this, function (_b) {
                field = context.fields['submit'];
                if (field) {
                    context.setDisabled('submit', value.length < 6);
                }
                return [2 /*return*/];
            });
        });
    }
    var onSubmit = function (values) { return __awaiter(_this, void 0, void 0, function () {
        var user, value, sender, type, account, ret, error, onVerify;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    user = 'user';
                    value = values[user];
                    sender = (0, tools_1.getSender)(value);
                    if (sender === undefined) {
                        return [2 /*return*/, [undefined, [user, '必须是手机号或邮箱']]];
                    }
                    type = sender.type;
                    if (type === 'mobile') {
                        if (value.length !== 11 || value[0] !== '1') {
                            return [2 /*return*/, [undefined, [user, '请输入正确的手机号']]];
                        }
                    }
                    account = value;
                    return [4 /*yield*/, userApi.isExists(account)];
                case 1:
                    ret = _a.sent();
                    error = accountError(ret);
                    if (error !== undefined)
                        return [2 /*return*/, error];
                    return [4 /*yield*/, userApi.sendVerify(account, type, sendVerifyOem)];
                case 2:
                    ret = _a.sent();
                    if (ret !== undefined) {
                        return [2 /*return*/, [undefined, [user, ret]]];
                    }
                    onVerify = function (verify) { return __awaiter(_this, void 0, void 0, function () {
                        var ret;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    pass.verify = verify;
                                    return [4 /*yield*/, userApi.checkVerify(account, verify)];
                                case 1:
                                    ret = _a.sent();
                                    if (ret === 0)
                                        return [2 /*return*/, ret];
                                    nav.open((0, jsx_runtime_1.jsx)(Password, { pass: pass }, void 0));
                                    return [2 /*return*/];
                            }
                        });
                    }); };
                    nav.open((0, jsx_runtime_1.jsx)(Verify_1.Verify, { onVerify: onVerify, pass: pass }, void 0));
                    return [2 /*return*/];
            }
        });
    }); };
    /*
        let onEnter = async (name: string, context: Context): Promise<string> => {
            if (name === 'user') {
                return await onSubmit('verify', context);
            }
        }
    */
    function onToLogin(evt) {
        evt.preventDefault();
        nav.open((0, jsx_runtime_1.jsx)(Login_1.Login, { loginTop: loginTop, privacy: privacy }, void 0));
    }
    return (0, jsx_runtime_1.jsx)(tonwa_com_1.UPage, __assign({ header: header, footer: privacy }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "d-grid" }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "d-grid w-20c my-5 py-5", style: { marginLeft: 'auto', marginRight: 'auto' } }, { children: [loginTop !== null && loginTop !== void 0 ? loginTop : (0, jsx_runtime_1.jsx)("div", __assign({ className: "text-center p-3 fs-5 text-primary" }, { children: "\u6CE8\u518C" }), void 0), (0, jsx_runtime_1.jsx)("div", { className: "h-3c" }, void 0), (0, jsx_runtime_1.jsxs)(tonwa_com_4.Form, __assign({ BandTemplate: tonwa_com_4.FormBandTemplate1, onValuesChanged: onValuesChanged }, { children: [(0, jsx_runtime_1.jsx)(tonwa_com_2.BandString, { name: "user", label: accountLable, placeholder: "\u624B\u673A\u53F7\u6216\u90AE\u7BB1" }, void 0), (0, jsx_runtime_1.jsx)(tonwa_com_3.Band, __assign({ contentContainerClassName: 'mt-3 d-flex justify-content-center' }, { children: (0, jsx_runtime_1.jsx)(tonwa_com_4.Submit, __assign({ name: "submit", onSubmit: onSubmit, disabled: true }, { children: "\u53D1\u9001\u9A8C\u8BC1\u7801" }), void 0) }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "text-center py-3" }, { children: (0, jsx_runtime_1.jsx)("a", __assign({ href: "/#", className: "text-primary", onClick: onToLogin }, { children: "\u5DF2\u6709\u8D26\u53F7\uFF0C\u76F4\u63A5\u767B\u5F55" }), void 0) }), void 0)] }), void 0) }), void 0) }), void 0);
}
function Register(props) {
    var loginTop = props.loginTop, privacy = props.privacy;
    var accountError = function (isExists) {
        if (isExists > 0)
            return '已经被注册使用了';
    };
    return (0, jsx_runtime_1.jsx)(RegisterPageBase, { header: "\u6CE8\u518C\u8D26\u53F7", accountLable: "\u8D26\u53F7", Password: Password_1.RegisterPassword, accountError: accountError, sendVerifyOem: undefined, loginTop: loginTop, privacy: privacy }, void 0);
}
exports.Register = Register;
function Forget(props) {
    var loginTop = props.loginTop, privacy = props.privacy;
    var accountError = function (isExists) {
        if (isExists === 0)
            return '请输入正确的账号';
    };
    return (0, jsx_runtime_1.jsx)(RegisterPageBase, { header: "\u5BC6\u7801\u627E\u56DE", accountLable: "\u8D26\u53F7", Password: Password_1.ForgetPassword, accountError: accountError, sendVerifyOem: undefined, loginTop: loginTop, privacy: privacy }, void 0);
}
exports.Forget = Forget;
//# sourceMappingURL=Register.js.map