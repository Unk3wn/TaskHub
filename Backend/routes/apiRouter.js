var express = require('express');
var router = express.Router();

router.use('/user',require('./api/userRouter'));
router.use('/role',require('./api/roleRouter'));
router.use('/subject',require('./api/subjectRouter'));
router.use('/class',require('./api/classRouter'));
router.use('/task',require('./api/taskRouter'));
router.use('/team',require('./api/teamRouter'));
router.use('/solution',require('./api/userRouter'));

module.exports = router;
