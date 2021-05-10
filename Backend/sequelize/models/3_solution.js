'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class solution extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  solution.init({
    solution_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    time_ended: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    reviewed: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    marked: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    mark: {
      type: DataTypes.STRING,
      allowNull: true
    },
    task: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'task',
        key: 'task_id'
      }
    },
    team: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'team',
        key: 'team_id'
      }
    }
  }, {
    sequelize,
    tableName: 'solution',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "solution_pk",
        unique: true,
        fields: [
          { name: "solution_id" },
        ]
      },
    ]
  });
  return solution
};
