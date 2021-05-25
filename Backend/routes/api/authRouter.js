const express = require('express');
const router = express.Router();

const {verifySignUp} = require("../../middelware/index");
const authController = require("../../controllers/auth.controller");
const userController = require("../../controllers/").user;

router.use(function (req, res, next) {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    next();
})
//Danke Paddy für die Hilfe
router.post("/signup",
    [
        verifySignUp.checkDuplicateUsernameOrEmail
    ],
    userController.add);

router.post("/signin", authController.signin);

module.exports = router;
