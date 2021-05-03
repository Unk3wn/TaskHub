const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_class', {
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
};
