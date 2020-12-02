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
    const classID = '3d66260b-8a6c-4643-8e50-4a74a90c3f39'
    const teamID = '6328d4b9-5ce8-4ffa-a33d-9ca2ecb29927'
    const taskID = '02f2ca2a-ff74-4ee5-8b54-96bea33ae30e'

    await queryInterface.bulkInsert('user',[{
      userID: userID,
      username: 'test3',
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

    await queryInterface.bulkInsert('solution', [{
      solutionID: uuidv4.v4(),
      solution: 'Done',
      mark: '3',
      team: teamID,
      createdAt: new Date(),
      updatedAt: new Date(),
      task: taskID
    }])

    await queryInterface.bulkInsert('mapping_class_task', [{
      mappingID: uuidv4.v4(),
      createdAt: new Date(),
      updatedAt: new Date(),
      classID: classID,
      taskID: taskID
    }])

    await queryInterface.bulkInsert('mapping_user_class', [{
      mappingID: uuidv4.v4(),
      createdAt: new Date(),
      updatedAt: new Date(),
      userID: userID,
      classID: classID
    }])

    await queryInterface.bulkInsert('mapping_user_team', [{
      mappingID: uuidv4.v4(),
      createdAt: new Date(),
      updatedAt: new Date(),
      userID: userID,
      teamID: teamID
    }])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('mapping_user_team', null, {});
    await queryInterface.bulkDelete('mapping_user_class', null, {});
    await queryInterface.bulkDelete('mapping_class_task', null, {});
    await queryInterface.bulkDelete('solution', null, {});
    await queryInterface.bulkDelete('task', null, {});
    await queryInterface.bulkDelete('userCredentials', null, {});
    await queryInterface.bulkDelete('user', null, {});
  }
};
