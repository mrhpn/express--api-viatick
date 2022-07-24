'use strict';

const departments = ['D1', 'D2', 'D3'].map((d) => ({
  name: d,
  created_at: new Date(),
  updated_at: new Date(),
}));

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      'ALTER TABLE departments AUTO_INCREMENT = 1;'
    ); // to avoid foreign_key constraints

    await queryInterface.bulkInsert('departments', departments);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('departments', null);
  },
};
