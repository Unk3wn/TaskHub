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
        return queryInterface.bulkInsert('role', [{
            role_id: constants.roleID,
            role_name: "Testrole",
        },{
            role_id: constants.roleIDAdmin,
            role_name: "Admin",
        },{
            role_id: constants.roleIDUser,
            role_name: "User",
        },{
            role_id: constants.roleIDStudent,
            role_name: "Student",
        },{
            role_id: constants.roleIDTeacher,
            role_name: "Teacher",
        }]);
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        const Op = Sequelize.Op;
        return queryInterface.bulkDelete('role', {role_id: {[Op.in]: [constants.roleID, constants.roleIDUser, constants.roleIDTeacher,constants.roleIDAdmin,constants.roleIDStudent]}})
    }
};
