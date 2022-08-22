import employees from "../database/models/Employees"

export default class EmployeesService {
  getAll = async () => {
    const allEmployees = await employees.findAll();
    return allEmployees;
  }

  create = async (name:string, department:string, salary:number, cpf:string, birthDate:string) => {
    const allEmployees = await employees.findAll();
    const alreadyExists = allEmployees.find((employee) => employee.cpf === cpf);

    if (alreadyExists) {
      return { message: "Employee already exists" }
    }

    const newEmployee = await employees.create({ name, department, salary, cpf, birthDate});
    return newEmployee;
  }

  update = async (id:number, name:string, department:string, salary:number, birthDate:string, cpf:string) => {
    const findEmployee = await employees.findByPk(id);
    if (!findEmployee) {
      return { message: "Employee not found" }
    }
    const updatedEmployee = await employees.update({ name, department, salary, cpf, birthDate }, { where: { id } });
    return updatedEmployee;
  }

  delete = async (id:number) => {
    const findEmployee = await employees.findByPk(id);
    if (!findEmployee) {
      return { message: "Employee not found" }
    }
    const deletedEmployee = await employees.destroy({ where: { id } });
    return deletedEmployee;
  }
}
