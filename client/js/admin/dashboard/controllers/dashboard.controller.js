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
                    $scope.excelActiveForm = _activeOption;
                   if('json' == _activeOption) {
                       _data = JSON.parse(data);
                       $scope.excelTabsName = [];
                       angular.forEach(_data, function (item, key) {
                           $scope.excelTabsName.push({key: key});
                       });
                   }else{
                       if (out.innerText === undefined) {
                           out.textContent = data;
                       }
                       else {
                           out.innerText = data;
                       }
                   }
                };

                $scope.showActiveInfo = function (activeSheet){
                    var _gridData = _data[activeSheet];
                    if(_gridData.body && _gridData.body.length>0)
                    {
                        var _firstRowInfo  = _gridData.header;
                        $scope.ngOptions =  { data:[], columnDefs :[]};

                        angular.forEach(_firstRowInfo, function(item, key){
                            $scope.ngOptions.columnDefs.push({field:key, displayName:item});
                        });
                        $scope.ngOptions.data =  _gridData.body;
                    }
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