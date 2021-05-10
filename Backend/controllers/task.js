const task = require('../sequelize/models').task;
const Subject = require('../sequelize/models').subject;
const uuid = require('uuid');

module.exports = {

    list(req,res){
        return task
            .findAll({
                include:[{
                    model: Subject,
                    as : 'subject'
                }]
            })
            .then((tasks) => {res.status(200).send(tasks)})
            .catch((error) => {res.status(400).send(error)})
    },

    getById(req,res){
        return task
            .findByPk(req.params.id)
            .then((task) => {
                if (!task) {
                    return res.status(404).send({
                        message: "Task with ID '"+req.params.id+"' not Found!",
                    });
                }
                return res.status(200).send(task);
            })
            .catch((error) => {
                console.log(error);
                res.status(400).send(error);
            });
    },

    add(req,res){

    },

    update(req,res){
    },

    delete(req, res) {
    }
}
