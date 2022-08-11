"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdView = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
function IdView(_a) {
    var id = _a.id, uq = _a.uq, Template = _a.Template, ID = _a.ID;
    if (ID !== undefined) {
        return (0, jsx_runtime_1.jsx)(IdViewID, { uq: undefined, ID: ID, id: id, Template: Template }, void 0);
    }
    else {
        return (0, jsx_runtime_1.jsx)(IdViewInternal, { uq: uq, ID: ID, id: id, Template: Template }, void 0);
    }
}
exports.IdView = IdView;
function IdViewInternal(_a) {
    var id = _a.id, uq = _a.uq, Template = _a.Template;
    var _b = (0, react_1.useState)(undefined), value = _b[0], setValue = _b[1];
    (0, react_1.useEffect)(function () {
        function getValue() {
            return __awaiter(this, void 0, void 0, function () {
                var obj;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, uq.idObj(id)];
                        case 1:
                            obj = _a.sent();
                            setValue(obj);
                            return [2 /*return*/];
                    }
                });
            });
        }
        getValue();
    }, [id, uq]);
    if (value === null || value === undefined)
        return null;
    return (0, jsx_runtime_1.jsx)(Template, { value: value }, void 0);
}
var maxArr = 2000;
var caches = {};
function IdViewID(_a) {
    var id = _a.id, ID = _a.ID, Template = _a.Template;
    var _b = (0, react_1.useState)(undefined), value = _b[0], setValue = _b[1];
    (0, react_1.useEffect)(function () {
        function getValue() {
            return __awaiter(this, void 0, void 0, function () {
                var IDName, idCache, values, arr, val, promises, promise, ret, index;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            IDName = ID.name;
                            idCache = caches[IDName];
                            if (idCache === undefined) {
                                idCache = { ID: ID, values: {}, arr: [], promises: {} };
                                caches[IDName] = idCache;
                            }
                            values = idCache.values, arr = idCache.arr;
                            val = values[id];
                            if (!(val === undefined)) return [3 /*break*/, 2];
                            promises = idCache.promises;
                            promise = promises[id];
                            if (promise === undefined) {
                                promise = ID.uq.ID({ IDX: ID, id: id });
                                promises[id] = promise;
                            }
                            return [4 /*yield*/, promise];
                        case 1:
                            ret = _a.sent();
                            val = ret[0];
                            if (val === undefined) {
                                val = values[id] = null;
                            }
                            else {
                                values[id] = val;
                            }
                            delete promises[id];
                            return [3 /*break*/, 3];
                        case 2:
                            index = arr.findIndex(function (v) { return v === id; });
                            if (index >= 0)
                                arr.splice(index, 1);
                            _a.label = 3;
                        case 3:
                            arr.push(id);
                            if (arr.length > maxArr) {
                                arr.shift();
                            }
                            setValue(val);
                            return [2 /*return*/];
                    }
                });
            });
        }
        getValue();
    }, [id, ID]);
    if (!value)
        return null;
    return (0, jsx_runtime_1.jsx)(Template, { value: value !== null && value !== void 0 ? value : { id: undefined } }, void 0);
}
//# sourceMappingURL=IdView.js.map