'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      role.belongsToMany(models.user,{
        through : 'A_User_Role'
      })
    }
  };
  role.init({
    role_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    role_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'role',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "role_pk",
        unique: true,
        fields: [
          { name: "role_id" },
        ]
      },
    ]
  });
  return role
};
