const express = require('express');
const app = express();
const path = require('path');
const pg = require('pg')
const Sequelize =  require('sequelize')
const bodyParser = require('body-parser')
const search = require('./controllers/searchLogic');
const login = require('./controllers/loginController');

const port = process.env.PORT || 5500;
app.set('port', port);

let models = require('./models/connetion');
app.models = models;

let user = require('./models/model/user');
app.use(express.json({limit: '2mb'}));
app.use(express.urlencoded({ limit: '2mb', extended: true }));
// user.create({ name: "Jane", email: "Doe@gm.cm", mobile: "2232323"}).then(jane => {
//     console.log("Jane's auto-generated ID:", jane);
// });

search(app);
login(app);
// app.sq= require('./app/db/model');
// app.user = require('./app/db/model/user')(app.sq,null);
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.route('/*', function(req,res) { res.redirect(__dirname + '/dist/client/index.html') })

const server = app.listen(port, () => {
    let host = server.address().address;
    let port = server.address().port;
    console.log('Server started at     ', new Date().toString());
    console.log('listening at http://%s:%s     ', host, port);
});
