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
            userUserId: constants.userID,
            teamTeamId: constants.teamID
        }, {
            createdAt: new Date,
            updatedAt: new Date,
            userUserId: constants.userID2,
            teamTeamId: constants.teamID2
        }, {
            createdAt: new Date,
            updatedAt: new Date,
            userUserId: constants.userID3,
            teamTeamId: constants.teamID2
        }]);
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        return queryInterface.bulkDelete('A_User_Team', {
            userUserId: constants.userID,
            teamTeamId: constants.teamID
        })
        const Op = Sequelize.Op
        return queryInterface.bulkDelete('A_User_Team', {
            user_id: {
                [Op.in]: [constants.userID, constants.userID2]
            },
            team_id: {
                [Op.in]: [constants.teamID, constants.teamID2]
            },
        }, {})

    }
};