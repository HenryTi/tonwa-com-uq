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
exports.UserQuit = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var tonwa_com_1 = require("tonwa-com");
var UqAppBase_1 = require("../UqAppBase");
var waitingTime = '一小时';
function Quit(_a) {
    var header = _a.header, back = _a.back, note = _a.note, children = _a.children;
    return (0, jsx_runtime_1.jsx)(tonwa_com_1.Page, __assign({ header: header !== null && header !== void 0 ? header : '注销账号', back: back }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "border border-danger rounded mx-auto m-3 w-max-30c bg-white " }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "p-4 border-bottom" }, { children: note }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "p-3 text-center" }, { children: children }), void 0)] }), void 0) }), void 0);
}
function Button1(_a) {
    var caption = _a.caption, onClick = _a.onClick;
    return (0, jsx_runtime_1.jsx)("button", __assign({ className: "btn btn-primary", onClick: onClick }, { children: caption !== null && caption !== void 0 ? caption : '不注销' }), void 0);
}
function Button2(_a) {
    var caption = _a.caption, onClick = _a.onClick;
    return (0, jsx_runtime_1.jsx)("button", __assign({ className: "btn btn-outline-info ms-3", onClick: onClick }, { children: caption !== null && caption !== void 0 ? caption : '确认注销' }), void 0);
}
/*
abstract class VUserQuitBase extends VPage<CLogin> {
    protected abstract get note(): any;
    protected get button1Caption(): string { return undefined; }
    protected get button2Caption(): string { return undefined; }
    protected renderButton1(): JSX.Element {
        let caption = this.button1Caption;
        if (caption === null) return null;
        return <button className="btn btn-primary" onClick={() => this.onClickButton1()}>
            {caption ?? '不注销'}
        </button>;
    }
    protected renderButton2(): JSX.Element {
        let caption = this.button2Caption;
        if (caption === null) return null;
        return <button className="btn btn-outline-info ms-3" onClick={() => this.onClickButton2()}>
            {caption ?? '确认注销'}
        </button>;
    }
    header() { return '注销账号' }
    content() {
        return <div className="border border-danger rounded mx-auto m-3 w-max-30c bg-white ">
            <div className="p-4 border-bottom">{this.note}</div>
            <div className="p-3 text-center">
                {this.renderButton1()}
                {this.renderButton2()}
            </div>
        </div>
    }

    protected onClickButton1() {
        this.closePage();
    }

    protected onClickButton2() {
    }
}
*/
function UserQuit() {
    var nav = (0, tonwa_com_1.useNav)();
    var note = (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: ["\u6CE8\u610F\uFF1A\u8D26\u53F7\u6CE8\u9500\u540E\uFF0C\u8D26\u53F7\u7ED1\u5B9A\u624B\u673A\u3001\u90AE\u4EF6\u7B49\u76F8\u5173\u4FE1\u606F\u5C06\u88AB\u91CA\u653E\u3002\u8D26\u53F7\u65E0\u6CD5\u5C06\u767B\u5F55\u3002", (0, jsx_runtime_1.jsx)("br", {}, void 0), "\u8BF7\u786E\u8BA4\uFF01"] }, void 0);
    return (0, jsx_runtime_1.jsxs)(Quit, __assign({ note: note }, { children: [(0, jsx_runtime_1.jsx)(Button1, { onClick: function () { return nav.close(); } }, void 0), (0, jsx_runtime_1.jsx)(Button2, { onClick: function () { return nav.open((0, jsx_runtime_1.jsx)(QuitConfirm, {}, void 0)); }, caption: "\u6211\u5DF2\u4E86\u89E3\uFF0C\u4ECD\u7136\u6CE8\u9500" }, void 0)] }), void 0);
}
exports.UserQuit = UserQuit;
function QuitConfirm() {
    var _this = this;
    var nav = (0, tonwa_com_1.useNav)();
    var uqApp = (0, UqAppBase_1.useUqAppBase)();
    var note = (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: ["\u8D26\u53F7\u6CE8\u9500\u540E\uFF0C\u5982\u679C\u5728", waitingTime, "\u5185\u5BB9\u91CD\u65B0\u767B\u5F55\u8D26\u53F7\uFF0C\u8D26\u53F7\u81EA\u52A8\u6062\u590D\u3002", waitingTime, "\u4E4B\u540E\uFF0C\u8D26\u53F7\u7ED1\u5B9A\u624B\u673A\u3001\u90AE\u4EF6\u7B49\u76F8\u5173\u4FE1\u606F\u5C06\u88AB\u91CA\u653E\u3002\u8D26\u53F7\u65E0\u6CD5\u5C06\u767B\u5F55\u3002", (0, jsx_runtime_1.jsx)("br", {}, void 0), "\u8BF7\u518D\u6B21\u786E\u8BA4\uFF01"] }, void 0);
    var onClickButton2 = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, uqApp.userApi.userQuit()];
                case 1:
                    _a.sent();
                    //let centerAppApi = new CenterAppApi(this.controller.net, 'tv/');
                    //await centerAppApi.userQuit();
                    nav.open((0, jsx_runtime_1.jsx)(QuitDone, {}, void 0));
                    return [2 /*return*/];
            }
        });
    }); };
    return (0, jsx_runtime_1.jsxs)(Quit, __assign({ note: note }, { children: [(0, jsx_runtime_1.jsx)(Button1, { onClick: function () { return nav.close(2); } }, void 0), (0, jsx_runtime_1.jsx)(Button2, { onClick: onClickButton2, caption: "\u786E\u8BA4\u6CE8\u9500" }, void 0)] }), void 0);
}
function QuitDone() {
    var uqApp = (0, UqAppBase_1.useUqAppBase)();
    var note = (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: ["\u8D26\u53F7\u5C06\u5728", waitingTime, "\u540E\u5F7B\u5E95\u6CE8\u9500\u3002", (0, jsx_runtime_1.jsx)("br", {}, void 0), "\u5982\u679C\u5728", waitingTime, "\u5185\u5BB9\u91CD\u65B0\u767B\u5F55\u8D26\u53F7\uFF0C\u6CE8\u9500\u64CD\u4F5C\u81EA\u52A8\u53D6\u6D88\u3002", waitingTime, "\u4E4B\u540E\uFF0C\u8D26\u53F7\u7ED1\u5B9A\u624B\u673A\u3001\u90AE\u4EF6\u7B49\u76F8\u5173\u4FE1\u606F\u5C06\u88AB\u91CA\u653E\u3002\u8D26\u53F7\u65E0\u6CD5\u5C06\u767B\u5F55\u3002"] }, void 0);
    var onClickButton1 = function () {
        uqApp.logined(undefined);
    };
    return (0, jsx_runtime_1.jsx)(Quit, __assign({ header: "\u6CE8\u9500\u5DF2\u8D26\u53F7", note: note, back: "none" }, { children: (0, jsx_runtime_1.jsx)(Button1, { onClick: onClickButton1, caption: "\u9000\u51FA" }, void 0) }), void 0);
}
//# sourceMappingURL=UserQuit.js.map