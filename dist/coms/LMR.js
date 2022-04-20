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
exports.LMR = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
function LMR(props) {
    var className = props.className, children = props.children, onClick = props.onClick;
    var cn = (className !== null && className !== void 0 ? className : '');
    if (onClick !== undefined)
        cn += ' cursor-pointer ';
    var arr = React.Children.toArray(children);
    var len = arr.length;
    if (len > 0) {
        arr.splice(len - 1, 0, (0, jsx_runtime_1.jsx)("div", { className: "me-auto" }, void 0));
    }
    /*
    if (len > 1) {
        let el = arr[len - 2];
        let elNew: any;
        if (typeof el === 'string') {
            elNew = <div className="flex-grow-1">{el}</div>;
        }
        else {
            let { props } = el as React.ReactElement;
            let propsCn = (props?.className ?? '') + ' flex-grow-1 ';
            elNew = React.cloneElement(el as React.ReactElement, { className: propsCn });
        }
        arr.splice(len - 2, 1, elNew);
    }
    */
    return (0, jsx_runtime_1.jsx)("div", __assign({ className: 'd-flex ' + cn, onClick: onClick }, { children: arr.map(function (v, index) { return (0, jsx_runtime_1.jsx)(React.Fragment, { children: v }, index); }) }), void 0);
}
exports.LMR = LMR;
//# sourceMappingURL=LMR.js.map