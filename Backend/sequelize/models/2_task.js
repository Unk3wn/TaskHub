const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('task', {
    task_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    subject: {
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
};
