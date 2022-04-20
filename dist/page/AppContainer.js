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
exports.AppContainer = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var valtio_1 = require("valtio");
var StackContainer_1 = require("./StackContainer");
var nav_1 = require("./nav");
var react_1 = require("react");
var AppNav_1 = require("./AppNav");
function AppContainer() {
    //let uqApp = useUqAppBase();
    var appNav = (0, react_1.useRef)(new AppNav_1.AppNav()).current;
    var stack = (0, valtio_1.useSnapshot)(appNav.data).stack;
    return (0, jsx_runtime_1.jsx)(nav_1.AppNavContext.Provider, __assign({ value: appNav }, { children: (0, jsx_runtime_1.jsx)(StackContainer_1.StackContainer, { stackItems: stack }, void 0) }), void 0);
}
exports.AppContainer = AppContainer;
//# sourceMappingURL=AppContainer.js.map