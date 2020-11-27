'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class mapping_user_class extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            mapping_user_class.belongsTo(models.user,{foreignKey: 'userID'}),
            mapping_user_class.belongsTo(models.classe,{foreignKey: 'classID'})
        }
    };
    mapping_user_class.init({
        mappingID: {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        }
    }, {
        sequelize,
        modelName: 'mapping_user_class',
        tableName: 'mapping_user_class',
        schema: 'public',
    });
    return mapping_user_class;
};
