const express = require('express');
const router = express.Router();

const {authJwt} = require("../../middelware");
const controller = require("../../controllers/demoAuthController");

router.use(function (req, res, next) {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});

router.get("/all", controller.allAccess);

router.get("/user", [authJwt.verifyToken], controller.userTest);

router.get("/student", [authJwt.verifyToken, authJwt.isStudent], controller.studentTest);

router.get("/teacher", [authJwt.verifyToken, authJwt.isTeacher], controller.teacherTest);

router.get("/admin", [authJwt.verifyToken, authJwt.isAdmin], controller.adminTest);

module.exports = router;
