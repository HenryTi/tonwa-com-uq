"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSender = void 0;
var mobileRegex = /^[0-9]*$/;
var emailRegex = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
var senders = [
    { type: 'mobile', caption: '手机号', regex: mobileRegex },
    { type: 'email', caption: '邮箱', regex: emailRegex }
];
function getSender(un) {
    var sender = senders.find(function (v) { return v.regex.test(un) === true; });
    return sender;
}
exports.getSender = getSender;
//# sourceMappingURL=tools.js.map