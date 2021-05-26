'use strict';

const bcrypt = require('bcryptjs');

const constants = require('../config/constants');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        return queryInterface.bulkInsert('A_User_Class', [{
            createdAt: new Date,
            updatedAt: new Date,
            userUserId: constants.userIDUser,
            klassClassId: constants.classID
        }, {
            createdAt: new Date,
            updatedAt: new Date,
            userUserId: constants.userIDStudent,
            klassClassId: constants.classID
        }]);
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        return queryInterface.bulkDelete('A_User_Class', {
            userUserId: {
                [Op.in]: [constants.userIDUser, constants.userIDStudent]
            },
        klassClassId: constants.classID
        }, {})
    }
};
