/**
 * Created by wizdev on 7/10/2015.
 */
appInitController = function(router, mongoose) {
    var apps = require('../models/app-init.model')(mongoose);
    var init = require('../models/init.model')(mongoose);

    router.get('/apps', function(req, res) {
        apps.find({}, function (err, data) {
            res.send(data);
        });
    });

    router.post('/register-app', function (req, res){
        res.header("Access-Control-Allow-Origin", "http://localhost");
        res.header("Access-Control-Allow-Methods", "GET, POST");
        var _apps = new apps(req.body.model);

        _apps.save(
            function(err, saved) { // Query in MongoDB via Mongo JS Module
                res.send( ( err || !saved ) ? err:saved);
            });
    });

    router.get('/init', function(req, res) {
        console.log(req);
        init.find({}, function (err, data) {
            res.send(data);
        });
    });

    router.post('/init', function (req, res){
        res.header("Access-Control-Allow-Origin", "http://localhost");
        res.header("Access-Control-Allow-Methods", "GET, POST");

        var data = {
            viewType:'default',
            host:'http://localhost:3000',
            menu:[
                {
                    key: 'home',
                    text: 'Home',
                    iconClass: 'fa-th-large',
                    template: '<span class="label label-warning pull-right">16/24</span>',
                    childItems: null
                },
                {
                    key: 'fp',
                    text: 'Fund Performers',
                    iconClass: 'fa-th-large',
                    template: '<span class="label label-warning pull-right">16/24</span>',
                    childItems: [
                        {text: 'Top Gainers', key: 'tg'},
                        {text: 'Top Loosers', key: 'tl'}
                    ]
                },
                {
                    text: 'NFOs',
                    iconClass: 'fa-diamond',
                    key: 'nfo',
                    template: '<span class="label label-warning pull-right">16/24</span>',
                    childItems: null
                },
                {
                    text: 'Dividends',
                    iconClass: 'fa-bar-chart-o',
                    key: 'dvdnts',
                    template: '<span class="label label-warning pull-right">16/24</span>',
                    childItems: null
                },
                {
                    text: 'Indices',
                    iconClass: 'fa-bar-chart-o',
                    key: 'indecs',
                    template: '<span class="label label-warning pull-right">16/24</span>',
                    childItems: null
                },
                {
                    text: 'Tools',
                    iconClass: 'fa-bar-chart-o',
                    key: 'tools',
                    template: '<span class="label label-warning pull-right">16/24</span>',
                    childItems: [
                        {text: 'Fund Search', key: 'fs'},
                        {text: 'MF Tools', key: 'mft'}
                    ]
                }
            ],
            isActive:true
        };
        var _init = new init(data);
        _init.save(
            function(err, saved) { // Query in MongoDB via Mongo JS Module
                res.send( ( err || !saved ) ? err:saved);
            });
    });
}

module.exports = appInitController;