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
exports.AdminPage = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var tonwa_com_1 = require("tonwa-com");
var coms_1 = require("../coms");
var SelectUser_1 = require("../coms/SelectUser");
var AdminLink_1 = require("./AdminLink");
var UserPage_1 = require("./UserPage");
var MeSysAdminPage_1 = require("./MeSysAdminPage");
var consts_1 = require("./consts");
var ListEdit_1 = require("../ListEdit");
var ListEdit_2 = require("../ListEdit");
function AdminPage(props) {
    var _this = this;
    var nav = (0, tonwa_com_1.useNav)();
    var me = props.me, meAdmin = props.meAdmin, sysAdmins = props.sysAdmins, admins = props.admins, setAdmin = props.setAdmin;
    var showMeSysAdmin = function () {
        nav.open((0, jsx_runtime_1.jsx)(MeSysAdminPage_1.MeSysAdminPage, __assign({}, props), void 0));
    };
    var onUser = function (admin, listEditContext) { return __awaiter(_this, void 0, void 0, function () {
        function setAdminUser(assigned) {
            return __awaiter(this, void 0, void 0, function () {
                var id, role;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            id = admin.id, role = admin.role;
                            return [4 /*yield*/, setAdmin(id, role, assigned)];
                        case 1:
                            _a.sent();
                            listEditContext.onItemChanged(__assign(__assign({}, admin), { assigned: assigned }));
                            return [2 /*return*/];
                    }
                });
            });
        }
        function delAdmin() {
            return __awaiter(this, void 0, void 0, function () {
                var id, role;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            id = admin.id, role = admin.role;
                            return [4 /*yield*/, setAdmin(id, -role, null)];
                        case 1:
                            _a.sent();
                            listEditContext.onItemDeleted(admin);
                            return [2 /*return*/];
                    }
                });
            });
        }
        return __generator(this, function (_a) {
            nav.open((0, jsx_runtime_1.jsx)(UserPage_1.UserPage, { me: me, admin: admin, setAdmin: setAdminUser, delAdmin: delAdmin }, void 0));
            return [2 /*return*/];
        });
    }); };
    function Me() {
        switch (meAdmin.role) {
            default: return null;
            case AdminLink_1.EnumAdminRoleInEdit.nSys:
                return (0, jsx_runtime_1.jsx)(MeSystemAdmin, { quiting: true }, void 0);
            case AdminLink_1.EnumAdminRoleInEdit.sys:
                return (0, jsx_runtime_1.jsx)(MeSystemAdmin, { quiting: false }, void 0);
            case AdminLink_1.EnumAdminRoleInEdit.admin:
                return (0, jsx_runtime_1.jsxs)("div", __assign({ className: consts_1.cnRow + consts_1.cnBg + consts_1.cnMYLg }, { children: [consts_1.faInfo, " I am an admin"] }), void 0);
        }
    }
    function MeSystemAdmin(_a) {
        var quiting = _a.quiting;
        var msg = quiting === true ?
            'I am quiting system admin'
            :
                'I am a system admin';
        return (0, jsx_runtime_1.jsxs)(tonwa_com_1.LMR, __assign({ className: 'px-3 py-3 align-items-center text-danger cursor-pointer border-top border-bottom', onClick: showMeSysAdmin }, { children: [consts_1.faInfo, (0, jsx_runtime_1.jsx)("b", { children: msg }, void 0), (0, jsx_runtime_1.jsx)(tonwa_com_1.FA, { name: "angle-right" }, void 0)] }), void 0);
    }
    /*
    function SysAdmins(): JSX.Element {
        const listEditContext = useListEdit(sysAdmins, (item1, item2) => item1.id === item2.id);
        switch (meAdmin.role) {
            case EnumAdminRoleInEdit.nSys: return null;
            case EnumAdminRoleInEdit.admin: return null;
        }

        return <div className="m-3 border rounded-3 border-2">
            <div className={cnRow + ' small bg-light border-bottom rounded-top rounded-3'}>
                <LMR className="align-items-end">
                    <div>System admins</div>
                    <div className="ms-3 small text-muted">System admin is an admin, and can add or delete admin</div>
                    <Add role={EnumAdminRoleInEdit.sys} />
                </LMR>
            </div>
            <ListEdit context={listEditContext} ItemView={AdminItem} onItemClick={admin => onUser(admin, listEditContext)} />
        </div>;
    }
    */
    function Admins(_a) {
        var list = _a.list, enumAdminRoleInEdit = _a.enumAdminRoleInEdit, caption = _a.caption, memo = _a.memo;
        var listEditContext = (0, ListEdit_2.useListEdit)(list, function (item1, item2) { return item1.id === item2.id; });
        switch (meAdmin.role) {
            case AdminLink_1.EnumAdminRoleInEdit.nSys: return null;
            case AdminLink_1.EnumAdminRoleInEdit.admin: return null;
        }
        function onAddAdmin() {
            return __awaiter(this, void 0, void 0, function () {
                var captionSelectUser, ret, user, assigned, tick, admin, listAdd, listDel;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            captionSelectUser = 'Add ' + (enumAdminRoleInEdit === AdminLink_1.EnumAdminRoleInEdit.sys ? 'system admin' : 'admin');
                            return [4 /*yield*/, nav.call((0, jsx_runtime_1.jsx)(SelectUser_1.SelectUser, { header: captionSelectUser }, void 0))];
                        case 1:
                            ret = _a.sent();
                            // let ret = await this.call<any, CAdminBase>(VAddUser, role);
                            if (!ret)
                                return [2 /*return*/];
                            user = ret.id, assigned = ret.assigned;
                            return [4 /*yield*/, setAdmin(user, enumAdminRoleInEdit, assigned)];
                        case 2:
                            _a.sent();
                            tick = Date.now() / 1000;
                            admin = {
                                id: user,
                                user: user,
                                role: enumAdminRoleInEdit,
                                operator: undefined,
                                assigned: assigned,
                                create: tick,
                                update: tick,
                            };
                            if (enumAdminRoleInEdit === 1) {
                                listAdd = sysAdmins;
                                listDel = admins;
                            }
                            else {
                                listAdd = admins;
                                listDel = sysAdmins;
                            }
                            listAdd.unshift(admin);
                            removeAdmin(listDel, admin);
                            return [2 /*return*/];
                    }
                });
            });
        }
        function removeAdmin(list, admin) {
            var p = list.findIndex(function (v) { return v.id === admin.id; });
            if (p >= 0)
                list.splice(p, 1);
        }
        return (0, jsx_runtime_1.jsxs)("div", __assign({ className: "m-3 border rounded-3 border-2" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "pt-2 pb-1 ps-3 pe-1 small bg-light border-bottom rounded-top rounded-3" }, { children: (0, jsx_runtime_1.jsxs)(tonwa_com_1.LMR, __assign({ className: "align-items-end" }, { children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("b", { children: caption }, void 0) }, void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "ms-4 small text-muted" }, { children: memo }), void 0), (0, jsx_runtime_1.jsx)("button", __assign({ className: "btn btn-sm btn-outline-success", onClick: onAddAdmin }, { children: (0, jsx_runtime_1.jsx)(tonwa_com_1.FA, { name: "plus" }, void 0) }), void 0)] }), void 0) }), void 0), (0, jsx_runtime_1.jsx)(ListEdit_1.ListEdit, { context: listEditContext, ItemView: AdminItem, onItemClick: function (admin) { return onUser(admin, listEditContext); } }, void 0)] }), void 0);
    }
    function AdminItem(_a) {
        var admin = _a.value;
        var id = admin.id, assigned = admin.assigned;
        return (0, jsx_runtime_1.jsx)(coms_1.UserView, { id: id, assigned: assigned, Template: UserPage_1.UserTemplate }, void 0);
    }
    return (0, jsx_runtime_1.jsx)(tonwa_com_1.Page, __assign({ header: "Admin" }, { children: (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(Me, {}, void 0), (0, jsx_runtime_1.jsx)(Admins, { list: sysAdmins, enumAdminRoleInEdit: AdminLink_1.EnumAdminRoleInEdit.sys, caption: "System admins", memo: "System admin is an admin, and can add or delete admin" }, void 0), (0, jsx_runtime_1.jsx)(Admins, { list: admins, enumAdminRoleInEdit: AdminLink_1.EnumAdminRoleInEdit.admin, caption: "Admins", memo: "Admin can define user roles" }, void 0)] }, void 0) }), void 0);
}
exports.AdminPage = AdminPage;
//# sourceMappingURL=AdminPage.js.map