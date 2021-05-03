const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('team', {
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
};
