'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class task_solution extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  task_solution.init({
    mapping_id: {
      type: DataTypes.UUID,
      allowNull: true
    },
    task_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'task',
        key: 'task_id'
      }
    },
    solution_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'solution',
        key: 'solution_id'
      }
    }
  }, {
    sequelize,
    tableName: 'task_solution',
    schema: 'public',
    timestamps: false
  });
  return task_solution
};
