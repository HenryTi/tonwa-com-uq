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
exports.Page = exports.UPage = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var valtio_1 = require("valtio");
var coms_1 = require("../coms");
var nav_1 = require("./nav");
var PageTemplate_1 = require("./PageTemplate");
var useScroll_1 = require("./useScroll");
require("font-awesome/css/font-awesome.min.css");
//import { useContext } from "react";
// unanthorized page
function UPage(props) {
    var divRef = (0, useScroll_1.useScroll)();
    var children = props.children, header = props.header, back = props.back, right = props.right, footer = props.footer, templateName = props.template, id = props.id;
    var template = (0, PageTemplate_1.usePageTemplate)(templateName);
    if (header || back || right) {
        var Header = props.Header;
        if (!Header) {
            var TemplateHeader = template.Header;
            Header = TemplateHeader;
        }
        header = (0, jsx_runtime_1.jsx)(Header, { header: header, back: back, right: right }, void 0);
    }
    if (footer) {
        var Footer = props.Footer;
        if (!Footer) {
            var TemplateFooter = template.Footer;
            Footer = TemplateFooter;
        }
        footer = (0, jsx_runtime_1.jsx)(Footer, { footer: footer }, void 0);
    }
    var Content = props.Content;
    if (!Content) {
        var TemplateContent = template.Content;
        Content = TemplateContent;
    }
    header = header && (0, jsx_runtime_1.jsx)("div", __assign({ className: "position-sticky tonwa-page-header", style: { top: 0, zIndex: 9999 } }, { children: header }), void 0);
    var errorPosition = template.errorPosition, Error = template.Error;
    switch (errorPosition) {
        case 'above-header':
            header = (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Error, { template: templateName }, void 0), header] }, void 0);
            break;
        case 'under-header':
            header = (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [header, (0, jsx_runtime_1.jsx)(Error, { template: templateName }, void 0)] }, void 0);
            break;
    }
    //let cnPage = '-inner-page d-flex flex-grow-1 flex-column';
    return (0, jsx_runtime_1.jsxs)("div", __assign({ ref: divRef, className: "-inner-page", id: id }, { children: [header, (0, jsx_runtime_1.jsx)(Content, __assign({}, props, { children: children }), void 0), footer && (0, jsx_runtime_1.jsx)("div", __assign({ className: "tonwa-page-footer", style: { position: 'sticky', bottom: '0px' } }, { children: footer }), void 0)] }), void 0);
}
exports.UPage = UPage;
function Page(props) {
    var appNav = (0, nav_1.useAppNav)();
    var isLogined = (0, valtio_1.useSnapshot)(appNav.response).isLogined;
    if (isLogined !== true) {
        return (0, jsx_runtime_1.jsx)(Unanthorized, {}, void 0);
    }
    return (0, jsx_runtime_1.jsx)(UPage, __assign({}, props), void 0);
}
exports.Page = Page;
function Unanthorized() {
    var nav = (0, nav_1.useNav)();
    return (0, jsx_runtime_1.jsxs)("div", __assign({ className: "p-3" }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "mb-3" }, { children: [(0, jsx_runtime_1.jsx)(coms_1.FA, { name: "ban", className: "text-danger me-3" }, void 0), "not logined, can not show a ", '<Page />', ", try ", '<UPage />', "."] }), void 0), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("button", __assign({ className: "btn btn-outline-primary", onClick: function () { return nav.close(); } }, { children: (0, jsx_runtime_1.jsx)(coms_1.FA, { name: "angle-left" }, void 0) }), void 0) }, void 0)] }), void 0);
}
//# sourceMappingURL=Page.js.map