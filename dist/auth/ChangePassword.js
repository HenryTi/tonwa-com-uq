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
exports.ChangePassword = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var tonwa_com_1 = require("tonwa-com");
var tonwa_com_2 = require("tonwa-com");
var tonwa_com_3 = require("tonwa-com");
var tonwa_com_4 = require("tonwa-com");
var UqAppBase_1 = require("../UqAppBase");
//type OnChange = (orgPassword: string, newPassword: string) => Promise<boolean>;
function ChangePassword() {
    var _this = this;
    var nav = (0, tonwa_com_1.useNav)();
    var uqApp = (0, UqAppBase_1.useUqAppBase)();
    var onSubmit = function (data) { return __awaiter(_this, void 0, void 0, function () {
        var orgPassword, newPassword, newPassword1, ret;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    orgPassword = data.orgPassword, newPassword = data.newPassword, newPassword1 = data.newPassword1;
                    if (newPassword !== newPassword1) {
                        return [2 /*return*/, ['newPassword1', '新密码错误，请重新输入']];
                    }
                    return [4 /*yield*/, uqApp.userApi.changePassword({ orgPassword: orgPassword, newPassword: newPassword })];
                case 1:
                    ret = _a.sent();
                    if (ret === false) {
                        return [2 /*return*/, ['orgPassword', '原密码错误']];
                    }
                    nav.close();
                    nav.open((0, jsx_runtime_1.jsx)(tonwa_com_1.UPage, __assign({ header: "\u4FEE\u6539\u5BC6\u7801", back: "close" }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "m-3  text-success" }, { children: "\u5BC6\u7801\u4FEE\u6539\u6210\u529F\uFF01" }), void 0) }), void 0));
                    return [2 /*return*/];
            }
        });
    }); };
    return (0, jsx_runtime_1.jsx)(tonwa_com_1.UPage, __assign({ header: "\u4FEE\u6539\u5BC6\u7801" }, { children: (0, jsx_runtime_1.jsxs)(tonwa_com_4.Form, __assign({ className: "m-3 w-30c mx-auto", BandTemplate: tonwa_com_4.FormBandTemplate1 }, { children: [(0, jsx_runtime_1.jsx)(tonwa_com_3.BandPassword, { name: "orgPassword", label: "\u539F\u5BC6\u7801", placeholder: "\u8F93\u5165\u539F\u6765\u7684\u5BC6\u7801", maxLength: 60 }, void 0), (0, jsx_runtime_1.jsx)(tonwa_com_3.BandPassword, { name: "newPassword", label: "\u65B0\u5BC6\u7801", placeholder: "\u8F93\u5165\u65B0\u8BBE\u7684\u5BC6\u7801", maxLength: 60 }, void 0), (0, jsx_runtime_1.jsx)(tonwa_com_3.BandPassword, { name: "newPassword1", label: "\u786E\u8BA4\u5BC6\u7801", placeholder: "\u518D\u6B21\u8F93\u5165\u65B0\u8BBE\u5BC6\u7801", maxLength: 60 }, void 0), (0, jsx_runtime_1.jsx)(tonwa_com_2.Band, { children: (0, jsx_runtime_1.jsx)(tonwa_com_4.FormErrors, {}, void 0) }, void 0), (0, jsx_runtime_1.jsx)(tonwa_com_2.Band, { children: (0, jsx_runtime_1.jsx)(tonwa_com_4.Submit, __assign({ onSubmit: onSubmit }, { children: "\u63D0\u4EA4" }), void 0) }, void 0)] }), void 0) }), void 0);
}
exports.ChangePassword = ChangePassword;
//# sourceMappingURL=ChangePassword.js.map