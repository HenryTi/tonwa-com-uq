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
exports.useIdListEdit = exports.IDListEdit = exports.IDListEditContext = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var valtio_1 = require("valtio");
var tonwa_com_1 = require("tonwa-com");
var ListEdit_1 = require("../ListEdit");
var IDListEditContext = /** @class */ (function (_super) {
    __extends(IDListEditContext, _super);
    function IDListEditContext(items) {
        return _super.call(this, items, undefined) || this;
    }
    IDListEditContext.prototype.keyCompare = function (item1, item2) {
        return item1.id === item2.id;
    };
    return IDListEditContext;
}(ListEdit_1.ListEditContext));
exports.IDListEditContext = IDListEditContext;
function IDListEdit(props) {
    var context = props.context;
    var items = (0, valtio_1.useSnapshot)(context.getResponse()).items;
    return (0, jsx_runtime_1.jsx)(tonwa_com_1.List, __assign({}, props, { items: items }), void 0);
}
exports.IDListEdit = IDListEdit;
function useIdListEdit(items) {
    var current = (0, react_1.useRef)(new IDListEditContext(items)).current;
    return current;
}
exports.useIdListEdit = useIdListEdit;
//# sourceMappingURL=IDListEdit.js.map