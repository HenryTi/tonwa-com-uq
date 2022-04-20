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
exports.FieldsForm = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var tonwa_com_1 = require("tonwa-com");
var FieldsBands_1 = require("./FieldsBands");
function FieldsForm(props) {
    var className = props.className, values = props.values, children = props.children;
    return (0, jsx_runtime_1.jsxs)(tonwa_com_1.Form, __assign({ className: className, values: values }, { children: [(0, FieldsBands_1.createBandsFromFields)(props), children] }), void 0);
}
exports.FieldsForm = FieldsForm;
//# sourceMappingURL=FieldsForm.js.map