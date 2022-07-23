'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Pin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pin.belongsTo(models.Department, {
        foreignKey: 'departmentId',
        as: 'department',
      });

      Pin.belongsTo(models.Group, {
        foreignKey: 'groupId',
        as: 'group',
      });
    }
  }

  Pin.init(
    {
      pinId: {
        allowNull: false,
        autoIncrement: true,
        field: 'pin_id',
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      long: {
        allowNull: false,
        type: DataTypes.DECIMAL(10, 8),
      },
      lang: {
        allowNull: false,
        type: DataTypes.DECIMAL(11, 8),
      },
      remarks: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      isAlert: {
        allowNull: false,
        defaultValue: false,
        field: 'is_alert',
        type: DataTypes.BOOLEAN,
      },
      image: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      departmentId: {
        allowNull: true,
        field: 'department_id',
        onDelete: 'NO ACTION',
        onUpdate: 'CASCADE',
        references: {
          model: 'departments',
          key: 'department_id',
        },
        type: DataTypes.INTEGER,
      },
      groupId: {
        allowNull: true,
        field: 'group_id',
        onDelete: 'NO ACTION',
        onUpdate: 'CASCADE',
        references: {
          model: 'groups',
          key: 'group_id',
        },
        type: DataTypes.INTEGER,
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
      modelName: 'Pin',
      tableName: 'pins',
    }
  );

  return Pin;
};
