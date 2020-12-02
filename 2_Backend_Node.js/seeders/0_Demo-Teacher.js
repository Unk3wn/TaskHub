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

    const teacherID = '166685c6-28f4-468e-8cbe-c7a7609951e3'
    const userID = teacherID
    const classID = '3d66260b-8a6c-4643-8e50-4a74a90c3f39'
    const teamID = '6328d4b9-5ce8-4ffa-a33d-9ca2ecb29927'
    const taskID = '02f2ca2a-ff74-4ee5-8b54-96bea33ae30e'

    await queryInterface.bulkInsert('user',[{
      userID: teacherID,
      username: 'Demo-Teacher',
      firstName: 'Henning',
      lastName: 'Sextro',
      eMail: 'test2@mueller-patrick.tech',
      createdAt: new Date(),
      updatedAt: new Date()
    }])

    await queryInterface.bulkInsert('class', [{
      classID: classID,
      label: 'TInf19B4',
      createdAt: new Date(),
      updatedAt: new Date(),
    }])

    await queryInterface.bulkInsert('task', [{
      taskID: taskID,
      task: 'Rechnerarchitektur lernen',
      teacher: teacherID,
      createdAt: new Date(),
      updatedAt: new Date()
    }])

    await queryInterface.bulkInsert('userCredentials', [{
      credentialID: uuidv4.v4(),
      password: 'jhafivböas',
      passwordSalt: 'asvnoöie+ßi48ksp',
      isTeacher: false,
      isAdmin: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      userID: userID
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
