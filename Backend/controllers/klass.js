const klass = require('../sequelize/models').klass;
const uuid = require('uuid');

module.exports = {

    list(req,res){
        return klass
            .findAll()
            .then((klass) => {res.status(200).send(klass)})
            .catch((error) => {res.status(400).send(error)})
    },

    getById(req,res){
        return klass
            .findByPk(req.params.id)
            .then((klass) => {
                if (!klass) {
                    return res.status(404).send({
                        message: 'Class not Found!',
                    });
                }
                return res.status(200).send(klass);
            })
            .catch((error) => {
                console.log(error);
                res.status(400).send(error);
            });
    },

    add(req,res){
        if (req.body.classname === ""){
            res.status(403).send("Not a valid Classname")
        }else{
            klass.create({
                class_id : uuid.v4(),
                classname : req.body.classname,
            })
                .then((klass) => res.status(201).send(klass))
                .catch((error) => res.status(400).send(error));
        }
    },

    update(req,res){
        console.log(req.body);
        return klass
            .findByPk(req.params.id)
            .then((role) => {
                if (!role) {
                    return res.status(404).send({
                        message: 'Class Not Found',
                    });
                }
                return role
                    .update({
                        classname: req.body.classname || role.classname,
                    })
                    .then(() => res.status(200).send(role))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    delete(req, res) {
        return klass
            .findByPk(req.params.id)
            .then(klass => {
                if (!klass) {
                    return res.status(400).send({
                        message: 'Class Not Found',
                    });
                }
                return klass
                    .destroy()
                    .then(() => res.status(200).send({
                        message: "Class "+klass.classname+"'("+klaas.class_id+") was deleted succesfully!"
                    }))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    }
}
