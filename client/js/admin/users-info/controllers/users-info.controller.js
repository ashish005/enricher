/**
 * Created by wizdev on 7/9/2015.
 */
(function(define, angular){
    define(['enricher'], function (app) {
        app.register.controller('userInfoController', ['$scope', '$rootScope', '$http',
            function ($scope, $rootScope, $http) {
                $scope.init = function(){
                    $scope.ngOptions = {
                        data: 'userInfo',
                        columnDefs: [
                            { field: "_id",pinned: true },
                            { field: "name",pinned:true},
                            { field: "mobile",pinned:true,enableCellEdit:false },
                            { field: "email",pinned:true,enableCellEdit:false },
                            { field: "password",pinned:true,enableCellEdit:false },
                            { field: "isAgreed",pinned:true,enableCellEdit:false }
                        ]
                    };

                    var _httpRequest = {method: 'GET', url: 'api/signup-users'};
                    $http(_httpRequest).
                        success(function(data, status, headers, config) {
                            $scope.userInfo =  data;
                        }).
                        error(function(data, status, headers, config) {});
                }
            }
        ]);
    });
})(window.define, window.angular);