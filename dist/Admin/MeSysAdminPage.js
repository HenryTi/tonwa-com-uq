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
exports.MeSysAdminPage = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var tonwa_com_1 = require("tonwa-com");
var consts_1 = require("./consts");
function MeSysAdminPage(props) {
    var _this = this;
    var nav = (0, tonwa_com_1.useNav)();
    var meAdmin = props.meAdmin, sysAdmins = props.sysAdmins, setMeAdmin = props.setMeAdmin;
    function content() {
        switch (meAdmin.role) {
            default: return null;
            case -1: return renderQuiting();
            case 1: return renderAm();
        }
    }
    function showMeSysAdmin() {
        nav.open((0, jsx_runtime_1.jsx)(MeSysAdminPage, __assign({}, props), void 0));
    }
    var onMeSystemAdmin = function () { return __awaiter(_this, void 0, void 0, function () {
        var role;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, setMeAdmin()];
                case 1:
                    _a.sent();
                    role = meAdmin.role;
                    meAdmin.role = -role;
                    meAdmin.update = Date.now() / 1000;
                    nav.close();
                    return [2 /*return*/];
            }
        });
    }); };
    function renderQuiting() {
        var update = meAdmin.update;
        var dateUpdate = new Date(update * 1000);
        var dateUpdateNextDay = new Date((update + 24 * 3600) * 1000);
        return (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)(tonwa_com_1.LMR, __assign({ className: consts_1.cnRow + consts_1.cnBg + consts_1.cnMYLg + ' text-danger cursor-pointer', onClick: showMeSysAdmin }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "d-flex justify-content-center p-3" }, { children: [consts_1.faInfo, (0, jsx_runtime_1.jsx)("b", { children: "I am quiting system admim" }, void 0)] }), void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ className: consts_1.cnSmallMuted + ' my-3 d-flex justify-content-center ' }, { children: ["You quit at ", dateUpdate.toLocaleDateString(), " ", dateUpdate.toLocaleTimeString(), ", can restore before ", dateUpdateNextDay.toLocaleDateString(), " ", dateUpdateNextDay.toLocaleTimeString()] }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "pt-3" }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "d-flex justify-content-center my-3" }, { children: (0, jsx_runtime_1.jsx)("button", __assign({ className: "btn btn-outline-primary", onClick: onMeSystemAdmin }, { children: "Restore system admin" }), void 0) }), void 0) }), void 0)] }, void 0);
    }
    function renderAm() {
        return (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: consts_1.cnRow + consts_1.cnBg + consts_1.cnMYLg + ' text-danger cursor-pointer text-center mt-5', onClick: showMeSysAdmin }, { children: [consts_1.faInfo, (0, jsx_runtime_1.jsx)("b", { children: "I am a system admim" }, void 0)] }), void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "pt-3" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "d-flex justify-content-center my-3" }, { children: (0, jsx_runtime_1.jsx)("button", __assign({ className: "btn btn-outline-primary", disabled: sysAdmins.length === 0, onClick: onMeSystemAdmin }, { children: "Quit system admin" }), void 0) }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "d-flex justify-content-center my-3" }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: consts_1.cnSmallMuted }, { children: "You can restore in 24 hours after quiting" }), void 0) }), void 0)] }), void 0)] }, void 0);
    }
    return (0, jsx_runtime_1.jsx)(tonwa_com_1.Page, __assign({ header: "System admin" }, { children: content() }), void 0);
}
exports.MeSysAdminPage = MeSysAdminPage;
//# sourceMappingURL=MeSysAdminPage.js.map