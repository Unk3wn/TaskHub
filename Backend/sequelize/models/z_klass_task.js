'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class klass_task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  klass_task.init({
    mapping_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    klass_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'klass',
        key: 'class_id'
      }
    },
    task_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'task',
        key: 'task_id'
      }
    }
  }, {
    sequelize,
    tableName: 'klass_task',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "class_task_pk",
        unique: true,
        fields: [
          { name: "mapping_id" },
        ]
      },
    ]
  });
  return klass_task
};
