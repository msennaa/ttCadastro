import React from 'react'
import EmployeeData from './EmployeeData'
import '../css/Table.css'

export default function EmployeeTable(props) {

  const { filteredEmployess, defaultEmployees } = props;

  return (
    <table className='table'>
        <tr className='table-header'>
          <th>
            Nome
          </th>
          <th>
            Departamento
          </th>
          <th>
            Salario
          </th>
          <th>
            Data de nascimento
          </th>
          <th>
          </th>
        </tr>
          {
            filteredEmployess.length === 0 ? (
              defaultEmployees.map((employee) => (
                <EmployeeData
                  key={employee.id}
                  employeeName={employee.name}
                  employeeDepartment={employee.department}
                  employeeSalary={employee.salary}
                  employeeBirthDate={employee.birthDate}
                  employeeId={employee.id}
                  employeeCpf={employee.cpf}
                />
              ))
            ) : (
              filteredEmployess.map((employee) => (
                <EmployeeData
                key={employee.id}
                employeeName={employee.name}
                employeeDepartment={employee.department}
                employeeSalary={employee.salary}
                employeeBirthDate={employee.birthDate}
                employeeId={employee.id}
                employeeCpf={employee.cpf}
              />
              ))
            )
          }
      </table>
  )
}
