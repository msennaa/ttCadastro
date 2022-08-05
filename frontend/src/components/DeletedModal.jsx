import axios from "axios";
import React, { useState } from "react";
import "../css/Modal.css";

export default function DeletedModal(props) {
  const [modal, setModal] = useState(false);
  const { employeeId, employeeCpf, employeeName } = props

  const toggleModal = () => {
    setModal(!modal);
  };

  const deleteEmployee = (id) => {
    axios.delete(`http://localhost:3001/employees/${id}`)
      .then((response) =>  response.data.message !== 'Usuário deletado' ? alert(response.data.message) : window.location.reload())
      .catch((error) => alert(error.message));
  }

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal}>
        Delete
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Excluir Funcionário</h2>
            <h3>
              Deseja excluir o funcionário abaixo?
            </h3>
            <p>
              {`Nome: ${employeeName}`}
            </p>
            <p>
              {`CPF: ${employeeCpf}`}
            </p>
            <div className="modal-buttons-container">
              <button onClick={ toggleModal }>
                CANCELAR
              </button>
              <button onClick={ () => deleteEmployee(employeeId) }>
                EXCLUIR
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}