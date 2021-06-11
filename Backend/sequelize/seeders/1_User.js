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
      user_id: constants.userIDAdmin,
      username: "admin",
      password: bcrypt.hashSync("admin", 10),
      first_name: "Paddy",
      last_name: "Mueller",
      email: "test@bonk.army"
    }, {
      user_id: constants.userIDTeacher,
      username: "teacher",
      password: bcrypt.hashSync("teacher", 10),
      first_name: "Nico",
      last_name: "Holzhäuser",
      email: "nico@bonk.army"
    }, {
      user_id: constants.userIDStudent,
      username: "student",
      password: bcrypt.hashSync("student", 10),
      first_name: "Krissi",
      last_name: "Agne",
      email: "krissi@bonk.army"
    }, {
      user_id: constants.userIDUser,
      username: "user",
      password: bcrypt.hashSync("user", 10),
      first_name: "Lorenz",
      last_name: "Seufert",
      email: "lorenz@bonk.army"
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
    return queryInterface.bulkDelete('users', {user_id: {[Op.in]: [constants.userIDAdmin, constants.userIDTeacher, constants.userIDStudent, constants.userIDUser]}}, {})
  }
};
