'use strict';

const bcrypt = require('bcryptjs');
const constants = require('../config/constants');

const SeedingFactory = (type) => {
    if (type == "user"){
        return seedingUser()
    }
    if (type == "class"){
        return seedingClass()
    }
}

function seedingUser(){
    return {
        user_id : constants.userID,
        username : "p4ddy",
        password : bcrypt.hashSync("test",10),
        first_name : "Paddy",
        last_name : "Mueller",
        email : "test@bonk.army"
    };
}

function seedingClass(){
    return {
        class_id : constants.classID,
        classname : "Testclass"
    };
}


module.exports = SeedingFactory;
