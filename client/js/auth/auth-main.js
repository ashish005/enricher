/**
 * Created by wizdev on 6/28/2015.
 */
(function(define, angular){
    define(function () {
        var auth = angular.module('enricher.auth', []);

        auth.config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/login', { template: 'client/js/auth/templates/login.html' })
        }]);
    });
})(window.define, window.angular);