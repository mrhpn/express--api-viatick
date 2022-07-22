'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pins', {
      pinId: {
        allowNull: false,
        autoIncrement: true,
        field: 'pin_id',
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(30),
      },
      long: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 8),
      },
      lang: {
        allowNull: false,
        type: Sequelize.DECIMAL(11, 8),
      },
      remarks: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      isAlert: {
        allowNull: false,
        defaultValue: false,
        field: 'is_alert',
        type: Sequelize.BOOLEAN,
      },
      image: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      departmentId: {
        allowNull: false,
        field: 'department_id',
        onDelete: 'NO ACTION',
        onUpdate: 'CASCADE',
        references: {
          model: 'departments',
          key: 'department_id',
        },
        type: Sequelize.INTEGER,
      },
      groupId: {
        allowNull: false,
        field: 'group_id',
        onDelete: 'NO ACTION',
        onUpdate: 'CASCADE',
        references: {
          model: 'groups',
          key: 'group_id',
        },
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        field: 'created_at',
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        field: 'updated_at',
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pins');
  },
};
