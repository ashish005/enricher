/**
 * Created by wizdev on 6/21/2015.
 */
    var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose')

    var  server = express(); // Set up an express server (but not starting it yet)

    // configure app to use bodyParser()
    // this will let us get the data from a POST
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(bodyParser.json());

    var port = process.env.PORT || 3000;        // set our port
    server.set('port', port);
    server.set('views', __dirname + '/server/js/views');
    server.set('view engine', 'jade');

var serverConfig = {
    basePath:'./server/js/'
};

// Add live reload
//server.use(livereload({port: livereloadport}));

server.get('/', function (req, res) {
    res.sendFile(__dirname  + '/client/index.html');
});

server.use('/', express.static(__dirname + '/'));

mongoose.connect('mongodb://localhost:27017/enricherDB', function(error, db) {
    console.log("mongo connected");
});

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router
require('./server/js/routers/server.routers')(server, router, mongoose);//Define All routes here


// START THE SERVER
server.listen(server.get('port'), function () {
    console.log('I am listening ' + server.get('port'));
    //require('./server/document')(router.stack, 'express');
});
