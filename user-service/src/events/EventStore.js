"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEvents = exports.saveEvent = void 0;
var events = [];
var saveEvent = function (event) {
    events.push(event);
    console.log("New Event Created");
};
exports.saveEvent = saveEvent;
var getEvents = function () { return events; };
exports.getEvents = getEvents;
