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
exports.Image = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var UqAppBase_1 = require("../UqAppBase");
// src = .src, 表示fontawesome Icon
function Image(props) {
    var app = (0, UqAppBase_1.useUqAppBase)();
    var className = props.className, style = props.style, src = props.src, altImage = props.altImage;
    var icon;
    if (src) {
        if (src.indexOf('.') !== 0) {
            if (src.startsWith(':') === true) {
                src = app.net.getResUrl(src.substring(1));
            }
            return (0, jsx_runtime_1.jsx)("img", { src: src, className: className, alt: "img", style: style, onError: function (evt) {
                    if (altImage)
                        evt.currentTarget.src = altImage;
                    else
                        evt.currentTarget.src = 'https://tv.jkchemical.com/imgs/0001.png';
                } }, void 0);
        }
        icon = src.substring(1);
    }
    else {
        icon = 'file-o';
    }
    return (0, jsx_runtime_1.jsx)("span", __assign({ className: (className !== null && className !== void 0 ? className : '') + ' image-none', style: style }, { children: (0, jsx_runtime_1.jsx)("i", { className: 'fa fa-' + icon }, void 0) }), void 0);
}
exports.Image = Image;
//# sourceMappingURL=Image.js.map