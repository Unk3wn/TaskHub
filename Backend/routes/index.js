var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const roleController = require('../controllers').role;
router.get('/api/role',roleController.list);
router.get('/api/role/:id',roleController.getById);
router.post('/api/role',roleController.add);
router.put('/api/role/:id', roleController.update);
router.delete('/api/role/:id', roleController.delete);

const subjectController = require('../controllers').subject;
router.get('/api/subject',subjectController.list);
router.get('/api/subject/:id',subjectController.getById);
router.post('/api/subject',subjectController.add);
router.put('/api/subject/:id', subjectController.update);
router.delete('/api/subject/:id', subjectController.delete);

const klassController = require('../controllers').klass;
router.get('/api/class',klassController.list);
router.get('/api/class/:id',klassController.getById);
router.post('/api/class',klassController.add);
router.put('/api/class/:id', klassController.update);
router.delete('/api/class/:id', klassController.delete);

const userController = require('../controllers').user;
router.get('/api/user',userController.list);
router.get('/api/user/:id',userController.getById);
router.post('/api/user',userController.add);
router.put('/api/user/:id', userController.update);
router.delete('/api/user/:id', userController.delete);
router.post('/api/user/WithRoles',userController.addWithRoles);
router.post('/api/user/addRole/:userID/:roleID',userController.addRoleToUser);


const taskController = require('../controllers').task;
router.get('/api/task',taskController.list);
router.get('/api/task/:id',taskController.getById);
router.post('/api/task',taskController.add);
router.put('/api/task/:id', taskController.update);
router.delete('/api/task/:id', taskController.delete);

const teamController = require('../controllers').team;
router.get('/api/team',teamController.list);
router.get('/api/team/:id',teamController.getById);
router.post('/api/team',teamController.add);
router.put('/api/team/:id', teamController.update);
router.delete('/api/team/:id', teamController.delete);

const solutionsController = require('../controllers').solution;
router.get('/api/solution',solutionsController.list);
router.get('/api/solution/:id',solutionsController.getById);
router.post('/api/solution',solutionsController.add);
router.put('/api/solution/:id', solutionsController.update);
router.delete('/api/solution/:id', solutionsController.delete);

module.exports = router;
