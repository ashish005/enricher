/**
 * Created by wizdev on 7/26/2015.
 */
(function(define, angular){
    define(['enricher', 'fundFilterGrid'], function (app) {//'fundFilters',
        app.controller('defaultFilterGridController', ['$scope', '$rootScope', '$http','$routeParams','$location',
            function ($scope, $rootScope, $http, $routeParams, $location)
            {
                var _routeParam =  $routeParams.name;
                var _path = $location.$$path.split('/')[1];

                var _baseApi = '';
                var _routeSettings = {
                    nfos:{name:'NFOs', api:'nfos', extraParams:''},
                    dividends:{name:'Dividends', api:'dividends', extraParams:''},
                    indices:{name:'Indices', api:'indices', extraParams:''},
                    schemeSummary:{name:'Indices', api:_routeParam, extraParams:''}
                };

                var _activeRoutes = _routeSettings[_path];

                var _httpRequest = {method: 'GET', url: '/api/'};
                _httpRequest.url += _activeRoutes.api + _activeRoutes.extraParams;

                $scope.ngOptions = {};

                $http(_httpRequest).
                    success(function(data, status, headers, config) {
                        $scope.ngOptions.data = data;
                        if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
                            $scope.$apply();
                        }
                    }).
                    error(function(data, status, headers, config) {
                    });
            }
        ]);
    });
})(window.define, window.angular);