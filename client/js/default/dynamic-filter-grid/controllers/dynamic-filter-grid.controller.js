/**
 * Created by wizdev on 7/12/2015.
 */
(function(define, angular){
    define(['enricher', 'fundFilterGrid'], function (app) {//'fundFilters',
        app.controller('dynFilterGridController', ['$scope', '$rootScope', '$http','$routeParams',
            function ($scope, $rootScope, $http, $routeParams)
            {
                var _routeParam =  $routeParams.name;
                $scope.ngOptions={};

                var _httpRequest = {method: 'GET', url: '/api/funds/'+ _routeParam};
                $http(_httpRequest).
                    success(function(data, status, headers, config) {
                        $scope.ngOptions.data =  data;
                    }).
                    error(function(data, status, headers, config) {
                    });
            }
        ]);
    });
})(window.define, window.angular);