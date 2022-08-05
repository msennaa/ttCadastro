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
const UserService_1 = __importDefault(require("../services/UserService"));
class UserController {
    constructor() {
        this.service = new UserService_1.default();
        this.getAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const allUsers = yield this.service.getAll();
            return res.status(200).json(allUsers);
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { name, department, salary, birthDate } = req.body;
            const newUser = yield this.service.create(name, department, salary, birthDate);
            return res.status(200).json(newUser);
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { name, department, salary, birthDate } = req.body;
            const updatedUser = this.service.update(id, name, department, salary, birthDate);
        });
    }
}
exports.default = UserController;
