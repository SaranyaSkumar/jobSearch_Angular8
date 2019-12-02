const express = require('express');
const app = express();
const path = require('path');
const pg = require('pg')
const Sequelize =  require('sequelize')
const bodyParser = require('body-parser')
const search = require('./controllers/searchLogic');

const port = process.env.PORT || 5500;
app.set('port', port);



search(app);
// app.sq= require('./app/db/model');
// app.user = require('./app/db/model/user')(app.sq,null);

app.route('/*', function(req,res) { res.redirect(__dirname + '/dist/client/index.html') })

const server = app.listen(port, () => {
    let host = server.address().address;
    let port = server.address().port;
    console.log('Server started at     ', new Date().toString());
    console.log('listening at http://%s:%s     ', host, port);
});
