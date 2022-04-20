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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagGroupPage = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var tonwa_com_1 = require("tonwa-com");
var tonwa_com_2 = require("tonwa-com");
var tonwa_com_3 = require("tonwa-com");
var tonwa_com_4 = require("tonwa-com");
var tonwa_com_5 = require("tonwa-com");
var ID_1 = require("../ID");
var EditTagPage_1 = require("./EditTagPage");
function TagGroupPage(props) {
    var _this = this;
    var uqTag = props.uqTag, icon = props.icon, group = props.group;
    var nav = (0, tonwa_com_2.useNav)();
    var listEditContext = (0, ID_1.useIdListEdit)(group.tags);
    (0, react_1.useEffect)(function () {
        function loadGroup() {
            return __awaiter(this, void 0, void 0, function () {
                var tagGroup;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, uqTag.loadGroup(group.name)];
                        case 1:
                            tagGroup = _a.sent();
                            listEditContext.setItems(tagGroup.tags);
                            return [2 /*return*/];
                    }
                });
            });
        }
        loadGroup();
    }, [uqTag, group, listEditContext]);
    function TagView(_a) {
        var tag = _a.value;
        var name = tag.name, vice = tag.vice;
        return (0, jsx_runtime_1.jsxs)(tonwa_com_1.LMR, __assign({ className: "px-3 py-2 align-items-center" }, { children: [(0, jsx_runtime_1.jsx)(tonwa_com_1.FA, { name: icon, className: "text-info me-3" }, void 0), (0, jsx_runtime_1.jsx)("div", { children: name }, void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "ms-3 small text-muted" }, { children: vice }), void 0), (0, jsx_runtime_1.jsx)(tonwa_com_1.FA, { name: "angle-right" }, void 0)] }), void 0);
    }
    var renderFields = function () {
        return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(tonwa_com_3.BandString, { name: "name", label: "Name", maxLength: 50, rule: tonwa_com_3.ruleIsRequired }, void 0), (0, jsx_runtime_1.jsx)(tonwa_com_3.BandString, { name: "vice", label: "Discription", maxLength: 100 }, void 0), (0, jsx_runtime_1.jsx)(tonwa_com_3.BandCheck, { name: "single", label: "Singular", checkedValue: 1, uncheckedValue: 0 }, void 0)] }, void 0);
    };
    var onTagClick = function (tag) {
        nav.open(function () { return __awaiter(_this, void 0, void 0, function () {
            var onRemoveTag;
            var _this = this;
            return __generator(this, function (_a) {
                onRemoveTag = function () { return __awaiter(_this, void 0, void 0, function () {
                    var name, ret;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                name = tag.name;
                                return [4 /*yield*/, nav.confirm("Do you really want to remove tag '".concat(name, "'?"))];
                            case 1:
                                ret = _a.sent();
                                if (!(ret === true)) return [3 /*break*/, 3];
                                return [4 /*yield*/, uqTag.removeTag(group, tag)];
                            case 2:
                                _a.sent();
                                //onTagChanged(tag, true);
                                listEditContext.onItemDeleted(tag);
                                nav.close();
                                _a.label = 3;
                            case 3: return [2 /*return*/];
                        }
                    });
                }); };
                return [2 /*return*/, (0, jsx_runtime_1.jsx)(EditTagPage_1.EditTagPage, __assign({}, props, { tag: tag, onRemoveTag: onRemoveTag, renderFields: renderFields }), void 0)];
            });
        }); });
    };
    var onTagAdd = function () {
        var onSubmit = function (data) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, uqTag.saveTag(group, data)];
                    case 1:
                        _a.sent();
                        listEditContext.onItemChanged(data);
                        nav.close();
                        return [2 /*return*/];
                }
            });
        }); };
        nav.open((0, jsx_runtime_1.jsx)(tonwa_com_2.Page, __assign({ header: "Add tag" }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "p-3" }, { children: (0, jsx_runtime_1.jsxs)(tonwa_com_4.Form, __assign({ values: { single: 0 } }, { children: [renderFields(), (0, jsx_runtime_1.jsx)(tonwa_com_5.Band, { children: (0, jsx_runtime_1.jsx)(tonwa_com_4.Submit, { onSubmit: onSubmit }, void 0) }, void 0)] }), void 0) }), void 0) }), void 0));
    };
    var name = group.name, vice = group.vice;
    var right = (0, jsx_runtime_1.jsxs)("button", __assign({ className: "btn btn-sm btn-outline-primary me-2", onClick: onTagAdd }, { children: [(0, jsx_runtime_1.jsx)(tonwa_com_1.FA, { name: "plus" }, void 0), " Tag"] }), void 0);
    return (0, jsx_runtime_1.jsx)(tonwa_com_2.Page, __assign({ header: vice !== null && vice !== void 0 ? vice : name, right: right }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "" }, { children: (0, jsx_runtime_1.jsx)(ID_1.IDListEdit, { context: listEditContext, ItemView: TagView, onItemClick: onTagClick }, void 0) }), void 0) }), void 0);
}
exports.TagGroupPage = TagGroupPage;
//# sourceMappingURL=TagGroupPage.js.map