'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('employees', [
      {
        name: 'Fulano Diniz',
        department: 'TI',
        salary: 2500.55,
        cpf: '871.033.877-31',
        birthDate: '22/12/1995'
      },
      {
        name: 'Ciclano Diniz',
        department: 'Financeiro',
        salary: 2300,
        cpf: '123.456.789-10',
        birthDate: '21/02/1985'
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
  }
};
