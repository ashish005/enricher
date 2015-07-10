/**
 * Created by wizdev on 7/5/2015.
 */
(function(define, angular){
    define(['enricher'], function (app) {
        app.register.controller('authController', ['$scope', '$rootScope', '$http',
            function ($scope, $rootScope, $http) {
                $scope.initLoginForm = function() {
                   /* $http({method: 'GET', url: 'api/login'}).
                        success(function(data, status, headers, config) {
                            // this callback will be called asynchronously
                            // when the response is available.
                            console.log('todos: ', data );
                        }).
                        error(function(data, status, headers, config) {
                            // called asynchronously if an error occurs
                            // or server returns response with an error status.
                            console.log('Oops and error', data);
                        });*/
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
    });
})(window.define, window.angular);