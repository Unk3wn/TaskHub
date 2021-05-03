const role = require('../sequelize/models').role;
const uuid = require('uuid');

module.exports = {

    list(req,res){
        return role
            .findAll()
            .then((roles) => {res.status(200).send(roles)})
            .catch((error) => {res.status(400).send(error)})
    },

    getById(req,res){
        return role
            .findByPk(req.params.id)
            .then((role) => {
                if (!role) {
                    return res.status(404).send({
                        message: 'Role not Found!',
                    });
                }
                return res.status(200).send(role);
            })
            .catch((error) => {
                console.log(error);
                res.status(400).send(error);
            });
    },

    add(req,res){
        if (req.body.role_name === ""){
            res.status(403).send("Not a valid Rolename")
        }else{
            role.create({
                role_id : uuid.v4(),
                role_name : req.body.role_name,
            })
                .then((role) => res.status(201).send(role))
                .catch((error) => res.status(400).send(error));
        }
    },

    update(req,res){
        console.log(req.body);
        return role
            .findByPk(req.params.id)
            .then((role) => {
                if (!role) {
                    return res.status(404).send({
                        message: 'Role Not Found',
                    });
                }
                return role
                    .update({
                        role_name: req.body.role_name || role.role_name,
                    })
                    .then(() => res.status(200).send(role))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    delete(req, res) {
        return role
            .findByPk(req.params.id)
            .then(role => {
                if (!role) {
                    return res.status(400).send({
                        message: 'Role Not Found',
                    });
                }
                return role
                    .destroy()
                    .then(() => res.status(200).send({
                        message: "Role "+role.role_name+"'("+role.role_id+") was deleted succesfully!"
                    }))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    }
}
