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
exports.AdminLink = exports.EnumAdminRoleInEdit = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var tonwa_com_1 = require("tonwa-com");
var AdminPage_1 = require("./AdminPage");
var EnumAdminRoleInEdit;
(function (EnumAdminRoleInEdit) {
    EnumAdminRoleInEdit[EnumAdminRoleInEdit["sys"] = 1] = "sys";
    EnumAdminRoleInEdit[EnumAdminRoleInEdit["admin"] = 2] = "admin";
    EnumAdminRoleInEdit[EnumAdminRoleInEdit["nSys"] = -1] = "nSys";
    EnumAdminRoleInEdit[EnumAdminRoleInEdit["nAdmin"] = -2] = "nAdmin";
})(EnumAdminRoleInEdit = exports.EnumAdminRoleInEdit || (exports.EnumAdminRoleInEdit = {}));
function AdminLink(_a) {
    var _this = this;
    var LinkContent = _a.LinkContent, me = _a.me, loadAdmins = _a.loadAdmins, setAdmin = _a.setAdmin, setMeAdmin = _a.setMeAdmin;
    var nav = (0, tonwa_com_1.useNav)();
    var _b = (0, react_1.useState)(null), adminState = _b[0], setAdminState = _b[1];
    var load = (0, react_1.useCallback)(function () { return __awaiter(_this, void 0, void 0, function () {
        var retAdmins, state, _i, retAdmins_1, admin, id, role;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, loadAdmins()];
                case 1:
                    retAdmins = _a.sent();
                    if (!retAdmins)
                        return [2 /*return*/];
                    state = {
                        meAdmin: undefined,
                        sysAdmins: [],
                        admins: [],
                    };
                    for (_i = 0, retAdmins_1 = retAdmins; _i < retAdmins_1.length; _i++) {
                        admin = retAdmins_1[_i];
                        id = admin.id;
                        if (id === me) {
                            state.meAdmin = admin;
                            continue;
                        }
                        role = admin.role;
                        switch (role) {
                            case -1:
                                break;
                            case 1:
                                state.sysAdmins.push(admin);
                                break;
                            case 2:
                                state.admins.push(admin);
                                break;
                        }
                    }
                    setAdminState(state);
                    return [2 /*return*/];
            }
        });
    }); }, [me, loadAdmins]);
    (0, react_1.useEffect)(function () {
        load();
    }, [load]);
    if (adminState === null) {
        return (0, jsx_runtime_1.jsx)(tonwa_com_1.Spinner, {}, void 0);
    }
    var meAdmin = adminState.meAdmin, sysAdmins = adminState.sysAdmins, admins = adminState.admins;
    if (meAdmin === undefined)
        return null;
    var onClick = function () { return __awaiter(_this, void 0, void 0, function () {
        function nSetAdmin(user, role, assigned) {
            return setAdmin(user, role, assigned);
        }
        function nSetMeAdmin() {
            setAdminState({
                meAdmin: meAdmin,
                sysAdmins: undefined,
                admins: undefined,
            });
            return setMeAdmin();
        }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(adminState.sysAdmins === undefined)) return [3 /*break*/, 2];
                    return [4 /*yield*/, load()];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    nav.open((0, jsx_runtime_1.jsx)(AdminPage_1.AdminPage, { meAdmin: meAdmin, sysAdmins: sysAdmins, admins: admins, me: me, setAdmin: nSetAdmin, setMeAdmin: nSetMeAdmin }, void 0));
                    return [2 /*return*/];
            }
        });
    }); };
    return (0, jsx_runtime_1.jsx)(LinkContent, { onClick: onClick }, void 0);
}
exports.AdminLink = AdminLink;
//# sourceMappingURL=AdminLink.js.map