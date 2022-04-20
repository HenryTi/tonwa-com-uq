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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logout = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var tonwa_com_1 = require("tonwa-com");
var UqAppBase_1 = require("../UqAppBase");
function Logout(_a) {
    var onLogout = _a.onLogout, resetAll = _a.resetAll;
    var nav = (0, tonwa_com_1.useNav)();
    var uqApp = (0, UqAppBase_1.useUqAppBase)();
    // let header = this.isWebNav === true ? false : '安全退出';
    function onClickLogout() {
        nav.close();
        nav.appNav.onLoginChanged(false);
        uqApp.logined(undefined);
        onLogout === null || onLogout === void 0 ? void 0 : onLogout();
        document.location.reload();
    }
    var header = '安全退出';
    var footer = (0, jsx_runtime_1.jsx)("div", __assign({ className: "mt-5 text-center justify-content-center" }, { children: (0, jsx_runtime_1.jsx)("button", __assign({ className: "btn btn-outline-warning", onClick: resetAll }, { children: "\u5347\u7EA7\u8F6F\u4EF6" }), void 0) }), void 0);
    return (0, jsx_runtime_1.jsx)(tonwa_com_1.Page, __assign({ id: "page-logout", back: "back", header: header, footer: footer }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "my-5 border border-info bg-white rounded-3 p-5 text-center mx-auto w-max-40c " }, { children: [(0, jsx_runtime_1.jsx)("div", { children: "\u9000\u51FA\u5F53\u524D\u8D26\u53F7\u4E0D\u4F1A\u5220\u9664\u4EFB\u4F55\u5386\u53F2\u6570\u636E\uFF0C\u4E0B\u6B21\u767B\u5F55\u4F9D\u7136\u53EF\u4EE5\u4F7F\u7528\u672C\u8D26\u53F7" }, void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "mt-5 text-center" }, { children: (0, jsx_runtime_1.jsx)("button", __assign({ className: "btn btn-danger", onClick: onClickLogout }, { children: "\u5B89\u5168\u9000\u51FA" }), void 0) }), void 0)] }), void 0) }), void 0);
}
exports.Logout = Logout;
//# sourceMappingURL=Logout.js.map