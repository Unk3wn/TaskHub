const  router = require('express').Router();
const userController = require('../../controllers').user;

router.get('/',userController.list);
router.get('/:id',userController.getById);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);
router.post('/WithRoles',userController.addWithRoles);
router.post('/addRole/:userID/:roleID',userController.addRoleToUser);
router.post('/addClass/:userID/:classID',userController.addClassToUser);
router.post('/addTeam/:userID/:teamID',userController.addTeamToUser);

module.exports = router;
