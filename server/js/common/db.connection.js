/**
 * Created by wizdev on 7/9/2015.
 */
//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient; //We need to work with "MongoClient" interface in order to connect to a mongodb server.

var url = 'mongodb://localhost:27017/enricherDB';// Connection URL. This is where your mongodb server is running.

// Use connect method to connect to the Server
return MongoClient.connect(url);