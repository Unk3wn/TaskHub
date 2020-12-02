'use strict';

const uuidv4 = require('uuid');
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

    const userID = uuidv4.v4()

    await queryInterface.bulkInsert('user',[{
      userID: userID,
      username: 'test1',
      firstName: 'Patrick',
      lastName: 'Müller',
      eMail: 'test@mueller-patrick.tech',
      createdAt: new Date(),
      updatedAt: new Date()
    }])

    await queryInterface.bulkInsert('userCredentials', [{
      credentialID: uuidv4.v4(),
      password: 'Llama20',
      passwordSalt: 'Patrick',
      isTeacher: false,
      isAdmin: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      userID: userID
    }])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('user', null, {});
    await queryInterface.bulkDelete('userCredentials', null, {});
  }
};
