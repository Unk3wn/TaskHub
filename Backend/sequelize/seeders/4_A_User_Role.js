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
        return queryInterface.bulkInsert('A_User_Role', [{
            createdAt: new Date,
            updatedAt: new Date,
            userUserId: constants.userID,
            roleRoleId: constants.roleID
        }]);
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        return queryInterface.bulkDelete('A_User_Role', {
            userUserId: constants.userID,
            roleRoleId: constants.roleID
        })
    }
};