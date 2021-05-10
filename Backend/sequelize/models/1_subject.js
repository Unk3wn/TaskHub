'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class subject extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      subject.belongsToMany(models.task,{
        through: 'SubjectForTasksTask'
      })
    }
  };
  subject.init({
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
  return subject
};

