"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUQsProxy = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var mobx_react_1 = require("mobx-react");
var tonwa_core_1 = require("tonwa-core");
var Uq_1 = require("./Uq");
function createUQsProxy(web, uqsMan) {
    buildTuidTv();
    var uqReacts = {};
    function setUq(uqKey, proxy) {
        if (!uqKey)
            return;
        var lower = uqKey.toLowerCase();
        uqReacts[uqKey] = proxy;
        if (lower !== uqKey)
            uqReacts[lower] = proxy;
    }
    for (var _i = 0, _a = uqsMan.uqMans; _i < _a.length; _i++) {
        var uqMan = _a[_i];
        var uqReact = new Uq_1.Uq(web, uqMan);
        var proxy = uqReact.$_createProxy();
        setUq(uqMan.getUqKey(), proxy);
        setUq(uqMan.getUqKeyWithConfig(), proxy);
    }
    function onUqProxyError(key) {
        for (var i in uqReacts) {
            var uqReact = uqReacts[i];
            uqReact.localMap.removeAll();
        }
        //this.web.showReloadPage(msg);
        console.error("uq proxy " + key + " error");
    }
    return new Proxy(uqReacts, {
        get: function (target, key, receiver) {
            var lk = key.toLowerCase();
            var ret = target[lk];
            if (ret !== undefined)
                return ret;
            debugger;
            console.error("controller.uqs." + String(key) + " undefined");
            onUqProxyError(String(key));
            return undefined;
        },
    });
}
exports.createUQsProxy = createUQsProxy;
function buildTuidTv() {
    tonwa_core_1.TuidInner.prototype.tv = function (id, render) {
        var _this = this;
        var TuidView = (0, mobx_react_1.observer)(function () {
            var obj = _this.valueFromId(id);
            if (obj === undefined) {
                _this.useId(id);
                return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [_this.sName, ":", id] }, void 0);
            }
            var r;
            if (render) {
                r = render;
            }
            else if (_this.render) {
                r = _this.render;
            }
            else {
                console.log('render', render, 'this.render', _this.render);
                r = function (item) {
                    return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [_this.sName, ":", (0, tonwa_core_1.uqStringify)(item)] }, void 0);
                };
            }
            return r(obj);
        });
        return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(TuidView, {}, void 0) }, void 0);
    };
    tonwa_core_1.TuidImport.prototype.tv = function (id, render) {
        var _a;
        return (_a = this.tuidLocal) === null || _a === void 0 ? void 0 : _a.tv(id, render);
    };
}
//# sourceMappingURL=createUQsProxy.js.map