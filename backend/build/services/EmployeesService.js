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
class EmployeesService {
    constructor() {
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            const allEmployees = yield Employees_1.default.findAll();
            return allEmployees;
        });
        this.create = (name, department, salary, cpf, birthDate) => __awaiter(this, void 0, void 0, function* () {
            const allEmployees = yield Employees_1.default.findAll();
            const alreadyExists = allEmployees.find((employee) => employee.cpf === cpf);
            if (alreadyExists) {
                return { message: "Usuário já existe" };
            }
            const newEmployee = yield Employees_1.default.create({ name, department, salary, cpf, birthDate });
            return newEmployee;
        });
        this.update = (id, name, department, salary, birthDate, cpf) => __awaiter(this, void 0, void 0, function* () {
            const findEmployee = yield Employees_1.default.findByPk(id);
            if (!findEmployee) {
                return { message: "Usario não encontrado" };
            }
            const updatedEmployee = yield Employees_1.default.update({ name, department, salary, cpf, birthDate }, { where: { id } });
            return updatedEmployee;
        });
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            const findEmployee = yield Employees_1.default.findByPk(id);
            if (!findEmployee) {
                return { message: "Usario não encontrado" };
            }
            const deletedEmployee = yield Employees_1.default.destroy({ where: { id } });
            return deletedEmployee;
        });
    }
}
exports.default = EmployeesService;
