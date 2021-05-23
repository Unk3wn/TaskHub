const express = require('express');
const router = express.Router();

router.use('/user',require('./api/userRouter'));
router.use('/role',require('./api/roleRouter'));
router.use('/subject',require('./api/subjectRouter'));
router.use('/class',require('./api/classRouter'));
router.use('/task',require('./api/taskRouter'));
router.use('/team',require('./api/teamRouter'));
router.use('/solution',require('./api/userRouter'));

// AUTH
router.use('/auth',require('./api/authRouter'));

// Test for Authentification
router.use('/test',require('./api/authTestRouter'));


module.exports = router;
