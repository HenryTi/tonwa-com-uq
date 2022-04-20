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
exports.AppTabsContainer = exports.AppTabs = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var coms_1 = require("../coms");
var valtio_1 = require("valtio");
var nav_1 = require("./nav");
var StackContainer_1 = require("./StackContainer");
var useScroll_1 = require("./useScroll");
function AppTabs(props) {
    var _a, _b;
    var active_page = (0, react_router_dom_1.useParams)().active_page;
    var tabNav = (0, nav_1.useTabNav)();
    var Tab = props.Tab, TabKept = props.TabKept, TabClose = props.TabClose;
    if (!Tab)
        Tab = function (_a) {
            var title = _a.title;
            return (0, jsx_runtime_1.jsx)("div", __assign({ className: "ps-3 pe-2 py-2" }, { children: title }), void 0);
        };
    if (!TabKept)
        TabKept = function (_a) {
            var title = _a.title;
            return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(coms_1.FA, { name: "home", className: "me-2", size: 'lg' }, void 0), title] }, void 0);
        };
    if (!TabClose)
        TabClose = function () {
            var cn = 'btn btn-sm btn-outline-primary px-1 me-1 border-0 py-0 align-self-center';
            return (0, jsx_runtime_1.jsx)("div", __assign({ className: cn }, { children: (0, jsx_runtime_1.jsx)(coms_1.FA, { name: "times" }, void 0) }), void 0);
        };
    (0, react_1.useEffect)(function () {
        var pages = props.pages, active = props.active;
        var defaultActive = tabNav.defaultActive, data = tabNav.data, appNav = tabNav.appNav;
        var stack = data.stack;
        var activePage = active_page ? active_page : defaultActive === null || defaultActive === void 0 ? void 0 : defaultActive.key;
        tabNav.setInitTabs(pages, active);
        if (!activePage)
            return;
        var ap = activePage;
        var p = stack.findIndex(function (v) { return v.key === activePage; });
        if (p < 0)
            ap = defaultActive === null || defaultActive === void 0 ? void 0 : defaultActive.key;
        if (ap) {
            appNav.navigate("".concat(ap));
        }
    }, [props, tabNav]); // eslint-disable-line react-hooks/exhaustive-deps
    // 注意：上面这里的相关数组，不能包含active_page。否则，每次更新url，都会重载AppTabs
    var defaultActive = tabNav.defaultActive, data = tabNav.data, response = tabNav.response;
    var stack = data.stack;
    var tabs = (0, valtio_1.useSnapshot)(stack);
    var active = (0, valtio_1.useSnapshot)(response).active;
    var activePage = (_b = (_a = active === null || active === void 0 ? void 0 : active.key) !== null && _a !== void 0 ? _a : active_page) !== null && _b !== void 0 ? _b : defaultActive === null || defaultActive === void 0 ? void 0 : defaultActive.key;
    function TabContainer(tab) {
        var name = tab.key, keep = tab.keep, title = tab.title;
        var cnTab = 'nav-item nav-link d-flex align-items-center p-0 '
            + (activePage === name ? 'active' : 'cursor-pointer');
        var vTab;
        if (keep === true) {
            cnTab += ' px-3 py-2 ';
            vTab = (0, jsx_runtime_1.jsx)(TabKept, { title: title }, void 0);
        }
        else {
            cnTab += ' d-flex align-items-center ';
            vTab = (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Tab, { title: title }, void 0), (0, jsx_runtime_1.jsx)("div", __assign({ onClick: function (evt) { tabNav.closeTab(tab); evt.stopPropagation(); } }, { children: (0, jsx_runtime_1.jsx)(TabClose, {}, void 0) }), void 0)] }, void 0);
        }
        return (0, jsx_runtime_1.jsx)("li", __assign({ className: cnTab, role: "button", onClick: function () { return tabNav.activate(tab); } }, { children: vTab }), name);
    }
    return (0, jsx_runtime_1.jsxs)("div", __assign({ className: "d-flex flex-column flex-fill overflow-hidden" }, { children: [(0, jsx_runtime_1.jsx)("ul", __assign({ className: "nav nav-tabs" }, { children: tabs.map(function (tab) { return TabContainer(tab); }) }), void 0), (0, jsx_runtime_1.jsx)(useScroll_1.ScrollContext.Provider, __assign({ value: 'app-tabs' }, { children: (0, jsx_runtime_1.jsx)(StackContainer_1.StackContainer, { active: activePage, stackItems: tabs }, void 0) }), void 0)] }), void 0);
}
exports.AppTabs = AppTabs;
function AppTabsContainer(_a) {
    var children = _a.children;
    var appNav = (0, nav_1.useAppNav)();
    return (0, jsx_runtime_1.jsx)(nav_1.TabNavContext.Provider, __assign({ value: appNav.tabNav }, { children: children }), void 0);
}
exports.AppTabsContainer = AppTabsContainer;
//# sourceMappingURL=AppTabs.js.map