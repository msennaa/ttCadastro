"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const EmployeesController_1 = __importDefault(require("../controllers/EmployeesController"));
const employeeMiddleware_1 = require("../middlewares/employeeMiddleware");
const employeesRoute = (0, express_1.Router)();
const employeesController = new EmployeesController_1.default();
employeesRoute.get('/', employeesController.getAll);
employeesRoute
    .post('/', employeeMiddleware_1.nameMiddleware, employeeMiddleware_1.departmentMiddleware, employeeMiddleware_1.salaryMiddleware, employeeMiddleware_1.cpfMiddleware, employeesController.create);
employeesRoute.put('/:id', employeesController.update);
employeesRoute.delete('/:id', employeesController.delete);
exports.default = employeesRoute;
