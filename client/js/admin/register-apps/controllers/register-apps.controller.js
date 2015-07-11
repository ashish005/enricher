/**
 * Created by wizdev on 7/10/2015.
 */
(function(define, angular){
    define(['enricher'], function (app) {
        app.register.controller('registerAppsController', ['$scope', '$rootScope', '$http',
            function ($scope, $rootScope, $http) {
                $scope.init = function(){
                    $scope.gridInfo = {
                        data: 'gridData',
                        columnDefs: [
                            { field: "_id" },
                            { field: "hash"},
                            { field: "host" },
                            { field: "hostname" },
                            { field: "origin" },
                            { field: "ownerName" },
                            { field: "ownerMailId" },
                            { field: "ownerMobileNo" },
                            { field: "date" }
                        ]
                    };

                    var _httpRequest = {method: 'GET', url: 'api/apps'};
                        $http(_httpRequest).
                        success(function(data, status, headers, config) {
                            $scope.gridData =  data;
                        }).
                        error(function(data, status, headers, config) {});
                }

                $scope.registerApplication = function(){
                    var locationInfo = window.location;
                    var _appModel = {
                        hash: locationInfo.hash,
                        host: locationInfo.host,
                        hostname: locationInfo.hostname,
                        origin: locationInfo.origin,
                        ownerName:'Ashish Chaturvedi',
                        ownerMailId:'me.ashish005@gmail.com',
                        ownerMobileNo:'9873210774'
                    };

                    var _httpRequest = {method: 'POST', url: 'api/register-app', data:{model:_appModel} };
                    $http(_httpRequest).
                        success(function(data, status, headers, config) {
                            $scope.init();
                        }).
                        error(function(data, status, headers, config) {});
                }
            }
        ]);
    });
})(window.define, window.angular);