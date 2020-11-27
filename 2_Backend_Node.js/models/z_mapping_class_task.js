'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class mapping_class_task extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            mapping_class_task.belongsTo(models.classe,{foreignKey: 'classID'}),
                mapping_class_task.belongsTo(models.task,{foreignKey: 'taskID'})
        }
    };
    mapping_class_task.init({
        mappingID: {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        }
    }, {
        sequelize,
        modelName: 'mapping_class_task',
        tableName: 'mapping_class_task',
        schema: 'public',
    });
    return mapping_class_task;
};
