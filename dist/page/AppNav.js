"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabNav = exports.AppNav = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var valtio_1 = require("valtio");
var nav_1 = require("./nav");
var AppNav = /** @class */ (function (_super) {
    __extends(AppNav, _super);
    function AppNav() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.response = (0, valtio_1.proxy)({
            isLogined: undefined,
            error: undefined,
        });
        _this.tabNav = new TabNav(_this);
        _this.onLoginChanged = function (isLogined) {
            if (isLogined === true) {
                _this.response.isLogined = isLogined;
            }
            else {
                _this.response.isLogined = false;
            }
            _this.response.error = undefined;
        };
        return _this;
    }
    AppNav.prototype.init = function (initPage, navigateFunc) {
        if (this.navigateFunc)
            return;
        this.navigateFunc = navigateFunc;
        if (initPage) {
            this.data.stack.splice(0);
            this.internalOpen((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: initPage }, void 0));
        }
    };
    AppNav.prototype.navigate = function (to, options) {
        this.navigateFunc(to, options);
    };
    AppNav.prototype.setError = function (err, message) { this.response.error = (0, valtio_1.ref)({ err: err, message: message }); };
    AppNav.prototype.clearError = function () { this.response.error = undefined; };
    return AppNav;
}(nav_1.StackNav));
exports.AppNav = AppNav;
var TabNav = /** @class */ (function (_super) {
    __extends(TabNav, _super);
    function TabNav(appNav) {
        var _this = _super.call(this) || this;
        _this.appNav = appNav;
        _this.itemsArr = [];
        _this.response = (0, valtio_1.proxy)({
            active: undefined,
        });
        return _this;
    }
    TabNav.prototype.setInitTabs = function (initPageItems, defaultActive) {
        var _a, _b;
        this.defaultActive = defaultActive;
        initPageItems = initPageItems !== null && initPageItems !== void 0 ? initPageItems : [];
        this.itemsArr.splice(0);
        (_a = this.itemsArr).push.apply(_a, initPageItems);
        this.data.stack.splice(0);
        (_b = this.data.stack).push.apply(_b, (initPageItems).map(function (v) { return (0, valtio_1.ref)(v); }));
    };
    TabNav.prototype.openTab = function (pageItem) {
        var refPageItem = (0, valtio_1.ref)(pageItem);
        this.response.active = refPageItem;
        this.data.stack.push(refPageItem);
        this.itemsArr.push(pageItem);
        this.appNav.navigate("/".concat(pageItem.key));
    };
    TabNav.prototype.activate = function (pageItem) {
        var _a;
        var name = pageItem.key;
        if (this.response.active !== pageItem) {
            this.response.active = pageItem;
            var p = this.itemsArr.findIndex(function (v) { return v.key === name; });
            var ret = this.itemsArr.splice(p, 1);
            (_a = this.itemsArr).push.apply(_a, ret);
            this.appNav.navigate(name);
        }
    };
    TabNav.prototype.closeTab = function (pageItem) {
        var stack = this.data.stack;
        if (stack.length === 0)
            return;
        pageItem = pageItem !== null && pageItem !== void 0 ? pageItem : this.response.active;
        var p = stack.findIndex(function (v) { return v === pageItem; });
        if (p >= 0) {
            var item_1 = stack.splice(p, 1)[0];
            var i = this.itemsArr.findIndex(function (v) { return v.key === item_1.key; });
            if (i >= 0)
                this.itemsArr.splice(i, 1);
            var len = this.itemsArr.length;
            if (len > 0) {
                var item_2 = this.itemsArr[len - 1];
                this.response.active = item_2;
                var active = item_2.key;
                this.appNav.navigate("/".concat(active));
            }
        }
    };
    return TabNav;
}(nav_1.StackNav));
exports.TabNav = TabNav;
//# sourceMappingURL=AppNav.js.map