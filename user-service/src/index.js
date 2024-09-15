"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var CreateUser_1 = require("./commands/CreateUser");
var EventStore_1 = require("./events/EventStore");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.post("/users", function (req, res) {
    var _a = req.body, name = _a.name, role = _a.role, tenantId = _a.tenantId;
    var newUser = (0, CreateUser_1.createUser)({ name: name, role: role, tenantId: tenantId });
    (0, EventStore_1.saveEvent)({ type: "UserCreated", data: newUser });
    res.json(newUser);
});
app.listen(3000, function () {
    console.log("User service running on port 3000");
});
