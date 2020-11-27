'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class userCredentials extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            userCredentials.belongsTo(models.user,{foreignKey: 'userID'})
        }
    };
    userCredentials.init({
        credentialID: {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false
        },
        passwordSalt: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isTeacher: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        }
    }, {
        sequelize,
        modelName: 'userCredentials',
        schema: 'public',
        tableName: 'userCredentials',
    });
    return userCredentials;
};
