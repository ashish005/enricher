 /**
 * Created by wizdev on 7/10/2015.
 */
 module.exports = function (server, router, mongoose) {
     require('../controllers/auth.controller')(router, mongoose);
     require('../controllers/app-init.controller')(router, mongoose);
     require('../controllers/default/default.controller')(router, mongoose);

     router.get('/apis', function(req, res) {
         res.render('apis', {data:router.stack});
     });
     // all of our routes will be prefixed with /api
     server.use('/api', router);
     module.exports = router;
 }