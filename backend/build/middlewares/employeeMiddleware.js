"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cpfMiddleware = exports.salaryMiddleware = exports.departmentMiddleware = exports.nameMiddleware = void 0;
const gerador_validador_cpf_1 = require("gerador-validador-cpf");
const nameMiddleware = (req, res, next) => {
    const { name } = req.body;
    if (!name || name === '') {
        return res.status(401).json({ message: "Name is required" });
    }
    if (typeof name !== 'string') {
        return res.status(401).json({ message: "Name must be a string" });
    }
    if (name.length < 3) {
        return res.status(401).json({ message: "Name must be at least 3 characters" });
    }
    next();
};
exports.nameMiddleware = nameMiddleware;
const departmentMiddleware = (req, res, next) => {
    const { department } = req.body;
    if (!department || department === '') {
        return res.status(401).json({ message: "Department is required" });
    }
    if (typeof department !== 'string') {
        return res.status(401).json({ message: "Department must be a string" });
    }
    next();
};
exports.departmentMiddleware = departmentMiddleware;
const salaryMiddleware = (req, res, next) => {
    const { salary } = req.body;
    if (!salary || salary < 0) {
        return res.status(401).json({ message: "Salary is required" });
    }
    if (typeof salary !== 'number') {
        return res.status(401).json({ message: "Salary must be a number" });
    }
    next();
};
exports.salaryMiddleware = salaryMiddleware;
const cpfMiddleware = (req, res, next) => {
    const { cpf } = req.body;
    if (!cpf || cpf === '') {
        return res.status(401).json({ message: "Cpf is required" });
    }
    if (typeof cpf !== 'string') {
        return res.status(401).json({ message: "Name must be a string" });
    }
    if ((0, gerador_validador_cpf_1.validate)(cpf) === false) {
        return res.status(401).json({ message: "Cpf inválido" });
    }
    console.log((0, gerador_validador_cpf_1.validate)(cpf));
    next();
};
exports.cpfMiddleware = cpfMiddleware;
