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
const Users_1 = __importDefault(require("../database/models/Users"));
class UserService {
    constructor() {
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            const allUsers = yield Users_1.default.findAll();
            return allUsers;
        });
        this.create = (name, department, salary, birthDate) => __awaiter(this, void 0, void 0, function* () {
            const newUser = yield Users_1.default.create({ name, department, salary, birthDate });
            return newUser;
        });
        this.update = (id, name, department, salary, birthDate) => __awaiter(this, void 0, void 0, function* () {
            const updatedUser = yield Users_1.default.update({ name, department, salary, birthDate }, { where: { id } });
            return updatedUser;
        });
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            const deletedUser = yield Users_1.default.destroy({ where: { id } });
            return deletedUser;
        });
    }
}
exports.default = UserService;
