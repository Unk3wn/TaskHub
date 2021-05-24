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
            userUserId: constants.userIDAdmin,
            roleRoleId: constants.roleIDAdmin,
            createdAt: new Date,
            updatedAt: new Date
        },{
            userUserId: constants.userIDTeacher,
            roleRoleId: constants.roleIDTeacher,
            createdAt: new Date,
            updatedAt: new Date
        },{
            userUserId: constants.userIDStudent,
            roleRoleId: constants.roleIDStudent,
            createdAt: new Date,
            updatedAt: new Date
        },{
            userUserId: constants.userIDUser,
            roleRoleId: constants.roleIDUser,
            createdAt: new Date,
            updatedAt: new Date
        }]);
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        return queryInterface.bulkDelete('A_User_Role', {user_id: {[Op.in]: [constants.userIDAdmin, constants.userIDTeacher, constants.userIDStudent, constants.userIDUser]}})
    }
};
