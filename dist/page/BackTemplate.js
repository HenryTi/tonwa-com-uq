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
exports.Back = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var coms_1 = require("../coms");
var nav_1 = require("./nav");
function Back(props) {
    var back = props.back;
    var nav = (0, nav_1.useNav)();
    var appNav = nav.appNav;
    function onClickBack() {
        if (nav.data.stack.length === 1) {
            appNav.close(); //.navigate(-1 as any);
        }
        else {
            nav.close();
        }
    }
    function renderBack(iconName) {
        return (0, jsx_runtime_1.jsx)("div", __assign({ className: "px-3 cursor-pointer", onClick: onClickBack }, { children: (0, jsx_runtime_1.jsx)(coms_1.FA, { name: iconName }, void 0) }), void 0);
    }
    function renderNone() {
        return (0, jsx_runtime_1.jsx)("div", { className: "pe-3" }, void 0);
    }
    switch (back) {
        default:
        case 'back': break;
        case 'none': return renderNone();
        case 'close': return renderBack('close');
    }
    if (nav.data.stack.length > 1
        || (!nav.tabNav && appNav.data.stack.length > 1)) {
        return renderBack('angle-left');
    }
    return renderNone();
}
exports.Back = Back;
//# sourceMappingURL=BackTemplate.js.map