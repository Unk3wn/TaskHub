const jwt = require("jsonwebtoken");
const db = require("../sequelize/models");
const User = db.user;

verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send({
            message: "No token provided!"
        });
    }

    jwt.verify(token, process.env.SESSION_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: "Unauthorized!"
            });
        }
        req.userId = decoded.user_id;
        next();
    });
};

isStudent = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
                if (roles[i].role_name === "Student") {
                    next();
                    return;
                }
            }

            res.status(403).send({
                message: "Require Student Role!"
            });
        });
    });
};
isTeacher = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
                if (roles[i].role_name === "Teacher") {
                    next();
                    return;
                }
            }
            res.status(403).send({
                message: "Require Teacher Role!"
            });
        });
    });
};

isAdmin = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
                if (roles[i].role_name === "Admin") {
                    next();
                    return;
                }
            }
            res.status(403).send({
                message: "Require Admin Role!"
            });
            return;
        });
    });
};

const authJwt = {
    verifyToken: verifyToken,
    isStudent: isStudent,
    isTeacher : isTeacher,
    isAdmin: isAdmin
};

module.exports = authJwt;
