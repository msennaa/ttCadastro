import { Router } from "express";
import EmployeesController from "../controllers/EmployeesController";
import { cpfMiddleware, departmentMiddleware, nameMiddleware, salaryMiddleware } from "../middlewares/employeeMiddleware";

const employeesRoute = Router();
const employeesController = new EmployeesController();

employeesRoute.get('/', employeesController.getAll);
employeesRoute
  .post('/', nameMiddleware, departmentMiddleware, salaryMiddleware, cpfMiddleware, employeesController.create);
employeesRoute.put('/:id', employeesController.update);
employeesRoute.delete('/:id', employeesController.delete);

export default employeesRoute;