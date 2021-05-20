const express = require('express'),
    bcrypt = require('bcryptjs'),
    dotenv = require('dotenv'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    cors = require('cors')

app = express();

//===============SESSION HANDLER===============
const expressSession = require('express-session')({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
});

//===============PASSPORT===============
const passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());

//===============CORS===============
const corsOptions = {
    origin: "http://localhost:4200"
};
app.use(cors(corsOptions));

//===============EXPRESS================
app.use(logger('dev'));
dotenv.config();

//===============URL BODY================
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

//===============ROUTES===============
const indexRouter = require('./routes/index'),
    apiRouter = require('./routes/apiRouter');
app.use('/', indexRouter);
app.use('/api',apiRouter);


//===============SEQUELIZE===============
const db = require("./sequelize/models");
//DEV
if (process.env.NODE_ENV == "development"){
    console.log('[SEQUELIZE] DEV MODE - DROPPING AND RECREATING DB');
    db.sequelize.sync({force: true,logging: console.log}).then(() => {
        db.sequelize.options.logging = true;
        //initzialize();
    });
}
//PROD
else if(process.env.NODE_ENV == "production" || process.env.NODE_ENV == "test"){
    db.sequelize.options.logging = false;
    db.sequelize.sync();
}

module.exports = app;
