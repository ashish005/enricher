/**
 * Created by wizdev on 7/8/2015.
 */
authController = function(router, mongoose) {
    var registerModel = require('../models/auth.model')(mongoose);

    router.get('/login', function(req, res) {
        res.status(200).send(router.stack);
    });

    router.get('/signup-users', function(req, res) {
        registerModel.find({}, function (err, data) {
            res.send(data);
        });
    });

    router.post('/signup', function (req, res){
        console.log("POST: ");
        res.header("Access-Control-Allow-Origin", "http://localhost");
        res.header("Access-Control-Allow-Methods", "GET, POST");
        var register = new registerModel(req.body.register);
        register.save(
            function(err, saved) { // Query in MongoDB via Mongo JS Module
                res.end( ( err || !saved ) ? err:saved);
        });
    });
}

module.exports = authController;