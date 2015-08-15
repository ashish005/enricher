/**
 * Created by wizdev on 8/8/2015.
 */
dbController = function(router, mongoose) {
    var Db = require('mongodb').Db,
        MongoClient = require('mongodb').MongoClient,
        Server = require('mongodb').Server;

    var db = new Db('EnricherDB', new Server('127.0.0.1', 27017));

    /*mongoose.connection.on('open', function(){
        mongoose.connection.db.collectionNames(function(error, names) {
            if (error) {
                throw new Error(error);
            } else {
                names.map(function(name) {
                    console.log('found collection %s', name);
                });
            }
        });
    });*/
    var dbNative = mongoose.connection.db;

    router.get('/db/collections', function(req, res) {
        db.open(function(err,db){ // <------everything wrapped inside this function
            /*db.collection({}, function(err, collection) {
                collection.find().toArray(function(err, items) {
                    console.log(items);
                    res.send(items);
                });
                res.send(collection);
            });*/
            res.send(db.collections());
        });
    });
}

module.exports = dbController;