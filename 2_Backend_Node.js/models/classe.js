'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class classe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  classe.init({
    classID: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    label: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'classe',
    tableName: 'class',
    schema: 'public',
  });
  return classe;
};
