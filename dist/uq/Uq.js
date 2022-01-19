"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Uq = void 0;
var mobx_react_1 = require("mobx-react");
var react_1 = __importDefault(require("react"));
var Uq = /** @class */ (function () {
    function Uq(web, uqMan) {
        var _this = this;
        /*
        IDTv(ids: number[]): Promise<any[]> {
            return this.$_uqMan.IDTv(ids);
        }
        */
        this.IDRender = function (id, render) {
            if (id === undefined || id === null)
                return null;
            return react_1.default.createElement((0, mobx_react_1.observer)(function () {
                var ret = _this.$_uqMan.idCache.getValue(id);
                if (ret === undefined) {
                    return react_1.default.createElement('span', { props: { className: 'text-muted' }, children: ['id=' + id] });
                }
                var $type = ret.$type;
                if (!$type)
                    return _this.renderIDUnknownType(id);
                var IDType = _this.$_uqMan.ids[$type];
                if (!IDType)
                    return _this.renderIDUnknownType(id);
                return (render !== null && render !== void 0 ? render : IDType.render)(ret);
            }));
        };
        this.IDV = function (id) {
            var ret = _this.$_uqMan.idCache.getValue(id);
            return ret;
        };
        /*
        IDLocalTv(ids: number[]): Promise<any[]> {
            return this.IDTv(ids.map(v => -v));
        }
        */
        this.IDLocalV = function (id) {
            return _this.IDV(-id);
        };
        this.IDLocalRender = function (id, render) {
            if (id === undefined || id === null)
                return null;
            return _this.IDRender(-id, render);
        };
        this.web = web;
        this.$_uqMan = uqMan;
        this.$_uqSql = this.$_createUqSqlProxy();
    }
    Uq.prototype.$_createProxy = function () {
        var _this = this;
        var ret = new Proxy(this.$_uqMan.entities, {
            get: function (target, key, receiver) {
                if (key === '$') {
                    return _this;
                }
                if (key === 'SQL') {
                    return _this.$_uqSql;
                }
                var lk = key.toLowerCase();
                var ret = target[lk];
                if (ret !== undefined)
                    return ret;
                var func = _this.$_uqMan[key];
                if (func !== undefined)
                    return func;
                func = _this[key];
                if (func !== undefined)
                    return func;
                var err = "entity ".concat(_this.$_uqMan.name, ".").concat(String(key), " not defined");
                console.error('UQ错误：' + err);
                _this.showReload('服务器正在更新');
                return undefined;
            }
        });
        return ret;
    };
    Uq.prototype.$_createUqSqlProxy = function () {
        var _this = this;
        var ret = new Proxy(this.$_uqMan, {
            get: function (target, key, receiver) {
                var ret = target['$' + key];
                if (ret !== undefined)
                    return ret;
                var err = "entity ".concat(_this.$_uqMan.name, ".").concat(String(key), " not defined");
                console.error('UQ错误：' + err);
                _this.$_uqMan.showReload('服务器正在更新');
                return undefined;
            }
        });
        return ret;
    };
    Uq.prototype.showReload = function (msg) {
        //console.error('uq proxy error name', msg);
        var cache = this.$_uqMan.localMap.child('$reload-tick');
        var reloadTick = cache.get();
        if (!reloadTick)
            reloadTick = 0;
        console.error(msg);
        this.$_uqMan.localMap.removeAll();
        var tick = Date.now();
        cache.set(tick);
        if (tick - reloadTick < 10 * 1000) {
            this.web.showReloadPage(msg);
        }
        else {
            this.web.reload();
        }
    };
    Uq.prototype.renderIDUnknownType = function (id) {
        return react_1.default.createElement('span', { props: { className: 'text-muted' }, children: ["id=".concat(id, " type undefined")] });
    };
    return Uq;
}());
exports.Uq = Uq;
//# sourceMappingURL=Uq.js.map