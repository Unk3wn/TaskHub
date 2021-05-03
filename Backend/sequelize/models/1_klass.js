const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('klass', {
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
};
