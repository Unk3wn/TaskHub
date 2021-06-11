const db = require("../sequelize/models");
const role = db.role;
const User = db.user;

checkDuplicateUsernameOrEmail = (req, res, next) => {
    // Username
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(user => {
        if (user) {
            res.status(400).send({
                message: "Failed! Username is already in use!"
            });
            return;
        }

        // Email
        User.findOne({
            where: {
                email: req.body.email
            }
        }).then(user => {
            if (user) {
                res.status(400).send({
                    message: "Failed! Email is already in use!"
                });
                return;
            }
            next();
        });
    });
};

const verifySignUp = {
    checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail
};

module.exports = verifySignUp;
