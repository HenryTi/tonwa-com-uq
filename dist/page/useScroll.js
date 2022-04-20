"use strict";
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
exports.ScrollContext = exports.useScroll = void 0;
var react_1 = __importStar(require("react"));
function useScroll() {
    //return undefined;
    var divRef = (0, react_1.useRef)();
    //let inScroll = useContext(ScrollContext);
    (0, react_1.useEffect)(function () {
        //if (inScroll !== true) return;
        var resize = function () {
            var el = divRef.current;
            if (!el)
                return;
            if (el.offsetParent === null)
                return;
            var els = el.getElementsByClassName('tonwa-page-content');
            if (els.length === 0)
                return;
            var elContent = els[0];
            var elContainer = getScrollContainer(elContent);
            if (!elContainer)
                return;
            var h = elContainer.clientHeight;
            if (h < 1)
                return;
            elContent.parentElement.childNodes.forEach(function (v) {
                if (v.nodeType === Node.ELEMENT_NODE) {
                    if (v === elContent)
                        return;
                    h -= v.offsetHeight;
                }
                ;
            });
            var tabs = getPageTabsContainerFromScrollContainer(elContainer);
            if (tabs)
                h -= tabs.clientHeight;
            if (h < 10)
                return;
            elContent.style.minHeight = (h - 2) + 'px';
        };
        window.addEventListener('resize', resize);
        window.addEventListener('DOMSubtreeModified', resize);
        resize();
        return function clean() {
            window.removeEventListener('resize', resize);
            window.removeEventListener('DOMSubtreeModified', resize);
        };
    }, [ /*inScroll*/]);
    //if (inScroll !== true) return;
    return divRef;
}
exports.useScroll = useScroll;
function getScrollContainer(el) {
    for (var p = el; p; p = p.parentElement) {
        var overflowY = p.style.overflowY;
        if (overflowY)
            return p;
    }
}
function getPageTabsContainerFromScrollContainer(scrollContainer) {
    var el = scrollContainer.getElementsByClassName('nav nav-tabs position-sticky');
    if (el && el.length > 0)
        return el[0];
}
exports.ScrollContext = react_1.default.createContext(undefined);
//# sourceMappingURL=useScroll.js.map