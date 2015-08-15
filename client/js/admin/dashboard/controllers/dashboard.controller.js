/**
 * Created by wizdev on 8/8/2015.
 */
(function(define, angular){
    define(['enricher'], function (app) {
        app.controller('dashboardController', ['$scope', '$rootScope', '$http',
            function ($scope, $rootScope, $http) {
                $scope.ngOptions= { data:[] };

                $scope.initDashboard = function (){
                    var _httpRequest = {method: 'GET', url: 'api/db/collections'};
                    $http(_httpRequest)
                        .success(function (data, status, headers, config) {
                            debugger;
                            $scope.ngOptions.data = data;
                            if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
                                $scope.$apply();
                            }
                        })
                        .error(function (data, status, headers, config) {});
                };
            }
        ]);
    });
})(window.define, window.angular);