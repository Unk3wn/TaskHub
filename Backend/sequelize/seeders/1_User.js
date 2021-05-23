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
      user_id: constants.userID,
      username: "p4dd2y",
      password: bcrypt.hashSync("test", 10),
      first_name: "Paddy",
      last_name: "Mueller",
      email: "test@bonk.army"
    }, {
      user_id: constants.userID2,
      username: "llama",
      password: bcrypt.hashSync("Lama", 10),
      first_name: "Nico",
      last_name: "Holzhäuser",
      email: "nico@bonk.army"
    }, {
      user_id: constants.userID3,
      username: "krissi",
      password: bcrypt.hashSync("krissi", 10),
      first_name: "Krissi",
      last_name: "Agne",
      email: "krissi@bonk.army"
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
    return queryInterface.bulkDelete('users', {user_id: {[Op.in]: [constants.userID, constants.userID2, constants.userID3]}}, {})
  }
};
