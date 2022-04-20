"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_router_dom_1 = require("react-router-dom");
function AuthRoutes() {
    return (0, jsx_runtime_1.jsx)(react_router_dom_1.Routes, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/login", element: (0, jsx_runtime_1.jsx)(Login, {}, void 0) }, void 0) }, void 0);
}
exports.AuthRoutes = AuthRoutes;
function Login() {
    return (0, jsx_runtime_1.jsx)("div", { children: "login" }, void 0);
}
//# sourceMappingURL=AuthRoutes.js.map