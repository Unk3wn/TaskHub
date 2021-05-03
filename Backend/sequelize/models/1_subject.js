const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('subject', {
    subject_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    subject_name: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'subject',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "subject_pk",
        unique: true,
        fields: [
          { name: "subject_id" },
        ]
      },
    ]
  });
};
