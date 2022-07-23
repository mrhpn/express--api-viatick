'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Department extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  Department.init(
    {
      departmentId: {
        allowNull: false,
        autoIncrement: true,
        field: 'department_id',
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        field: 'created_at',
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        field: 'updated_at',
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: 'Department',
      tableName: 'departments',
    }
  );

  return Department;
};
