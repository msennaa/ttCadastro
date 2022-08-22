import { Request, Response } from "express";
import employees from "../database/models/Employees";
import UserService from "../services/EmployeesService";

export default class EmployeesController {
  service = new UserService();

  getAll = async (_req:Request, res:Response) => {
    const allEmployees = await this.service.getAll();
    return res.status(200).json(allEmployees);
  }

  create = async (req:Request, res:Response) => {
    const { name, department, salary, cpf, birthDate } = req.body;
    const newEmployee = await this.service.create(name, department, salary, cpf, birthDate);

    if (newEmployee === { message: 'Employee already exists'} ) {
      return res.status(401).json({ message: 'Employee already exists' })
    }

    return res.status(200).json(newEmployee);
  }

  update = async (req:Request, res:Response) => {
    const { id } = req.params;
    const { name, department, salary, cpf, birthDate } = req.body;
    const findEmployee = await employees.findByPk(Number(id));

    if (!findEmployee) {
      return res.status(401).json({ message: "Employee not found" });
    }

    await this.service.update(Number(id), name, department, salary, birthDate, cpf);

    return res.status(201).json({ message: "Employee updated"});
  }

  delete = async (req:Request, res:Response) => {
    const { id } = req.params;
    const findEmployee = await employees.findByPk(Number(id));

    if (!findEmployee) {
      return res.status(401).json({ message: "Employee not found" });
    }

    await this.service.delete(Number(id));
    return res.status(201).json({ message: "Employee deleted"})
  }
}