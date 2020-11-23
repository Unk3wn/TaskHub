var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//Adding Sequelize
var Sequelize = require("sequelize");

// make sure you have created the database using pg Admin III
var sequelize = new Sequelize("postgres://admin:secret@db:5432/TaskHub");

//Feedback for Connection
sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });

module.exports = router;
