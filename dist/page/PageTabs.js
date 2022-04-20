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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageTabs = exports.Tab = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importStar(require("react"));
var useScroll_1 = require("./useScroll");
function Tab(props) {
    return null;
}
exports.Tab = Tab;
var tabId = 1;
function createTabsFromChildren(children) {
    var tabs = [];
    react_1.default.Children.forEach(children, function (element) {
        if (react_1.default.isValidElement(element) === false)
            return;
        var elType = element.type;
        if (elType === react_1.default.Fragment)
            return;
        if (elType !== Tab)
            return;
        invariant(elType === Tab, "[".concat(typeof elType === "string" ? elType : elType.name, "] is not a <Tab> component. All component children of <PageTabs> must be a <Tab>"));
        var props = element.props;
        var tab = {
            id: tabId++,
            name: props.name,
            tag: props.tag,
            content: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: props.children }, void 0),
            mountable: false,
        };
        tabs.push(tab);
    });
    return tabs;
}
function PageTabs(_a) {
    var children = _a.children;
    var tabs = (0, react_1.useRef)(createTabsFromChildren(children)).current;
    return (0, jsx_runtime_1.jsx)(InnerPageTabs, { tabs: tabs }, void 0);
}
exports.PageTabs = PageTabs;
function InnerPageTabs(_a) {
    var tabs = _a.tabs;
    var scrollContext = (0, react_1.useContext)(useScroll_1.ScrollContext);
    var _b = (0, react_1.useState)(0), active = _b[0], setActive = _b[1];
    tabs[active].mountable = true;
    function onTabClick(tabIndex) {
        if (tabIndex === active)
            return;
        var tab = tabs[tabIndex];
        if (!tab)
            return;
        tab.mountable = true;
        setActive(tabIndex);
    }
    scrollContext = scrollContext !== null && scrollContext !== void 0 ? scrollContext : 'page-tabs';
    var overflowY;
    switch (scrollContext) {
        default: break;
        case 'app-tabs':
            overflowY = 'auto';
            break;
        case 'page-tabs':
            overflowY = 'scroll';
            break;
    }
    return (0, jsx_runtime_1.jsx)(useScroll_1.ScrollContext.Provider, __assign({ value: scrollContext }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "flex-grow-1 d-flex flex-column", style: { overflowY: overflowY } }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "tonwa-page-content tab-content flex-grow-1" }, { children: tabs.map(function (v, index) { return (0, jsx_runtime_1.jsx)(TabPane, { tab: v, active: active, index: index }, v.id); }) }), void 0), (0, jsx_runtime_1.jsx)("ul", __assign({ className: "nav nav-tabs position-sticky tonwa-page-container justify-content-evenly bg-light", style: { bottom: '0' } }, { children: tabs.map(function (v, index) { return (0, jsx_runtime_1.jsx)("li", __assign({ className: "nav-item flex-fill align-self-stretch" }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ onClick: function () { return onTabClick(index); }, className: 'nav-link h-100 p-0 ' + (index === active ? 'active' : 'cursor-pointer') }, { children: v.tag }), void 0) }), v.name); }) }), void 0)] }), void 0) }), void 0);
}
function TabPane(_a) {
    var tab = _a.tab, active = _a.active, index = _a.index;
    var divRef = (0, useScroll_1.useScroll)();
    var mountable = tab.mountable, content = tab.content;
    if (mountable === false)
        return null;
    return (0, jsx_runtime_1.jsx)("div", __assign({ ref: divRef, className: 'tab-pane ' + (active === index ? 'active' : '') }, { children: content }), void 0);
}
function invariant(condition, message) {
    if (!condition)
        throw new Error(message);
}
//# sourceMappingURL=PageTabs.js.map