/**
 * Created by wizdev on 6/28/2015.
 */
(function(define, angular){
    define(['angularAMD'], function (angularAMD) {
        var auth = angular.module('enricher.auth', []);
        auth.config(['$routeProvider', function ($routeProvider) {
            var _authOptions = {
                login:
                {
                    templateUrl: 'client/js/auth/templates/login.html',
                    controllerUrl: 'js/auth/controllers/auth.controller'
                },
                register:
                {
                    templateUrl: 'client/js/auth/templates/register.html',
                    controllerUrl: 'js/auth/controllers/auth.controller'
                },
                forgot_password:{ templateUrl: 'client/js/auth/templates/forgot_password.html' }
            }

            $routeProvider
                .when('/login',angularAMD.route(_authOptions.login))
                .when('/register',angularAMD.route(_authOptions.register))
                .when('/forgot_password',angularAMD.route(_authOptions.forgot_password))
        }]);
    });
})(window.define, window.angular);