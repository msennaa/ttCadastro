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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Employees_1 = __importDefault(require("../database/models/Employees"));
const EmployeesService_1 = __importDefault(require("../services/EmployeesService"));
class EmployeesController {
    constructor() {
        this.service = new EmployeesService_1.default();
        this.getAll = (_req, res) => __awaiter(this, void 0, void 0, function* () {
            const allEmployees = yield this.service.getAll();
            return res.status(200).json(allEmployees);
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { name, department, salary, cpf, birthDate } = req.body;
            const newEmployee = yield this.service.create(name, department, salary, cpf, birthDate);
            if (newEmployee === { message: 'Employee already exists' }) {
                return res.status(401).json({ message: 'Employee already exists' });
            }
            return res.status(200).json(newEmployee);
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { name, department, salary, cpf, birthDate } = req.body;
            const findEmployee = yield Employees_1.default.findByPk(Number(id));
            if (!findEmployee) {
                return res.status(401).json({ message: "Employee not found" });
            }
            yield this.service.update(Number(id), name, department, salary, birthDate, cpf);
            return res.status(201).json({ message: "Employee updated" });
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const findEmployee = yield Employees_1.default.findByPk(Number(id));
            if (!findEmployee) {
                return res.status(401).json({ message: "Employee not found" });
            }
            yield this.service.delete(Number(id));
            return res.status(201).json({ message: "Usuário deletado" });
        });
    }
}
exports.default = EmployeesController;
