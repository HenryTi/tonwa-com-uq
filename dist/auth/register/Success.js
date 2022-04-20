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
exports.ForgetSuccess = exports.RegisterSuccess = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
function RegisterSuccess(_a) {
    var pass = _a.pass;
    var account = pass.account, login = pass.login;
    return (0, jsx_runtime_1.jsx)("div", __assign({ className: "container w-max-30c" }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "my-5" }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "py-5 text-center" }, { children: ["\u8D26\u53F7 ", (0, jsx_runtime_1.jsxs)("strong", __assign({ className: "text-primary" }, { children: [account, " "] }), void 0), " \u6CE8\u518C\u6210\u529F\uFF01"] }), void 0), (0, jsx_runtime_1.jsx)("button", __assign({ className: "btn btn-success btn-block", type: "button", onClick: function () { return login(); } }, { children: "\u76F4\u63A5\u767B\u5F55" }), void 0)] }), void 0) }), void 0);
}
exports.RegisterSuccess = RegisterSuccess;
function ForgetSuccess(_a) {
    var pass = _a.pass;
    var login = pass.login;
    return (0, jsx_runtime_1.jsx)("div", __assign({ className: "container w-max-30c" }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "my-5" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "py-5 text-center text-success" }, { children: "\u6210\u529F\u4FEE\u6539\u5BC6\u7801" }), void 0), (0, jsx_runtime_1.jsx)("button", __assign({ className: "btn btn-primary btn-block", onClick: function () { return login(); } }, { children: "\u767B\u5F55\u8D26\u53F7" }), void 0)] }), void 0) }), void 0);
}
exports.ForgetSuccess = ForgetSuccess;
//# sourceMappingURL=Success.js.map