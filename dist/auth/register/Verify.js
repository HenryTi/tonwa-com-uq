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
exports.Verify = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var tonwa_com_1 = require("tonwa-com");
var tonwa_com_2 = require("tonwa-com");
var tonwa_com_3 = require("tonwa-com");
var tonwa_com_4 = require("tonwa-com");
var tonwa_com_5 = require("tonwa-com");
function Verify(_a) {
    var _this = this;
    var pass = _a.pass, onVerify = _a.onVerify;
    var type = pass.type, account = pass.account;
    var onSubmit = function (values) { return __awaiter(_this, void 0, void 0, function () {
        var verify, ret;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    verify = values['verify'];
                    return [4 /*yield*/, onVerify(verify)];
                case 1:
                    ret = _a.sent();
                    if (ret === 0) {
                        return [2 /*return*/, [['verify', '验证码错误']]];
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    function onValuesChanged(_a, context) {
        var name = _a.name, value = _a.value;
        return __awaiter(this, void 0, void 0, function () {
            var field;
            return __generator(this, function (_b) {
                field = context.fields['submit'];
                if (field) {
                    context.setDisabled('submit', value.length > 0);
                }
                return [2 /*return*/];
            });
        });
    }
    var typeText, extra;
    switch (type) {
        case 'mobile':
            typeText = '手机号';
            break;
        case 'email':
            typeText = '邮箱';
            extra = (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("span", __assign({ className: "text-danger" }, { children: "\u6CE8\u610F" }), void 0), ": \u6709\u53EF\u80FD\u8BEF\u4E3A\u5783\u573E\u90AE\u4EF6\uFF0C\u8BF7\u68C0\u67E5", (0, jsx_runtime_1.jsx)("br", {}, void 0)] }, void 0);
            break;
    }
    return (0, jsx_runtime_1.jsx)(tonwa_com_1.Page, __assign({ header: "\u9A8C\u8BC1\u7801" }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "w-max-20c my-5 py-5", style: { marginLeft: 'auto', marginRight: 'auto' } }, { children: ["\u9A8C\u8BC1\u7801\u5DF2\u7ECF\u53D1\u9001\u5230", typeText, (0, jsx_runtime_1.jsx)("br", {}, void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "py-2 px-3 my-2 text-primary bg-light" }, { children: (0, jsx_runtime_1.jsx)("b", { children: account }, void 0) }), void 0), extra, (0, jsx_runtime_1.jsx)("div", { className: "h-1c" }, void 0), (0, jsx_runtime_1.jsxs)(tonwa_com_2.Form, __assign({ onValuesChanged: onValuesChanged }, { children: [(0, jsx_runtime_1.jsx)(tonwa_com_2.BandInt, { name: "verify", label: "\u9A8C\u8BC1\u7801", placeholder: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801", maxLength: 6, rule: tonwa_com_3.ruleIsRequired }, void 0), (0, jsx_runtime_1.jsx)(tonwa_com_4.Band, { children: (0, jsx_runtime_1.jsxs)(tonwa_com_5.Submit, __assign({ name: "submit", disabled: true, onSubmit: onSubmit }, { children: ["\u4E0B\u4E00\u6B65 ", '>'] }), void 0) }, void 0)] }), void 0)] }), void 0) }), void 0);
}
exports.Verify = Verify;
//# sourceMappingURL=Verify.js.map