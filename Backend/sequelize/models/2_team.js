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
      // define association here
    }
  };
  team.init({
    team_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    team_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    team_leader: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'user',
        key: 'user_id'
      }
    },
    class_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'klass',
        key: 'class_id'
      }
    }
  }, {
    sequelize,
    tableName: 'team',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "team_pk",
        unique: true,
        fields: [
          { name: "team_id" },
        ]
      },
    ]
  });
  return team
};
