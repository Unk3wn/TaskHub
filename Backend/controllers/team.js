const team = require('../sequelize/models').team;
const klass = require('../sequelize/models').klass;
const user = require('../sequelize/models').user;
const uuid = require('uuid');

module.exports = {

    list(req,res){
        return team
            .findAll(req.params.id,{
                include : [{
                    model: klass,
                    as: 'klass'
                },{
                    model: user,
                    as: 'user'
                }],
                attributes: {
                    exclude: ['team_leader','class_id']
                }
            })
            .then((teams) => {res.status(200).send(teams)})
            .catch((error) => {res.status(400).send(error)})
    },

    getById(req,res){
        return team
            .findByPk(req.params.id,{
                include : [{
                    model: klass,
                    as: 'klass'
                },{
                    model: user,
                    as: 'user'
                }],
                attributes: {
                    exclude: ['team_leader','class_id']
                }
            })
            .then((task) => {
                if (!task) {
                    return res.status(404).send({
                        message: "Team with ID '"+req.params.id+"' not Found!",
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
        let valid = true;
        if (req.body.team_name === ""){
            res.status(403).send("Not a valid Team Name");
            valid = false;
        }
        if (req.body.team_leader === ""){
            res.status(403).send("Not a valid Team Leader");
            valid = false;
        }
        if (req.body.class_id === ""){
            res.status(403).send("Not a valid Class");
            valid = false;
        }
        if(valid){
            team.create({
                team_id : uuid.v4(),
                team_name : req.body.team_name,
                team_leader : req.body.team_leader,
                class_id : req.body.class_id
            })
                .then((team) => res.status(201).send(team))
                .catch((error) => res.status(400).send(error));
        }
    },

    update(req,res){
        return team
            .findByPk(req.params.id)
            .then((team) => {
                if (!team) {
                    return res.status(404).send({
                        message: 'Team Not Found',
                    });
                }
                return team
                    .update({
                        team_name : req.body.team_name || team.team_name,
                        team_leader: req.body.team_leader || team.team_leader,
                        class_id: req.body.class_id || team.class_id
                    })
                    .then(() => res.status(200).send(team))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    delete(req, res) {
        return team
            .findByPk(req.params.id)
            .then(team => {
                if (!team) {
                    return res.status(400).send({
                        message: 'Team Not Found',
                    });
                }
                return team
                    .destroy()
                    .then(() => res.status(200).send({
                        message: "Team "+team.team_name+"'("+team.team_id+") was deleted succesfully!"
                    }))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    }
}
