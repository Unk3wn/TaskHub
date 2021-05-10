const express = require('express'),
      bcrypt = require('bcryptjs'),
      dotenv = require('dotenv'),
      path = require('path'),
      logger = require('morgan'),
      indexRouter = require('./routes/index'),
      app = express();

//===============PASSPORT===============

//===============EXPRESS================
app.use(logger('dev'));
dotenv.config();

//===============ROUTES===============
app.use('/', indexRouter);


//===============SEQUELIZE===============
  const db = require("./sequelize/models");
  //DEV
  if (process.env.NODE_ENV == "development"){
    db.sequelize.sync({force: true,logging: console.log}).then(() => {
      console.log('Drop and Resync Db');
      initzialize();
    });
  }
  //PROD
  else if(process.env.NODE_ENV == "production"){
    db.sequelize.sync();
  }

module.exports = app;

function initzialize(){

  const roleID = "097ed6cc-657a-4c6d-9f0f-d4fadb1fced4";
  const subjectID = "eb1a1ae0-35e2-47b7-919e-9042704f059b";
  const classID = "7a2fb42d-2fcf-4c6e-b285-c9fd8f8b4f73";
  const userID = "3f7bf944-7a3f-4648-bfec-29d8a5722895";
  const taskID = "a2fe481e-d186-47c1-a845-bdc182582321";
  const teamID = "2c555866-05b6-42c6-b0dd-d27341bc61ad";
  const solutionID = "00cb173c-ffd4-4f67-a190-bc2c41e9d5e3";

  db.role.create({
    role_id: roleID,
    role_name: "Testrole"
  });

  db.subject.create({
    subject_id : subjectID,
    subject_name : "Testsubject"
  });

  db.klass.create({
    class_id : classID,
    classname : "Testclass"
  });

  db.user.create({
    user_id : userID,
    username : "p4ddy",
    password : bcrypt.hashSync("test",10),
    first_name : "Paddy",
    last_name : "Mueller",
    email : "test@bonk.army"
  });

  db.task.create({
    task_id : taskID,
    subject_id : subjectID,
    question : "Wo is die BUDDA ?",
    class : classID,
    duedate : Date.now()
  })

  db.team.create({
    team_id : teamID,
    team_name : "Hagebacher",
    team_leader : userID,
    class_id : classID
  })

  db.solution.create({
    solution_id : solutionID,
    text : "IM KÜHLSCHRANK",
    time_ended : false,
    reviewed : true,
    marked : false,
    mark : "A-",
    task : taskID,
    team : teamID
  })
}
