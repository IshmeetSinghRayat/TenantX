"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
var createUser = function (command) {
    return {
        id: Math.random().toString(36).substring(2, 9),
        name: command.name,
        role: command.role,
        tenantId: command.tenantId,
    };
};
exports.createUser = createUser;
