'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here#
      task.belongsTo(models.subject,{
        foreignKey: 'subject_id'
      })
      task.belongsTo(models.klass,{
        foreignKey: 'class'
      })
    }
  };
  task.init({
    task_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    subject_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'subject',
        key: 'subject_id'
      }
    },
    question: {
      type: DataTypes.STRING,
      allowNull: true
    },
    class: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'klass',
        key: 'class_id'
      }
    },
    duedate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'task',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "task_pk",
        unique: true,
        fields: [
          { name: "task_id" },
        ]
      },
    ]
  });
  return task
};

