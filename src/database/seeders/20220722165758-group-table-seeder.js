'use strict';

const groups = ['G1', 'G2', 'G3'].map((g) => ({
  name: g,
  created_at: new Date(),
  updated_at: new Date(),
}));

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      'ALTER TABLE `groups` AUTO_INCREMENT = 1;' // groups is reserved
    ); // to avoid foreign_key constraints

    await queryInterface.bulkInsert('groups', groups);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('groups', null);
  },
};
