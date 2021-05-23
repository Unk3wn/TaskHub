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
        return queryInterface.bulkInsert('team', [{
            team_id : constants.teamID,
            team_name : "Hagebacher",
            team_leader : constants.userID,
            class_id : constants.classID
        }, {
            team_id : constants.teamID2,
            team_name : "Llamas",
            team_leader : constants.userID2,
            class_id : constants.classID
        }]);
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        const Op = Sequelize.Op
        return queryInterface.bulkDelete('team', {user_id: {[Op.in]: [constants.teamID, constants.teamID2]}}, {})
    }
};
