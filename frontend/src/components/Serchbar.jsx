import React from 'react'
import { useState } from 'react';
import { allDepartments } from '../Api/employeeApi';
import '../css/Searchbar.css';
export default function Serchbar(props) {
  const [name, setName] = useState('');
  const {defaultEmployees, setFilteredEmployees} = props

  const handleChange = (event) => {
    const selectedDepartment = event.target.value;
    const filterByDepartment = defaultEmployees.filter((employee) => employee.department === selectedDepartment);
    
    if (selectedDepartment === '') {
      return setFilteredEmployees(defaultEmployees);
    }
    
    if (filterByDepartment.length === 0) {
      setFilteredEmployees(defaultEmployees)
      alert('Nenhum usuário encontrado');
    }
    setFilteredEmployees(filterByDepartment)
  }

  const filterEmployees = () => {
    if (name === '' || !name) {
      setFilteredEmployees(defaultEmployees);
    } else {
      const filterByName = defaultEmployees.filter((employee) => employee.name.toLowerCase().includes(name.toLocaleLowerCase()));
      console.log(filterByName);
      
      if (filterByName.length === 0) {
        setFilteredEmployees(defaultEmployees)
        alert('Nenhum usuário encontrado');
      }
      setFilteredEmployees(filterByName);
    }
  }
  
  return (
      <div className='search-bar'>
        <input
          type="text"
          placeholder='nome'
          value={ name }
          onChange={ ({ target: { value } }) => setName(value) }
        />
        <select onChange={ (event) => handleChange(event) }>
          <option value="" selected>
            Todos
          </option>
          {
            allDepartments.map((department) => (
              <option key={ department } value={ department }>
                { department }
              </option>
            ))
          }
        </select>
        <button type="button" onClick={ () => filterEmployees() }>
          Pesquisar
        </button>
      </div>
  )
}
