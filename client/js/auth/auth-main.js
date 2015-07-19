/**
 * Created by wizdev on 6/28/2015.
 */
(function(define, angular){
    define(['angularAMD'], function (angularAMD) {
        var auth = angular.module('enricher.auth', []);
        auth.config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/login',
                {
                    templateUrl: 'client/js/auth/templates/login.html',
                    controller: 'authController'
                })
                .when('/register',
                {
                    templateUrl: 'client/js/auth/templates/register.html',
                    controllerUrl: 'authController'
                })
                .when('/forgot_password', { templateUrl: 'client/js/auth/templates/forgot_password.html' })
        }]);
        auth.controller('authController', ['$scope', '$rootScope', '$http',
            function ($scope, $rootScope, $http) {
                $scope.initLoginForm = function() {
                    $scope.form = {
                        loginId: 'me.ashish005@gmail.com',
                        password: '123456'
                    }
                };
                $scope.initRegisterForm = function() {
                    $scope.form = {
                        name: 'Ashish Chaturvedi',
                        mobile:'9873210774',
                        email: 'me.ashish005@gmail.com',
                        password: '123456',
                        confPassword: "123456",
                        isAgreed: true
                    }
                };
                $scope.submitForm = function() {
                    console.log("posting data....");
                    console.log( $scope.form);
                    $http({method: 'POST', url: 'api/signup', data: {register: $scope.form}}).
                        success(function(data, status, headers, config) {
                            // this callback will be called asynchronously when the response is available.
                            console.log('todos: ', data );
                        }).
                        error(function(data, status, headers, config) {
                            // called asynchronously if an error occurs or server returns response with an error status.
                            console.log('Oops and error', data);
                        });
                };
                $scope.submitLoginForm = function() {

                };
            }
        ]);
        return auth;
    });
})(window.define, window.angular);