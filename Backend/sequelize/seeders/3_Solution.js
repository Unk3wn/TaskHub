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
        return queryInterface.bulkInsert('solution', [{
            solution_id : constants.solutionID,
            text : "IM KÜHLSCHRANK",
            time_ended : false,
            reviewed : true,
            marked : false,
            mark : "A-",
            task : constants.taskID,
            team : constants.teamID
        }]);
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        return queryInterface.bulkDelete('solution', {solution_id: constants.solutionID})
    }
};
