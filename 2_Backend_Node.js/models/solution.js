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
      solution.belongsTo(models.task,{foreignKey:'task',as:'taskID'})
      solution.belongsTo(models.team,{foreignKey:'team',as:'teamID'})
    }
  };
  solution.init({
    solutionID: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    solution: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    mark: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    team: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'team',
        key: 'teamID'
      }
    }
  }, {
    sequelize,
    modelName: 'solution',
    tableName: 'solution',
    schema: 'public',
  });
  return solution;
};
