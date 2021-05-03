const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_team', {
    mapping_id: {
      type: DataTypes.UUID,
      allowNull: true
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'user',
        key: 'user_id'
      }
    },
    team_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'team',
        key: 'team_id'
      }
    }
  }, {
    sequelize,
    tableName: 'user_team',
    schema: 'public',
    timestamps: false
  });
};
