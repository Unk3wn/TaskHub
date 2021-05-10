const solution = require('../sequelize/models').solution;
const team = require('../sequelize/models').team;
const task = require('../sequelize/models').task;
const uuid = require('uuid');

module.exports = {

    list(req,res){
        return solution
            .findAll({
                    include: [{
                        model: team,
                        as: 'team_id'
                    },{
                        model:task,
                        as: 'task_id'
                    }],
                    attributes: {
                        exclude: ['team','task']
                    }
                }
            )
            .then((solutions) => {res.status(200).send(solutions)})
            .catch((error) => {res.status(400).send(error)})
    },

    getById(req,res){
        return solution
            .findByPk(req.params.id,{
                include: [{
                    model: team,
                    as: 'team_id'
                },{
                    model:task,
                    as: 'task_id'
                }],
                attributes: {
                    exclude: ['team','task']
                }
            })
            .then((solution) => {
                if (!solution) {
                    return res.status(404).send({
                        message: "Solution with ID '"+req.params.id+"' not Found!",
                    });
                }
                return res.status(200).send(solution);
            })
            .catch((error) => {
                console.log(error);
                res.status(400).send(error);
            });
    },

    add(req,res){
        let valid = true;
        if (req.body.text === ""){
            res.status(403).send("Not a valid Text");
            valid = false;
        }
        if (req.body.time_ended === ""){
            res.status(403).send("Not a valid Time Ended Flag");
            valid = false;
        }
        if (req.body.reviewed === ""){
            res.status(403).send("Not a valid Reviewed Flag");
            valid = false;
        }
        if (req.body.marked === ""){
            res.status(403).send("Not a valid Marked Flag");
            valid = false;
        }
        if (req.body.mark === ""){
            res.status(403).send("Not a valid Mark");
            valid = false;
        }
        if (req.body.task === ""){
            res.status(403).send("Not a valid Task");
            valid = false;
        }
        if (req.body.team === ""){
            res.status(403).send("Not a valid Team");
            valid = false;
        }
        if(valid){
            solution.create({
                solution_id : uuid.v4(),
                text : req.body.text,
                time_ended : req.body.time_ended,
                reviewed : req.body.reviewed,
                marked : req.body.marked,
                mark : req.body.mark,
                task : req.body.task,
                team : req.body.team,
            })
                .then((solution) => res.status(201).send(solution))
                .catch((error) => res.status(400).send(error));
        }
    },

    //TODO
    update(req,res){

    },

    delete(req, res) {

    }
}
