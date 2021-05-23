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
            userUserId: constants.userID,
            klassClassId: constants.classID
        }, {
            createdAt: new Date,
            updatedAt: new Date,
            userUserId: constants.userID2,
            klassClassId: constants.classID
        }, {
            createdAt: new Date,
            updatedAt: new Date,
            userUserId: constants.userID3,
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
                [Op.in]: [constants.userID, constants.userID2, constants.userID3]
            },
        klassClassId: constants.classID
        }, {})
    }
};