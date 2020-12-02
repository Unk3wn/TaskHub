'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class mapping_user_team extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            mapping_user_team.belongsTo(models.user,{foreignKey: 'userID'}),
            mapping_user_team.belongsTo(models.team,{foreignKey: 'teamID'})
        }
    };
    mapping_user_team.init({
        mappingID: {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        }
    }, {
        sequelize,
        modelName: 'mapping_user_team',
        tableName: 'mapping_user_team',
        schema: 'public',
    });
    return mapping_user_team;
};
