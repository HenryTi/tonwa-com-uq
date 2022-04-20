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
exports.PickPage = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var page_1 = require("../page");
var list_1 = require("../list");
function PickPage(_a) {
    var header = _a.header, className = _a.className, ItemView = _a.ItemView, items = _a.items, top = _a.top, bottom = _a.bottom;
    var nav = (0, page_1.useNav)();
    function onItemClick(item) {
        nav.returnCall(item);
        return;
    }
    return (0, jsx_runtime_1.jsxs)(page_1.Page, __assign({ header: header }, { children: [top, (0, jsx_runtime_1.jsx)(list_1.List, { className: className !== null && className !== void 0 ? className : 'my-1 border-top border-bottom border-2', items: items, ItemView: ItemView, onItemClick: onItemClick }, void 0), bottom] }), void 0);
}
exports.PickPage = PickPage;
//# sourceMappingURL=PickPage.js.map