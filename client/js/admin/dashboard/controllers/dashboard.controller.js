/**
 * Created by wizdev on 8/8/2015.
 */
(function(define, angular){
    define(['enricher', 'excelImportExport'], function (app) {
        app.controller('dashboardController', ['$scope', '$rootScope', '$http',
            function ($scope, $rootScope, $http) {
                $scope.ngOptions= { columnDefs:[], data:[] };
                var _data;
                $scope.excelInformation = function(_activeOption, data){
                    _data = JSON.parse(data);
                    $scope.excelTabsName=[];
                    angular.forEach(_data, function(item, key){
                        $scope.excelTabsName.push({key:key});
                    });
                };

                $scope.showActiveInfo = function (activeSheet){
                    var _gridData = _data[activeSheet];
                    $scope.ngOptions.columnDefs = [];
                    var _firstRowInfo  = _gridData[0];
                    if(_gridData.length>0 && _firstRowInfo){
                        angular.forEach(_firstRowInfo, function(item, key){
                            try
                            {
                                var _key = key.replace(/([@"\W+"])/g,"");
                                $scope.ngOptions.columnDefs.push({name:key, width: 'auto'});
                            }catch(err){
                                console.log(key);
                            }
                        });
                    }
                    $scope.ngOptions.data =  _data[activeSheet];
                    /*if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
                        $scope.$apply();
                    }*/
                };

                $scope.initDashboard = function (){
                    /*var _httpRequest = {method: 'GET', url: 'api/db/collections'};
                    $http(_httpRequest)
                        .success(function (data, status, headers, config) {
                            debugger;
                            $scope.ngOptions.data = data;
                            if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
                                $scope.$apply();
                            }
                        })
                        .error(function (data, status, headers, config) {});*/
                };
            }
        ]);
    });
})(window.define, window.angular);