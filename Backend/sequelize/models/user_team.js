'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class user_team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  user_team.init({
    mapping_id: {
      type: DataTypes.UUID,
      allowNull: true
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'user',
        key: 'user_id'
      }
    },
    team_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'team',
        key: 'team_id'
      }
    }
  }, {
    sequelize,
    tableName: 'user_team',
    schema: 'public',
    timestamps: false
  });
  return user_team
};
