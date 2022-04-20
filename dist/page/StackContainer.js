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
exports.StackContainer = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var valtio_1 = require("valtio");
var nav_1 = require("./nav");
var useScroll_1 = require("./useScroll");
function StackContainer(_a) {
    var active = _a.active, stackItems = _a.stackItems;
    var last = stackItems.length - 1;
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: stackItems.map(function (item, index) {
            var name = item.key, page = item.page;
            var display;
            if (active) {
                display = active === name;
            }
            else {
                display = index === last;
            }
            return (0, jsx_runtime_1.jsx)(Stack, __assign({ display: display }, { children: page }), name);
        }) }, void 0);
}
exports.StackContainer = StackContainer;
function Stack(_a) {
    var display = _a.display, children = _a.children;
    var appNav = (0, nav_1.useAppNav)();
    var tabNav = (0, nav_1.useTabNav)();
    var scrollContext = (0, react_1.useContext)(useScroll_1.ScrollContext);
    var nav = (0, react_1.useRef)(new nav_1.Nav(appNav, tabNav, children));
    var data = nav.current.data;
    var snapshot = (0, valtio_1.useSnapshot)(data);
    var snapshotStack = snapshot.stack;
    var len = snapshotStack.length;
    var last = len - 1;
    var flexFill = '-page-stack-layer flex-column flex-grow-1 ';
    var overflowY;
    switch (scrollContext) {
        default:
            overflowY = 'auto';
            break;
        case 'app-tabs':
            overflowY = 'auto';
            break;
        case 'page-tabs':
            overflowY = 'scroll';
            break;
    }
    return (0, jsx_runtime_1.jsx)(nav_1.PageStackContext.Provider, __assign({ value: nav.current }, { children: snapshotStack.map(function (v, index) {
            var pageKey = v.key, page = v.page;
            return (0, jsx_runtime_1.jsx)("div", __assign({ className: flexFill + (display === true && index === last ? 'd-flex' : 'd-none'), style: { overflowY: overflowY } }, { children: page }), pageKey);
        }) }), void 0);
}
//# sourceMappingURL=StackContainer.js.map