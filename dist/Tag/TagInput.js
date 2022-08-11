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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagInput = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var tonwa_com_1 = require("tonwa-com");
var UqTag_1 = require("./UqTag");
function TagInput(props) {
    var uqTagProps = props.uqTagProps, id = props.id, tagGroupName = props.tagGroupName, className = props.className, BandTemplate = props.BandTemplate, top = props.top, bottom = props.bottom;
    var uqTag = (0, UqTag_1.useUqTag)(uqTagProps);
    var _a = (0, react_1.useState)(null), tg = _a[0], setTg = _a[1];
    (0, react_1.useEffect)(function () {
        function loadGroup() {
            return __awaiter(this, void 0, void 0, function () {
                var ret, ret1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, uqTag.loadGroups()];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, uqTag.loadGroup(tagGroupName)];
                        case 2:
                            ret = _a.sent();
                            return [4 /*yield*/, uqTag.loadIDTags(ret, id)];
                        case 3:
                            ret1 = _a.sent();
                            setTg([ret, ret1]);
                            return [2 /*return*/];
                    }
                });
            });
        }
        loadGroup();
    }, [uqTag, tagGroupName, id]);
    if (!tg)
        return null;
    var tagGroup = tg[0], idTagValues = tg[1];
    var tags = tagGroup.tags;
    if (tags.length === 0)
        return null;
    BandTemplate = BandTemplate !== null && BandTemplate !== void 0 ? BandTemplate : DefaultBandTemplate;
    return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [top, (0, jsx_runtime_1.jsx)("div", __assign({ className: className }, { children: tags.map(function (v, index) { return (0, jsx_runtime_1.jsx)(TagItemInput, { sep: index === 0 ? null : undefined, uqTag: uqTag, tag: v, id: id, idTagValues: idTagValues, BandTemplate: BandTemplate }, index); }) }), void 0), bottom] }, void 0);
}
exports.TagInput = TagInput;
function TagItemInput(_a) {
    var _this = this;
    var uqTag = _a.uqTag, tag = _a.tag, id = _a.id, idTagValues = _a.idTagValues, BandTemplate = _a.BandTemplate, sep = _a.sep;
    var name = tag.name, items = tag.items;
    var _b = (0, react_1.useState)(idTagValues ? items.map(function (v) { return idTagValues[v.id] === true; }) : []), tagArr = _b[0], setTagArr = _b[1];
    var onCheckChange = function (tag, item, checked) { return __awaiter(_this, void 0, void 0, function () {
        var itemId, single, items, values, len, iMe, i, p, pid, index, _loop_1, _i, values_1, v;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    itemId = item.id;
                    single = tag.single, items = tag.items;
                    values = [];
                    if (single === 1) {
                        len = items.length;
                        iMe = void 0;
                        for (i = 0; i < len; i++) {
                            p = items[i];
                            if (p === item) {
                                iMe = i;
                                continue;
                            }
                            pid = p.id;
                            if (tagArr[i] === true) {
                                values.push({ ix: id, xi: -pid, index: i });
                            }
                        }
                        if (checked === false)
                            throw Error('radio should not be false');
                        values.push({ ix: id, xi: itemId, index: iMe });
                    }
                    else {
                        index = items.findIndex(function (v) { return v === item; });
                        values.push({ ix: id, xi: checked === true ? itemId : -itemId, index: index });
                    }
                    return [4 /*yield*/, uqTag.saveTagItems(values)];
                case 1:
                    _a.sent();
                    _loop_1 = function (v) {
                        var xi = v.xi, index = v.index;
                        var checkValue;
                        if (xi < 0) {
                            checkValue = false;
                        }
                        else {
                            checkValue = true;
                        }
                        if (index !== undefined) {
                            setTagArr(function (arr) {
                                var ret = __spreadArray([], arr, true);
                                ret[index] = checkValue;
                                return ret;
                            });
                        }
                    };
                    for (_i = 0, values_1 = values; _i < values_1.length; _i++) {
                        v = values_1[_i];
                        _loop_1(v);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    function TagItem(_a) {
        var tag = _a.tag, item = _a.item, index = _a.index;
        var id = tag.id, single = tag.single, name = tag.name;
        var type;
        var radioName;
        if (single === 1) {
            type = 'radio';
            radioName = 'tag-radio-' + name;
        }
        else {
            type = 'checkbox';
        }
        var checked = tagArr[index];
        return (0, jsx_runtime_1.jsxs)("label", __assign({ className: "w-min-8c me-3 my-2 form-check-label" }, { children: [(0, jsx_runtime_1.jsx)("input", { className: "form-check-input me-2", type: type, name: radioName, defaultChecked: checked, value: id, onChange: function (evt) { return onCheckChange(tag, item, evt.currentTarget.checked); } }, void 0), item.name] }), void 0);
    }
    if (items.length === 0)
        return null;
    return (0, jsx_runtime_1.jsx)(BandTemplate, __assign({ label: name, errors: undefined, memos: undefined, content: undefined, sep: sep }, { children: items.map(function (item, index) { return (0, jsx_runtime_1.jsx)(TagItem, { tag: tag, item: item, index: index }, item.id); }) }), void 0);
}
function DefaultBandTemplate(props) {
    var label = props.label, children = props.children, sep = props.sep;
    var vLabel;
    var cnContent = 'col-sm-10 d-flex pe-0 align-items-center';
    if (label) {
        vLabel = (0, jsx_runtime_1.jsx)("label", __assign({ className: "col-sm-2 col-form-label text-sm-end tonwa-bg-gray-1 border-end py-3" }, { children: (0, jsx_runtime_1.jsx)("b", { children: label }, void 0) }), void 0);
    }
    else {
        cnContent += ' offset-sm-2';
    }
    return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(tonwa_com_1.Sep, { sep: sep }, void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "row bg-white mx-0" }, { children: [vLabel, (0, jsx_runtime_1.jsx)("div", __assign({ className: cnContent }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "flex-grow-1" }, { children: children }), void 0) }), void 0)] }), void 0)] }, void 0);
}
//# sourceMappingURL=TagInput.js.map