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
        return queryInterface.bulkInsert('A_User_Team', [{
            createdAt: new Date,
            updatedAt: new Date,
            userUserId: constants.userIDStudent,
            teamTeamId: constants.teamID
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
        return queryInterface.bulkDelete('A_User_Team', {
            user_id: {
                [Op.in]: [constants.userIDStudent]
            },
            team_id: {
                [Op.in]: [constants.teamID]
            },
        }, {})

    }
};
