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
exports.List = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importStar(require("react"));
var coms_1 = require("../coms");
function List(props) {
    var _a = (0, react_1.useState)(false), showLoading = _a[0], setShowLoding = _a[1];
    var items = props.items, className = props.className, itemKey = props.itemKey, ItemView = props.ItemView, onItemClick = props.onItemClick, onItemSelect = props.onItemSelect, sep = props.sep, none = props.none, loading = props.loading;
    className = className !== null && className !== void 0 ? className : '';
    (0, react_1.useEffect)(function () {
        // loading超过200ms，显示spinner
        setTimeout(function () {
            setShowLoding(true);
        }, 200);
    }, []);
    if (!items) {
        if (showLoading === false)
            return null;
        if (loading)
            return loading;
        return (0, jsx_runtime_1.jsx)(coms_1.Spinner, { className: "mx-3 my-2 text-primary" }, void 0);
    }
    var len = items.length;
    if (len === 0) {
        if (none)
            return none;
        return (0, jsx_runtime_1.jsx)("div", __assign({ className: "mx-3 my-2 text-muted" }, { children: "-" }), void 0);
    }
    ItemView = ItemView !== null && ItemView !== void 0 ? ItemView : DefaultItemView;
    var renderItem;
    function onCheckChange(item, evt) {
        onItemSelect(item, evt.currentTarget.checked);
    }
    if (onItemSelect) {
        if (onItemClick) {
            renderItem = function (v) { return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "d-flex" }, { children: [(0, jsx_runtime_1.jsx)("label", __assign({ className: "ps-3 pe-2 align-self-stretch d-flex align-items-center" }, { children: (0, jsx_runtime_1.jsx)("input", { type: "checkbox", className: "form-check-input", onChange: function (evt) { return onCheckChange(v, evt); } }, void 0) }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "flex-grow-1 cursor-pointer", onClick: function () { return onItemClick(v); } }, { children: (0, jsx_runtime_1.jsx)(ItemView, { value: v }, void 0) }), void 0)] }), void 0)); };
        }
        else {
            renderItem = function (v) { return ((0, jsx_runtime_1.jsxs)("label", __assign({ className: "d-flex" }, { children: [(0, jsx_runtime_1.jsx)("input", { type: "checkbox", className: "form-check-input mx-3 align-self-center", onChange: function (evt) { return onCheckChange(v, evt); } }, void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "flex-grow-1" }, { children: (0, jsx_runtime_1.jsx)(ItemView, { value: v }, void 0) }), void 0)] }), void 0)); };
        }
    }
    else {
        if (onItemClick) {
            className += ' tonwa-list-item';
        }
        renderItem = function (v) {
            var funcClick, cn;
            if (onItemClick) {
                funcClick = function () { return onItemClick(v); };
                cn = 'tonwa-list-item cursor-pointer';
            }
            return (0, jsx_runtime_1.jsx)("div", __assign({ onClick: funcClick, className: cn }, { children: (0, jsx_runtime_1.jsx)(ItemView, { value: v }, void 0) }), void 0);
        };
    }
    sep = (0, jsx_runtime_1.jsx)(coms_1.Sep, { sep: sep }, void 0);
    var funcKey;
    switch (typeof itemKey) {
        default:
            funcKey = function (item, index) { return index; };
            break;
        case 'string':
            funcKey = function (item) { return item[itemKey]; };
            break;
        case 'function':
            funcKey = itemKey;
            break;
    }
    return (0, jsx_runtime_1.jsx)("ul", __assign({ className: 'm-0 p-0 ' + className }, { children: items.map(function (v, index) {
            var key = funcKey(v, index);
            return (0, jsx_runtime_1.jsxs)(react_1.default.Fragment, { children: [renderItem(v, index), index < len - 1 && sep] }, key);
        }) }), void 0);
}
exports.List = List;
function DefaultItemView(itemProps) {
    var value = itemProps.value;
    var cn = 'px-3 py-2';
    return (0, jsx_runtime_1.jsx)("div", __assign({ className: cn }, { children: JSON.stringify(value) }), void 0);
}
//# sourceMappingURL=List.js.map