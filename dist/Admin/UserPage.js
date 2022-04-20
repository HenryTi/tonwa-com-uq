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
exports.UserPage = exports.UserTemplate = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var tonwa_com_1 = require("tonwa-com");
var tonwa_com_2 = require("tonwa-com");
var tonwa_com_3 = require("tonwa-com");
var tonwa_com_4 = require("tonwa-com");
var coms_1 = require("../coms");
var AdminLink_1 = require("./AdminLink");
var consts_1 = require("./consts");
function UserTemplate(_a) {
    var user = _a.user, assigned = _a.assigned;
    var name = user.name, nick = user.nick, icon = user.icon;
    return (0, jsx_runtime_1.jsxs)(tonwa_com_2.LMR, __assign({ className: consts_1.cnRow + consts_1.cnMYSm + consts_1.cnBg }, { children: [(0, jsx_runtime_1.jsx)(coms_1.Image, { src: icon, className: "me-4 align-self-start w-2-5c h-2-5c" }, void 0), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("b", { children: assigned !== null && assigned !== void 0 ? assigned : name }, void 0) }, void 0), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("span", __assign({ className: "me-3" }, { children: assigned ? name : '' }), void 0), (0, jsx_runtime_1.jsx)(tonwa_com_2.MutedSmall, __assign({ className: "text-muted me-3" }, { children: nick }), void 0)] }, void 0)] }, void 0), (0, jsx_runtime_1.jsx)(tonwa_com_1.FA, { name: "angle-right", className: "cursor-pointer" }, void 0)] }), void 0);
}
exports.UserTemplate = UserTemplate;
;
function UserPage(_a) {
    var _this = this;
    var admin = _a.admin, me = _a.me, setAdmin = _a.setAdmin, delAdmin = _a.delAdmin;
    var nav = (0, tonwa_com_1.useNav)();
    var id = admin.id, role = admin.role, operator = admin.operator, update = admin.update;
    var _b = (0, react_1.useState)(admin.assigned), assigned = _b[0], setAssigned = _b[1];
    var onDelAdmin = function () { return __awaiter(_this, void 0, void 0, function () {
        var ret;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, nav.confirm('do you really want to delete the admin?')];
                case 1:
                    ret = _a.sent();
                    if (!(ret === true)) return [3 /*break*/, 3];
                    return [4 /*yield*/, delAdmin()];
                case 2:
                    _a.sent();
                    /*
                    let { role } = admin;
                    await setAdmin(admin.id, -role, null);
                    let list = role === 1 ? sysAdmins : admins;
                    removeAdmin(list, admin);
                    */
                    nav.close();
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    }); };
    /*
    let removeAdmin = (list: Admin[], admin: Admin) => {
        let p = list.findIndex(v => v.id === admin.id);
        if (p >= 0) list.splice(p, 1);
    }
    */
    var onEditRemark = function () { return __awaiter(_this, void 0, void 0, function () {
        function onSubmit(data) {
            return __awaiter(this, void 0, void 0, function () {
                var newAssigned;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            newAssigned = data.assigned;
                            ;
                            return [4 /*yield*/, setAdmin(newAssigned)];
                        case 1:
                            _a.sent();
                            setAssigned(newAssigned);
                            nav.close();
                            return [2 /*return*/];
                    }
                });
            });
        }
        return __generator(this, function (_a) {
            nav.open((0, jsx_runtime_1.jsx)(tonwa_com_1.Page, __assign({ header: "Remark" }, { children: (0, jsx_runtime_1.jsxs)(tonwa_com_1.Form, __assign({ values: admin }, { children: [(0, jsx_runtime_1.jsx)(tonwa_com_3.String, { name: "assigned" }, void 0), (0, jsx_runtime_1.jsx)(tonwa_com_4.Submit, { onSubmit: onSubmit }, void 0)] }), void 0) }), void 0));
            return [2 /*return*/];
        });
    }); };
    function UserTemplate(_a) {
        var user = _a.user;
        var name = user.name, nick = user.nick, icon = user.icon;
        var vDel;
        if ((role === AdminLink_1.EnumAdminRoleInEdit.sys && Date.now() / 1000 - update < 24 * 3600)
            || operator === me
            || role === AdminLink_1.EnumAdminRoleInEdit.admin) {
            vDel = (0, jsx_runtime_1.jsxs)("button", __assign({ className: "btn btn-sm btn-outline-secondary", onClick: onDelAdmin }, { children: ["Remove ", role === AdminLink_1.EnumAdminRoleInEdit.sys ? 'system admin' : 'admin'] }), void 0);
        }
        return (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "d-flex border m-3 rounded-3 bg-white pe-5 py-4" }, { children: [(0, jsx_runtime_1.jsx)(coms_1.Image, { src: icon, className: "mx-5 w-2-5c h-2-5c" }, void 0), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "cursor-pointer", onClick: function () { return onEditRemark(); } }, { children: [(0, jsx_runtime_1.jsx)("small", __assign({ className: "text-muted me-3" }, { children: "Remark:" }), void 0), assigned !== null && assigned !== void 0 ? assigned : '-', (0, jsx_runtime_1.jsx)("span", __assign({ className: "ms-3" }, { children: (0, jsx_runtime_1.jsx)(tonwa_com_1.FA, { name: "pencil-square-o", className: "text-primary" }, void 0) }), void 0)] }), void 0), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("small", __assign({ className: "me-3 text-muted" }, { children: "Name:" }), void 0), " ", name] }, void 0), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("small", __assign({ className: "me-3 text-muted" }, { children: "Nick:" }), void 0), " ", nick] }, void 0)] }, void 0)] }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "d-flex m-3 mt-4 justify-content-end" }, { children: vDel }), void 0)] }, void 0);
    }
    return (0, jsx_runtime_1.jsx)(tonwa_com_1.Page, __assign({ header: " " }, { children: (0, jsx_runtime_1.jsx)(coms_1.UserView, { id: id, assigned: assigned, Template: UserTemplate }, void 0) }), void 0);
}
exports.UserPage = UserPage;
//# sourceMappingURL=UserPage.js.map