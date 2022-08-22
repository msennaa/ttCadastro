import React, { useState } from "react";
import { allDepartments } from "../Api/employeeApi";
import '../css/Modal.css';
import { validate } from "gerador-validador-cpf";
import axios from 'axios';

export default function EditModal(props) {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [department, setDepartment] = useState('');
  const [salary, setSalary] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const { employeeId } = props

  const toggleModal = () => {
    setModal(!modal);
  };

  const cancelModal = () => {
    setModal(!modal);
    setName('');
    setCpf('');
    setDepartment('');
    setSalary('');
    setBirthDate('');
  }

  const editEmployee = (id) => {
    const birthDateReverse = birthDate.split('-').reverse().join('/');
    const cpfReplace = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
    const salaryFormated = Number(salary.replace(',','.'));


    const newEmployee = {
      name: name,
      department: department,
      salary: salaryFormated,
      cpf: cpfReplace,
      birthDate: birthDateReverse,
    }

    axios.put(`http://localhost:3001/employees/${id}`, newEmployee)
      .then((response) =>  response.data.message !== 'Employee updated' ? alert(response.data.message) : window.location.reload())
      .catch((error) => alert(error.message));
  }

  const validateAllInformations = () => {
    const cpfReplace = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
    const cpfValidation = validate(cpfReplace);
    const dateYear = birthDate.substring(0,4);
    const dateValidation =  Number(dateYear) > 1940 && Number(dateYear) < 2007 ;
    const nameValidation = name.length < 3;
    const salaryValidation = salary < 0 || salary === '';
    const departmentValidation = department === '';
    return nameValidation || salaryValidation || departmentValidation|| !cpfValidation || !dateValidation;
  }

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={ toggleModal }>
        Editar
      </button>
      {modal && (
        <div className="modal">
          <div onClick={ toggleModal } className="overlay"></div>
          <div className="modal-content">
            <h2>Editar funcionário</h2>
            <label htmlFor="">
              Nome:
              <input
                type="text"
                placeholder='nome'
                value={ name }
                onChange={ ({ target: { value } }) => setName(value) }
              />
            </label>
            <label htmlFor="">
              CPF:
              <input
                onInput={ cpf.length > 11 ? setCpf(cpf.slice(0, 11)) : null }
                type="number"
                placeholder='CPF'
                value={ cpf }
                onChange={ ({ target: { value } }) => setCpf(value) }
              />
            </label>
            <label htmlFor="">
              Salário:
              <input
                type="number"
                placeholder='salario'
                value={ salary }
                onChange={ ({ target: { value } }) => setSalary(value) }
              />
            </label>
            <label htmlFor="">
              Departamento:
              <select onChange={ ({ target: { value } }) => setDepartment(value) }>
                <option value="" selected>
                  departamento
                </option>
                {
                  allDepartments.map((department) => (
                  <option key={ department } value={ department }>
                    { department }
                  </option>
                  ))
                }
              </select>
            </label>
            <label htmlFor="">
              Data de nascimento:
              <input
                type="date"
                placeholder='Data'
                value={ birthDate }
                onChange={ ({ target: { value } }) => setBirthDate(value) }
              />
            </label>
            <div className="modal-buttons-container">
              <button onClick={ cancelModal }>
                CANCELAR
              </button>
              <button type="button" disabled={ validateAllInformations() } onClick={ () => editEmployee(employeeId) }>
                SALVAR
              </button>
            </div>
          </div>
        </div>
      )}
    </>  
  );
}