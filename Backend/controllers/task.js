const task = require('../sequelize/models').task;
const subject = require('../sequelize/models').subject;
const klass = require('../sequelize/models').klass;
const uuid = require('uuid');

module.exports = {

    list(req,res){
        return task
            .findAll({
                include : [{
                    model: klass,
                    as: 'klass'
                },{
                    model: subject,
                    as: 'subject'
                }],
                attributes: {
                    exclude: ['class','subject_id']
                }
            })
            .then((tasks) => {res.status(200).send(tasks)})
            .catch((error) => {res.status(400).send(error)})
    },

    getById(req,res){
        return task
            .findByPk(req.params.id,{
                include : [{
                    model: klass,
                    as: 'klass'
                },{
                    model: subject,
                    as: 'subject'
                }],
                attributes: {
                    exclude: ['class','subject_id']
                }
            })
            .then((task) => {
                if (!task) {
                    return res.status(404).send({
                        message: "Task with ID '"+req.params.id+"' not Found!",
                    });
                }
                return res.status(200).send(task);
            })
            .catch((error) => {
                res.status(400).send(error);
            });
    },

    add(req,res){
        let valid = true;
        if (req.body.subject_id === ""){
            res.status(403).send("Not a valid Subject ID");
            valid = false;
        }
        if (req.body.question === ""){
            res.status(403).send("Not a valid Question");
            valid = false;
        }
        if (req.body.class === ""){
            res.status(403).send("Not a valid Class");
            valid = false;
        }
        if (req.body.last_name === ""){
            res.status(403).send("Not a valid lastName");
            valid = false;
        }
        if (req.body.duedate === ""){
            res.status(403).send("Not a valid DueDate");
            valid = false;
        }
        if(valid){
            task.create({
                task_id : uuid.v4(),
                subject_id : req.body.subject_id,
                question : req.body.question,
                class : req.body.class,
                duedate : req.body.duedate,
            })
                .then((task) => res.status(201).send(task))
                .catch((error) => res.status(400).send(error));
        }
    },

    update(req,res){
        return task
            .findByPk(req.params.id)
            .then((task) => {
                if (!task) {
                    return res.status(404).send({
                        message: 'Task Not Found',
                    });
                }
                return task
                    .update({
                        subject_id : req.body.subject_id || task.subject_id,
                        question: req.body.question || task.question,
                        class: req.body.class || task.class,
                        duedate: req.body.duedate || task.duedate,
                    })
                    .then(() => res.status(200).send(task))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    delete(req, res) {
        return task
            .findByPk(req.params.id)
            .then(task => {
                if (!task) {
                    return res.status(400).send({
                        message: 'Task Not Found',
                    });
                }
                return task
                    .destroy()
                    .then(() => res.status(200).send({
                        message: "Task "+task.question+"'("+task.task_id+") was deleted succesfully!"
                    }))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    }
}
