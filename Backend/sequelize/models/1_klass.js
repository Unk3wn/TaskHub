'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class klass extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  klass.init({
    class_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    classname: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'klass',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "class_class_id_uindex",
        unique: true,
        fields: [
          { name: "class_id" },
        ]
      },
      {
        name: "class_pk",
        unique: true,
        fields: [
          { name: "class_id" },
        ]
      },
    ]
  });
  return klass
};
