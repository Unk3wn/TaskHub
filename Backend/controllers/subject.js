const subject = require('../sequelize/models').subject;
const uuid = require('uuid');

module.exports = {

    list(req,res){
        return subject
            .findAll()
            .then((subjects) => {res.status(200).send(subjects)})
            .catch((error) => {res.status(400).send(error)})
    },

    getById(req,res){
        return subject
            .findByPk(req.params.id)
            .then((subject) => {
                if (!subject) {
                    return res.status(404).send({
                        message: "Subject with ID '"+req.params.id+"' not Found!",
                    });
                }
                return res.status(200).send(subject);
            })
            .catch((error) => {
                res.status(400).send(error);
            });
    },

    add(req,res){
        if (req.body.subject_name === ""){
            res.status(403).send("Not a valid SubjectName")
        }else{
            subject.create({
                subject_id : uuid.v4(),
                subject_name : req.body.subject_name,
            })
                .then((subject) => res.status(201).send(subject))
                .catch((error) => res.status(400).send(error));
        }
    },

    update(req,res){
        return subject
            .findByPk(req.params.id)
            .then((subject) => {
                if (!subject) {
                    return res.status(404).send({
                        message: 'Subject Not Found',
                    });
                }
                return subject
                    .update({
                        subject_name : req.body.subject_name || subject.subject_name,
                    })
                    .then(() => res.status(200).send(subject))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    delete(req, res) {
        return subject
            .findByPk(req.params.id)
            .then(subject => {
                if (!subject) {
                    return res.status(400).send({
                        message: 'Subject Not Found',
                    });
                }
                return subject
                    .destroy()
                    .then(() => res.status(200).send({
                        message: "Subject "+subject.subject_name+"'("+subject.subject_id+") was deleted succesfully!"
                    }))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    }
}
