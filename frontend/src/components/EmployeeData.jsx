import React from 'react'
import DeletedModal from './DeletedModal'
import EditModal from './EditModal';

export default function EmployeeData(props) {
  const { employeeName, employeeDepartment, employeeSalary,
    employeeBirthDate, employeeId, employeeCpf} = props
  
  return (
    <tr className='table-data'>
      <td>
        { employeeName }
      </td>
      <td>
        { employeeDepartment }
      </td>
      <td>
        {`R$${employeeSalary}`}
      </td>
      <td>
        { employeeBirthDate }
      </td>
      <td className='employee-button'>
        <DeletedModal employeeId={ employeeId } employeeCpf={ employeeCpf } employeeName={ employeeName } />
        <EditModal employeeId={ employeeId } />
      </td>
    </tr>
  )
}
