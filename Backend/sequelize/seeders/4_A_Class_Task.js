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
        return queryInterface.bulkInsert('A_Class_Task', [{
            createdAt: new Date,
            updatedAt: new Date,
            klassClassId: constants.classID,
            taskTaskId: constants.taskID
        }]);
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        return queryInterface.bulkDelete('A_Class_Task', {
            klassClassId: constants.classID,
            taskTaskId: constants.taskID
        })
    }
};
