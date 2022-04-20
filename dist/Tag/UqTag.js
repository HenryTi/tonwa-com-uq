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
exports.useUqTag = exports.UqTag = void 0;
var react_1 = require("react");
var UqTag = /** @class */ (function () {
    // currentTag: TagWithItems;
    function UqTag(_a) {
        var uq = _a.uq, TagGroup = _a.TagGroup, Tag = _a.Tag, TagItem = _a.TagItem, IxTag = _a.IxTag, IxIDTag = _a.IxIDTag, groups = _a.groups;
        this.tagGroups = {};
        this.groupsLoaded = false;
        this.uq = uq;
        this.TagGroup = TagGroup;
        this.IxTag = IxTag;
        this.Tag = Tag;
        this.TagItem = TagItem;
        this.IxIDTag = IxIDTag;
        this.groups = groups;
    }
    UqTag.create = function (uqTagProps) {
        var uqInProps = uqTagProps.uq;
        var catched = UqTag.catch.find(function (v) {
            var uq = v[0];
            return uq === uqInProps;
        });
        if (catched !== undefined) {
            return catched[1];
        }
        var ret = new UqTag(uqTagProps);
        UqTag.catch.push([uqInProps, ret]);
        return ret;
    };
    UqTag.prototype.is = function (uq, IxTag, Tag, TagItem) {
        return uq === this.uq
            && IxTag === this.IxTag
            && Tag === this.Tag
            && TagItem === this.TagItem;
    };
    UqTag.prototype.getTags = function (group) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.uq.IX({
                            IX: this.IxTag,
                            ix: group.id,
                            IDX: [this.Tag],
                        })];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    UqTag.prototype.getTagItems = function (tag) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.uq.IX({
                            IX: this.IxTag,
                            ix: tag.id,
                            IDX: [this.TagItem],
                        })];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    // return: tag id
    UqTag.prototype.saveTag = function (group, tag) {
        return __awaiter(this, void 0, void 0, function () {
            var ret, tags, p;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.uq.ActIX({
                            IX: this.IxTag,
                            ID: this.Tag,
                            values: [{ ix: group.id, xi: tag }]
                        })];
                    case 1:
                        ret = _a.sent();
                        tag.id = ret[0];
                        tags = group.tags;
                        if (!tags) {
                            tags = group.tags = [];
                        }
                        p = tags.findIndex(function (v) { return v.id === tag.id; });
                        if (p >= 0) {
                            Object.assign(tags[p], tag);
                        }
                        else {
                            if (!tag.items)
                                tag.items = [];
                            group.tags.push(tag);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UqTag.prototype.removeTag = function (group, tag) {
        return __awaiter(this, void 0, void 0, function () {
            var id, tags, p;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = group.id;
                        return [4 /*yield*/, this.uq.ActIX({
                                IX: this.IxTag,
                                values: [{
                                        ix: id,
                                        xi: -tag.id,
                                    }],
                            })];
                    case 1:
                        _a.sent();
                        tags = group.tags;
                        if (tags) {
                            p = tags.findIndex(function (v) { return v.id === tag.id; });
                            if (p >= 0)
                                tags.splice(p, 1);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UqTag.prototype.saveTagProp = function (tag, name, value) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.uq.ActIDProp(this.Tag, tag.id, name, value)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UqTag.prototype.saveTagItemName = function (tagItem, value) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.uq.ActIDProp(this.TagItem, tagItem.id, 'name', value)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UqTag.prototype.removeTagItem = function (tag, tagItem) {
        return __awaiter(this, void 0, void 0, function () {
            var id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = tag.id;
                        return [4 /*yield*/, this.uq.ActIX({
                                IX: this.IxTag,
                                values: [{ ix: id, xi: -tagItem.id }]
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UqTag.prototype.saveTagItem = function (tag, tagItem) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.uq.ActIX({
                            IX: this.IxTag,
                            ID: this.TagItem,
                            values: [{ ix: tag.id, xi: tagItem }]
                        })];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret[0]];
                }
            });
        });
    };
    UqTag.prototype.saveTagItems = function (values) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.uq.ActIX({
                            IX: this.IxIDTag,
                            values: values,
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UqTag.prototype.resetGroups = function () {
        for (var i in this.tagGroups) {
            var tagGroup = this.tagGroups[i];
            tagGroup.tick = 0;
        }
        this.groupsLoaded = false;
    };
    UqTag.prototype.loadGroups = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ret, _loop_1, _i, _a, group;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.groupsLoaded === true)
                            return [2 /*return*/];
                        return [4 /*yield*/, this.uq.ID({
                                IDX: this.TagGroup,
                                id: undefined,
                            })];
                    case 1:
                        ret = _b.sent();
                        _loop_1 = function (group) {
                            var g = ret.find(function (v) { return v.name === group.name; });
                            if (!g) {
                                throw Error("".concat(group.name, " is not defined in UQ"));
                            }
                            group.id = g.id;
                        };
                        for (_i = 0, _a = this.groups; _i < _a.length; _i++) {
                            group = _a[_i];
                            _loop_1(group);
                        }
                        this.groupsLoaded = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    UqTag.prototype.loadGroup = function (tagGroupName) {
        return __awaiter(this, void 0, void 0, function () {
            var tagGroup, tick, group, ret, retItems, tagColl, tags, _i, ret_1, row, tag, _a, retItems_1, row, ix, tag;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        tagGroup = this.tagGroups[tagGroupName];
                        if (tagGroup !== undefined) {
                            tick = tagGroup.tick;
                            if (Date.now() - tick < 3600 * 1000) {
                                return [2 /*return*/, tagGroup];
                            }
                            this.tagGroups[tagGroupName] = tagGroup = undefined;
                        }
                        group = this.groups.find(function (v) { return v.name === tagGroupName; });
                        if (group === undefined)
                            return [2 /*return*/];
                        return [4 /*yield*/, this.uq.IX({
                                IX: this.IxTag,
                                ix: group.id,
                                IDX: [this.Tag],
                            })];
                    case 1:
                        ret = _b.sent();
                        return [4 /*yield*/, this.uq.IX({
                                IX: this.IxTag,
                                IX1: this.IxTag,
                                ix: group.id,
                                IDX: [this.TagItem],
                            })];
                    case 2:
                        retItems = _b.sent();
                        tagColl = {};
                        tags = [];
                        for (_i = 0, ret_1 = ret; _i < ret_1.length; _i++) {
                            row = ret_1[_i];
                            tag = __assign({ items: [] }, row);
                            tagColl[row.id] = tag;
                            tags.push(tag);
                        }
                        for (_a = 0, retItems_1 = retItems; _a < retItems_1.length; _a++) {
                            row = retItems_1[_a];
                            ix = row.ix;
                            tag = tagColl[ix];
                            if (!tag)
                                continue;
                            tag.items.push(row);
                        }
                        tagGroup = {
                            name: group.name,
                            tick: Date.now(),
                            tags: tags,
                        };
                        return [2 /*return*/, this.tagGroups[tagGroupName] = tagGroup];
                }
            });
        });
    };
    UqTag.prototype.loadIDTags = function (tagGroup, id) {
        return __awaiter(this, void 0, void 0, function () {
            var idCheckedMap, ret, _i, ret_2, row, xi, _a, _b, tag, single, items, checked, _c, items_1, item, id_1;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        idCheckedMap = {};
                        return [4 /*yield*/, this.uq.IX({
                                IX: this.IxIDTag,
                                ix: id,
                            })];
                    case 1:
                        ret = _d.sent();
                        for (_i = 0, ret_2 = ret; _i < ret_2.length; _i++) {
                            row = ret_2[_i];
                            xi = row.xi;
                            idCheckedMap[xi] = true;
                        }
                        // assure radio box only show single value
                        for (_a = 0, _b = tagGroup.tags; _a < _b.length; _a++) {
                            tag = _b[_a];
                            single = tag.single, items = tag.items;
                            if (single !== 1)
                                continue;
                            checked = false;
                            for (_c = 0, items_1 = items; _c < items_1.length; _c++) {
                                item = items_1[_c];
                                id_1 = item.id;
                                if (checked === true) {
                                    if (idCheckedMap[id_1] === true) {
                                        idCheckedMap[id_1] = false;
                                    }
                                }
                                else {
                                    if (idCheckedMap[id_1] === true) {
                                        checked = true;
                                    }
                                }
                            }
                        }
                        return [2 /*return*/, idCheckedMap];
                }
            });
        });
    };
    UqTag.catch = [];
    return UqTag;
}());
exports.UqTag = UqTag;
function useUqTag(uqTagProps) {
    var uqTag = (0, react_1.useRef)(UqTag.create(uqTagProps)).current;
    return uqTag;
}
exports.useUqTag = useUqTag;
//# sourceMappingURL=UqTag.js.map