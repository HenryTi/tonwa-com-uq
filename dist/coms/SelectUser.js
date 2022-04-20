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
exports.SelectUser = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var tonwa_com_1 = require("tonwa-com");
var tonwa_com_2 = require("tonwa-com");
var UqAppBase_1 = require("../UqAppBase");
var Image_1 = require("./Image");
function SelectUser(_a) {
    var _this = this;
    var header = _a.header;
    var nav = (0, tonwa_com_1.useNav)();
    var app = (0, UqAppBase_1.useUqAppBase)();
    var _b = (0, react_1.useState)(null), user = _b[0], setUser = _b[1];
    var onSearch = function (key) { return __awaiter(_this, void 0, void 0, function () {
        var retUser;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, app.userApi.userFromName(key)];
                case 1:
                    retUser = _a.sent();
                    setUser(retUser);
                    return [2 /*return*/];
            }
        });
    }); };
    var vContent;
    if (user === null) {
        vContent = null;
    }
    if (!user) {
        vContent = (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(tonwa_com_2.FA, { name: "info-o", className: "me-3 text-info" }, void 0), " No user"] }, void 0);
    }
    else {
        var name_1 = user.name, nick = user.nick, icon = user.icon;
        vContent = (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "d-flex" }, { children: [(0, jsx_runtime_1.jsx)(Image_1.Image, { src: icon, className: "me-4 w-2-5c h-2-5c" }, void 0), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(tonwa_com_1.MutedSmall, { children: "Name:" }, void 0), " \u00A0 ", name_1] }, void 0), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(tonwa_com_1.MutedSmall, { children: "Nick:" }, void 0), " \u00A0 ", nick] }, void 0)] }, void 0)] }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "text-center mt-5" }, { children: (0, jsx_runtime_1.jsx)("button", __assign({ className: "btn btn-primary", onClick: function () { return nav.returnCall(user); } }, { children: header }), void 0) }), void 0)] }, void 0);
    }
    return (0, jsx_runtime_1.jsx)(tonwa_com_1.Page, __assign({ header: header !== null && header !== void 0 ? header : 'Select user', back: "close" }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "p-3 d-flex align-items-center flex-column" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "mx-auto mb-3" }, { children: (0, jsx_runtime_1.jsx)(tonwa_com_1.SearchBox, { className: "w-min-20c", onFocus: function () { return setUser(null); }, onSearch: onSearch, placeholder: "user account" }, void 0) }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "border rounded-3 bg-white p-5 mx-auto w-min-20c" }, { children: vContent }), void 0)] }), void 0) }), void 0);
}
exports.SelectUser = SelectUser;
//# sourceMappingURL=SelectUser.js.map