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

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
/*router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});*/

require('./server/js/controllers/auth.controller')(router, mongoose);//, require('./server/js/common/db.connection')

/*router.get('/login', function(req, res) {
    res.status(200).send(router.stack);
});*/


router.get('/apis', function(req, res) {
    res.render('apis', {data:router.stack});
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
server.use('/api', router);
module.exports = router;
// START THE SERVER
server.listen(server.get('port'), function () {
    console.log('I am listening ' + server.get('port'));
    //require('./server/document')(router.stack, 'express');
});
