'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class user_class extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  user_class.init({
    mapping_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
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
    tableName: 'user_class',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "user_class_pk",
        unique: true,
        fields: [
          { name: "mapping_id" },
        ]
      },
    ]
  });
  return user_class
};

