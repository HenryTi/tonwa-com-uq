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
exports.appPageStackTemplate = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Error_1 = require("./Error");
var PageTemplate_1 = require("./PageTemplate");
require("./tonwa-page.css");
var BackTemplate_1 = require("./BackTemplate");
var defaultContentClassName = ' bg-white ';
function Header(props) {
    var back = props.back, header = props.header, right = props.right, templateName = props.template;
    var template = (0, PageTemplate_1.usePageTemplate)(templateName);
    var Back = template.Back;
    return (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "tonwa-page-container d-flex h-min-3c border-bottom align-items-center tonwa-page-header-content" }, { children: [(0, jsx_runtime_1.jsx)(Back, { back: back }, void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "flex-grow-1" }, { children: header }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "mx-2" }, { children: right }), void 0)] }), void 0) }, void 0);
}
function Footer(props) {
    return (0, jsx_runtime_1.jsx)("div", __assign({ className: "tonwa-page-container d-flex flex-column tonwa-page-footer-content" }, { children: props.footer }), void 0);
}
function Content(props) {
    var contentClassName = props.contentClassName, templateName = props.template;
    var template = (0, PageTemplate_1.usePageTemplate)(templateName);
    if (!contentClassName) {
        var templateContentClassName = template.contentClassName;
        contentClassName = templateContentClassName;
        if (!contentClassName)
            contentClassName = defaultContentClassName;
    }
    return (0, jsx_runtime_1.jsx)("div", __assign({ className: 'tonwa-page-content tonwa-page-container ' + contentClassName, style: { display: 'flow-root' } }, { children: props.children }), void 0);
}
exports.appPageStackTemplate = {
    Back: BackTemplate_1.Back,
    Header: Header,
    Footer: Footer,
    Content: Content,
    contentClassName: defaultContentClassName,
    Error: Error_1.Error,
    errorPosition: 'under-header',
};
//# sourceMappingURL=AppPageStackTemplate.js.map