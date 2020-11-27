'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      team.belongsTo(models.user,{foreignKey:'leader',as:'userID'})
      team.belongsTo(models.classe,{foreignKey:'class',as:'classID'})
    }
  };
  team.init({
    teamID: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'team',
    schema: 'public',
    tableName: 'team',
  });
  return team;
};
