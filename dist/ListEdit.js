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
exports.useListEdit = exports.ListEdit = exports.ListEditContext = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var tonwa_com_1 = require("tonwa-com");
var valtio_1 = require("valtio");
var ListEditContext = /** @class */ (function () {
    function ListEditContext(items, keyCompare) {
        this.response = (0, valtio_1.proxy)({ items: items });
        this.keyCompareFunc = keyCompare;
    }
    ListEditContext.prototype.keyCompare = function (item1, item2) {
        return this.keyCompareFunc(item1, item2);
    };
    ListEditContext.prototype.setItems = function (items) {
        this.response.items = items;
    };
    ListEditContext.prototype.getResponse = function () { return this.response; };
    ListEditContext.prototype.findIndex = function (item) {
        var _this = this;
        var items = this.response.items;
        var p = items.findIndex(function (v) { return _this.keyCompare(v, item); });
        return p;
    };
    ListEditContext.prototype.onItemChanged = function (item) {
        var p = this.findIndex(item);
        var items = this.response.items;
        if (p >= 0) {
            Object.assign(items[p], item);
        }
        else {
            items.unshift(item);
        }
    };
    ListEditContext.prototype.onItemDeleted = function (item) {
        var p = this.findIndex(item);
        if (p >= 0)
            this.response.items.splice(p, 1);
    };
    ListEditContext.prototype.moveItemToFirst = function (item) {
        var p = this.findIndex(item);
        if (p >= 0)
            this.response.items.splice(p, 1);
        this.response.items.unshift(item);
    };
    ListEditContext.prototype.moveItemToLast = function (item) {
        var p = this.findIndex(item);
        if (p >= 0)
            this.response.items.splice(p, 1);
        this.response.items.push(item);
    };
    return ListEditContext;
}());
exports.ListEditContext = ListEditContext;
function ListEdit(props) {
    var context = props.context;
    var items = (0, valtio_1.useSnapshot)(context.getResponse()).items;
    return (0, jsx_runtime_1.jsx)(tonwa_com_1.List, __assign({}, props, { items: items }), void 0);
}
exports.ListEdit = ListEdit;
function useListEdit(items, keyCompare) {
    var current = (0, react_1.useRef)(new ListEditContext(items, keyCompare)).current;
    return current;
}
exports.useListEdit = useListEdit;
//# sourceMappingURL=ListEdit.js.map