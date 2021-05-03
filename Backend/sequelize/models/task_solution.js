const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('task_solution', {
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
};
