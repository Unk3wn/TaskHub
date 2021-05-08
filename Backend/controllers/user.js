const user = require('../sequelize/models').user;
const uuid = require('uuid');

module.exports = {

    list(req,res){
        return user
            .findAll()
            .then((user) => {res.status(200).send(user)})
            .catch((error) => {res.status(400).send(error)})
    },

    getById(req,res){
        return user
            .findByPk(req.params.id)
            .then((user) => {
                if (!user) {
                    return res.status(404).send({
                        message: 'User not Found!',
                    });
                }
                return res.status(200).send(user);
            })
            .catch((error) => {
                console.log(error);
                res.status(400).send(error);
            });
    },

    add(req,res){
        let valid = true;
        if (req.body.username === ""){
            res.status(403).send("Not a valid Username");
            valid = false;
        }
        if (req.body.password === ""){
            res.status(403).send("Not a valid Password");
            valid = false;
        }
        if (req.body.first_name === ""){
            res.status(403).send("Not a valid firstName");
            valid = false;
        }
        if (req.body.last_name === ""){
            res.status(403).send("Not a valid lastName");
            valid = false;
        }
        if (req.body.email === ""){
            res.status(403).send("Not a valid eMail-Address");
            valid = false;
        }
        if(valid){
            user.create({
                user_id : uuid.v4(),
                username : req.body.username,
                password : req.body.password,
                first_name : req.body.first_name,
                last_name : req.body.last_name,
                email : req.body.email
            })
            .then((user) => res.status(201).send(user))
            .catch((error) => res.status(400).send(error));
        }
    },

    //TODO WENN LOGIN VERSCHLÜSSELUNG
    update(req,res){
        console.log(req.body);
        return user
            .findByPk(req.params.id)
            .then((user) => {
                if (!user) {
                    return res.status(404).send({
                        message: 'User Not Found',
                    });
                }
                return user
                    .update({
                        password : req.body.password || user.password,
                        first_name: req.body.first_name || user.first_name,
                        last_name: req.body.last_name || user.last_name,
                        email: req.body.email || user.email,
                    })
                    .then(() => res.status(200).send(user))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    delete(req, res) {
        return user
            .findByPk(req.params.id)
            .then(user => {
                if (!user) {
                    return res.status(400).send({
                        message: 'User Not Found',
                    });
                }
                return user
                    .destroy()
                    .then(() => res.status(200).send({
                        message: "User "+user.username+"'("+user.user_id+") was deleted succesfully!"
                    }))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    }
}
