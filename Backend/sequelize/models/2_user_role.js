const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_role', {
    user_role_mapping_id: {
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
    role_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'role',
        key: 'role_id'
      }
    }
  }, {
    sequelize,
    tableName: 'user_role',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "user_role_pk",
        unique: true,
        fields: [
          { name: "user_role_mapping_id" },
        ]
      },
    ]
  });
};
