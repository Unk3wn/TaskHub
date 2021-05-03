const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('klass_task', {
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
};
