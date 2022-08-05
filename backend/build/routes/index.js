"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const employeesRoute_1 = __importDefault(require("./employeesRoute"));
const route = (0, express_1.Router)();
route.use('/employees', employeesRoute_1.default);
exports.default = route;
