import React, { useEffect, useState } from 'react'
import { getEmployeesFromApi } from './Api/employeeApi';
import EmployeeTable from './components/EmployeeTable';
import Modal from './components/Modal';
import Serchbar from './components/Serchbar';


export default function App() {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployess, setFilteredEmployees] = useState([]);

  const allEmployes = async () => {
    const result = await getEmployeesFromApi();
    setEmployees(result);
  }

  useEffect(() => {
    allEmployes();
  }, [])

  return (
    <div>
      <Serchbar
        setDefaultEmployees={setEmployees}
        defaultEmployees={employees}
        setFilteredEmployees={setFilteredEmployees}
        filteredEmployees={filteredEmployess}
      />
      <EmployeeTable filteredEmployess={filteredEmployess} defaultEmployees={employees}/>
      <Modal />
    </div>
  )
}

