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
    const classID = uuidv4.v4()
    const teamID = uuidv4.v4()
    const taskID = uuidv4.v4()

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

    await queryInterface.bulkInsert('class', [{
      classID: classID,
      label: 'TInf19B4',
      createdAt: new Date(),
      updatedAt: new Date(),
    }])

    await queryInterface.bulkInsert('team', [{
      teamID: teamID,
      name: 'LlamaGroup',
      createdAt: new Date(),
      updatedAt: new Date(),
      leader: userID,
      class: classID
    }])

    await queryInterface.bulkInsert('task', [{
      taskID: taskID,
      task: 'Rechnerarchitektur lernen',
      createdAt: new Date(),
      updatedAt: new Date()
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
    await queryInterface.bulkDelete('task', null, {});
    await queryInterface.bulkDelete('team', null, {});
    await queryInterface.bulkDelete('class', null, {});
    await queryInterface.bulkDelete('userCredentials', null, {});
    await queryInterface.bulkDelete('user', null, {});
  }
};
