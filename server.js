/**
 * Created by wizdev on 6/21/2015.
 */
    var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    http = require('http');

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
    console.log('error: ' + error);
    console.log('success: ' + db);
});

/*// Create the http server.
http.createServer(function (request, response) {
    // Attach listener on end event.
    request.on('end', function () {
        // Query the database.
        connection.query('SELECT * FROM your_table;', function (error, rows, fields) {
            response.writeHead(200, {
                'Content-Type': 'x-application/json'
            });
            // Send data as JSON string.
            // Rows variable holds the result of the query.
            response.end(JSON.stringify(rows));
        });
    });
// Listen on the 8080 port.
}).listen(8080);*/

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router
require('./server/js/routers/server.routers')(server, router, mongoose);//Define All routes here

server.listen(server.get('port'), function () {
    console.log('I am listening ' + server.get('port'));
 });
