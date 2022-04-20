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
exports.Error = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var valtio_1 = require("valtio");
var coms_1 = require("../coms");
var nav_1 = require("./nav");
var PageTemplate_1 = require("./PageTemplate");
function Error(props) {
    var nav = (0, nav_1.useNav)();
    var appNav = nav.appNav;
    var errorPosition = (0, PageTemplate_1.usePageTemplate)(props.template).errorPosition;
    var response = appNav.response;
    var responseSnapshot = (0, valtio_1.useSnapshot)(response);
    var error = responseSnapshot.error;
    if (error === undefined)
        return null;
    function onShow() {
        alert(error.message);
    }
    return (0, jsx_runtime_1.jsx)("div", __assign({ className: errorPosition === 'under-header' ? 'tonwa-page-container' : '' }, { children: (0, jsx_runtime_1.jsxs)(coms_1.LMR, __assign({ className: "bg-light align-items-center border-bottom border-info" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "py-2 px-3 cursor-pointer", onClick: function () { return appNav.clearError(); } }, { children: (0, jsx_runtime_1.jsx)(coms_1.FA, { name: "times", size: "lg" }, void 0) }), void 0), (0, jsx_runtime_1.jsx)(coms_1.FA, { className: "text-danger me-2", name: "exclamation-triangle" }, void 0), (0, jsx_runtime_1.jsx)("span", __assign({ className: "text-info" }, { children: error.message }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "py-2 px-3 cursor-pointer", onClick: onShow }, { children: (0, jsx_runtime_1.jsx)(coms_1.FA, { name: "angle-right" }, void 0) }), void 0)] }), void 0) }), void 0);
}
exports.Error = Error;
//# sourceMappingURL=Error.js.map