import { NextFunction, Request, Response } from "express";
import { validate } from "gerador-validador-cpf";

export const nameMiddleware = (req:Request, res:Response, next: NextFunction) => {
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
}

export const departmentMiddleware = (req:Request, res:Response, next: NextFunction) => {
  const { department } = req.body;

  if (!department || department === '') {
    return res.status(401).json({ message: "Department is required" });
  }

  if (typeof department !== 'string') {
    return res.status(401).json({ message: "Department must be a string" });
  }

  next();
}

export const salaryMiddleware = (req:Request, res:Response, next: NextFunction) => {
  const { salary } = req.body;

  if (!salary || salary < 0) {
    return res.status(401).json({ message: "Salary is required" });
  }

  if (typeof salary !== 'number') {
    return res.status(401).json({ message: "Salary must be a number" });
  }

  next();
}

export const cpfMiddleware = (req:Request, res:Response, next: NextFunction) => {
  const { cpf } = req.body;

  if (!cpf || cpf === '') {
    return res.status(401).json({ message: "Cpf is required" });
  }

  if (typeof cpf !== 'string') {
    return res.status(401).json({ message: "Name must be a string" });
  }

  if (validate(cpf) === false) {
    return res.status(401).json({ message: "Cpf inválido" });
  }

  console.log(validate(cpf));

  next();
}



