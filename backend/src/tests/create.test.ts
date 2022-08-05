import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import employees from '../database/models/Employees';

import { mockAllEmployees, mockEmployee } from './mocks';

chai.use(chaiHttp);

const { expect } = chai;

  describe('Criação de funcionário', () => {
    before(async () => {
      sinon
        .stub(employees, "create")
        .resolves({
          id: 1,
          ...mockEmployee,
        } as employees);
    });

    after(()=>{
      sinon.restore();
    })

    it('É possível cadastrar um funcionário', async () => {
      const newEmployee = await employees.create(mockEmployee);
      expect(newEmployee).to.be.deep.equal(mockAllEmployees[0]);
    });

    it('Retorna o nome do usuario esperado', async () => {
      const newEmployee = await employees.create(mockEmployee);
      expect(newEmployee.name).to.be.equal("Flavio Oliveira");
    })

    it('É possível cadastrar um funcionário', async () => {
      const newEmployee = await employees.create(mockEmployee);
      expect(newEmployee).not.to.be.deep.equal(mockAllEmployees[1]);
    });
  });

