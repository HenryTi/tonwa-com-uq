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
exports.EditTagPage = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var tonwa_com_1 = require("tonwa-com");
var tonwa_com_2 = require("tonwa-com");
var tonwa_com_3 = require("tonwa-com");
var tonwa_com_4 = require("tonwa-com");
var ID_1 = require("../ID");
var tonwa_com_5 = require("tonwa-com");
function EditTagPage(_a) {
    var uqTag = _a.uqTag, tag = _a.tag, onRemoveTag = _a.onRemoveTag, renderFields = _a.renderFields;
    var nav = (0, tonwa_com_1.useNav)();
    var listEditContext = (0, ID_1.useIdListEdit)(tag.items);
    var pageRight = (0, jsx_runtime_1.jsxs)("button", __assign({ className: "btn btn-sm btn-outline-primary me-2", onClick: onRemoveTag }, { children: [(0, jsx_runtime_1.jsx)(tonwa_com_1.FA, { name: "trash" }, void 0), " Delete"] }), void 0);
    function onDeleteItem(tagItem) {
        return __awaiter(this, void 0, void 0, function () {
            var name, ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = tagItem.name;
                        return [4 /*yield*/, nav.confirm("Do you really want to remove tag '".concat(name, "'?"))];
                    case 1:
                        ret = _a.sent();
                        if (!(ret === true)) return [3 /*break*/, 3];
                        return [4 /*yield*/, uqTag.removeTagItem(tag, tagItem)];
                    case 2:
                        _a.sent();
                        listEditContext.onItemDeleted(tagItem);
                        nav.close();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    function FormTagItem(_a) {
        var tagItem = _a.tagItem, onSubmit = _a.onSubmit, withDelete = _a.withDelete;
        return (0, jsx_runtime_1.jsxs)(tonwa_com_3.Form, __assign({ values: tagItem, className: "container my-3" }, { children: [(0, jsx_runtime_1.jsx)(tonwa_com_1.BandString, { name: "name", label: "Name" }, void 0), (0, jsx_runtime_1.jsx)(tonwa_com_4.Band, { children: (0, jsx_runtime_1.jsxs)(tonwa_com_1.LMR, { children: [(0, jsx_runtime_1.jsx)(tonwa_com_3.Submit, { onSubmit: onSubmit }, void 0), withDelete && (0, jsx_runtime_1.jsx)(tonwa_com_5.ButtonAsync, __assign({ className: "btn btn-sm btn-outline-primary me-2", onClick: function () { return onDeleteItem(tagItem); } }, { children: "Delete" }), void 0)] }, void 0) }, void 0)] }), void 0);
    }
    function onItemAdd() {
        function AddPage() {
            function onAddSubmit(data) {
                return __awaiter(this, void 0, void 0, function () {
                    var tagItemId;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, uqTag.saveTagItem(tag, data)];
                            case 1:
                                tagItemId = _a.sent();
                                data.id = tagItemId;
                                listEditContext.onItemChanged(data);
                                nav.close();
                                return [2 /*return*/];
                        }
                    });
                });
            }
            return (0, jsx_runtime_1.jsx)(tonwa_com_1.Page, __assign({ header: "Add tag" }, { children: (0, jsx_runtime_1.jsx)(FormTagItem, { tagItem: undefined, onSubmit: onAddSubmit }, void 0) }), void 0);
        }
        nav.open((0, jsx_runtime_1.jsx)(AddPage, {}, void 0));
    }
    function onItemEdit(tagItem) {
        function onEditSubmit(data) {
            return __awaiter(this, void 0, void 0, function () {
                var name;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            name = data['name'];
                            return [4 /*yield*/, uqTag.saveTagItemName(data, name)];
                        case 1:
                            _a.sent();
                            listEditContext.onItemChanged(data);
                            nav.close();
                            return [2 /*return*/];
                    }
                });
            });
        }
        function EditPage() {
            return (0, jsx_runtime_1.jsx)(tonwa_com_1.Page, __assign({ header: "Edit 1 tag item" }, { children: (0, jsx_runtime_1.jsx)(FormTagItem, { tagItem: tagItem, onSubmit: onEditSubmit, withDelete: true }, void 0) }), void 0);
        }
        nav.open((0, jsx_runtime_1.jsx)(EditPage, {}, void 0));
    }
    return (0, jsx_runtime_1.jsx)(tonwa_com_1.Page, __assign({ header: 'Edit', right: pageRight }, { children: (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(tonwa_com_1.Detail, __assign({ values: tag }, { children: renderFields() }), void 0), (0, jsx_runtime_1.jsx)(tonwa_com_1.Sep, { sep: 2 }, void 0), (0, jsx_runtime_1.jsxs)(tonwa_com_1.LMR, __assign({ className: "mt-4 mb-1 px-3 bg-light" }, { children: [(0, jsx_runtime_1.jsx)("b", { children: "Items" }, void 0), (0, jsx_runtime_1.jsxs)("button", __assign({ className: "btn btn-sm btn-primary", onClick: onItemAdd }, { children: [(0, jsx_runtime_1.jsx)(tonwa_com_1.FA, { name: "plus" }, void 0), " Item"] }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)(tonwa_com_1.Sep, { sep: 2 }, void 0), (0, jsx_runtime_1.jsx)(ID_1.IDListEdit, { none: (0, jsx_runtime_1.jsx)(tonwa_com_2.MutedSmall, __assign({ className: "d-block m-3" }, { children: "no items" }), void 0), context: listEditContext, ItemView: ItemView, onItemClick: onItemEdit }, void 0), (0, jsx_runtime_1.jsx)(tonwa_com_1.Sep, { sep: 2 }, void 0)] }, void 0) }), void 0);
}
exports.EditTagPage = EditTagPage;
function ItemView(_a) {
    var tagItem = _a.value;
    var name = tagItem.name;
    return (0, jsx_runtime_1.jsxs)(tonwa_com_1.LMR, __assign({ className: "px-3 py-2 align-items-center" }, { children: [(0, jsx_runtime_1.jsx)(tonwa_com_1.FA, { className: "text-info me-3", name: "chevron-circle-right" }, void 0), (0, jsx_runtime_1.jsx)("span", { children: name }, void 0), (0, jsx_runtime_1.jsx)("span", {}, void 0)] }), void 0);
}
//# sourceMappingURL=EditTagPage.js.map