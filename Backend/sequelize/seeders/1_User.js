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
    return queryInterface.bulkInsert('user', [{
      user_id : constants.userID,
      username : "p4ddy",
      password : bcrypt.hashSync("test",10),
      first_name : "Paddy",
      last_name : "Mueller",
      email : "test@bonk.army"
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('user', {user_id: constants.userID})
  }
};
