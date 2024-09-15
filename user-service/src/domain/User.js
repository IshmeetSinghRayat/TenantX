"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.UserRole = void 0;
var t = require("io-ts");
exports.UserRole = t.union([t.literal("Admin"), t.literal("Customer")]);
exports.User = t.type({
    id: t.string,
    name: t.string,
    role: exports.UserRole,
    tenantId: t.string,
});
