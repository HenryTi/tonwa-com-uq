"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Uq = void 0;
var mobx_react_1 = require("mobx-react");
var react_1 = __importDefault(require("react"));
var Uq = /** @class */ (function () {
    function Uq(uqMan) {
        var _this = this;
        /*
        IDTv(ids: number[]): Promise<any[]> {
            return this.$_uqMan.IDTv(ids);
        }
        */
        this.IDRender = function (id, render) {
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
            return _this.IDRender(-id, render);
        };
        this.$_uqMan = uqMan;
        this.$_uqSql = this.$_createUqSqlProxy();
    }
    Uq.prototype.$_createProxy = function () {
        var _this = this;
        var ret = new Proxy(this.$_uqMan.entities, {
            get: function (target, key, receiver) {
                var lk = key.toLowerCase();
                if (lk === '$') {
                    return _this;
                }
                if (lk === 'SQL') {
                    return _this.$_uqSql;
                }
                var ret = target[lk];
                if (ret !== undefined)
                    return ret;
                var func = _this.$_uqMan[key];
                if (func !== undefined)
                    return func;
                var err = "entity " + _this.$_uqMan.name + "." + String(key) + " not defined";
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
                var lk = key.toLowerCase();
                var ret = target['$' + lk];
                if (ret !== undefined)
                    return ret;
                var err = "entity " + _this.$_uqMan.name + "." + String(lk) + " not defined";
                console.error('UQ错误：' + err);
                _this.showReload('服务器正在更新');
                return undefined;
            }
        });
        return ret;
    };
    Uq.prototype.showReload = function (msg) {
        console.error('uq proxy error name', msg);
        /*
        let cache = this.localMap.child('$reload-tick');
        let reloadTick = cache.get();
        if (!reloadTick) reloadTick = 0;
        console.error(msg);
        this.localMap.removeAll();
        let tick = Date.now();
        cache.set(tick);
        if (tick - reloadTick  < 10*1000)  {
            this.web.showReloadPage(msg);
        }
        else {
            this.web.reload();
        }
        */
    };
    Uq.prototype.renderIDUnknownType = function (id) {
        return react_1.default.createElement('span', { props: { className: 'text-muted' }, children: ["id=" + id + " type undefined"] });
    };
    return Uq;
}());
exports.Uq = Uq;
//# sourceMappingURL=Uq.js.map