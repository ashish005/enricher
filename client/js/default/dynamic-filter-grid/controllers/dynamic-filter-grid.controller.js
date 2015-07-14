/**
 * Created by wizdev on 7/12/2015.
 */
(function(define, angular){
    define(['enricher'], function (app) {
        app.register.controller('dynFilterGridController', ['$scope', '$rootScope', '$http',
            function ($scope, $rootScope, $http)
            {
                $scope.ngOptions = {};
            }
        ]);
    });
})(window.define, window.angular);