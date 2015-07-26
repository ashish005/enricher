/**
 * Created by wizdev on 7/26/2015.
 */
(function () {
    "use strict";
    define(['enricher', 'fundFilters'], function (app) {
        app.directive('fundFilterGrid', ['$http', function($http) {
            return {
                restrict: 'AE',
                scope:{
                    showTab:'@',
                    ngOptions:'='
                },
                templateUrl: 'client/js/plugins/filter-grid/filter-grid.html',
                link:function($scope, element){

                    $scope.tabsData =
                    {
                        snapshot: { title: 'Snapshot'},
                        shortTerm: { title: 'Short Term', disabled: true},
                        longTerm: { title: 'Long Term', disabled: true},
                        sipReturn: {  title: 'SIP Returns', disabled: true},
                        navDividend: {title: 'Nav & Dividends', disabled: true}
                    };

                    element.find('.ibox-content').on('click', '.btn-group>.btn', function (e) {
                        var _data = this.getAttribute("data-key");
                        var _activeColumn = {
                            snapshot: [
                                {field: "scheme", displayName: "scheme", index: 0},
                                {field: "yearReturn", displayName: "yearReturn", index: 1},
                                {field: "category", displayName: "category", index: 2},
                                {field: "subCategory", displayName: "subCategory", index: 3},
                                {field: "planType", displayName: "planType", index: 4},
                                {field: "type", displayName: "type", index: 5}
                            ],
                            shortTerm: [
                                {field: "Scheme", displayName: "Scheme", index: 0},
                                {field: "weakReturn", displayName: "weakReturn", index: 1},
                                {field: "weakRank", displayName: "weakRank", index: 2},
                                {field: "monthReturn", displayName: "monthReturn", index: 3},
                                {field: "monthRank", displayName: "monthRank", index: 4},
                                {field: "month3Return", displayName: "month3Return", index: 5}
                            ],
                            longTerm: [
                                {field: "Scheme", displayName: "Scheme", index: 0},
                                {field: "year1_return", displayName: "year1_return", index: 1},
                                {field: "year1_rank", displayName: "year1_rank", index: 2},
                                {field: "year3_return", displayName: "year3_return", index: 3},
                                {field: "year5_return", displayName: "year5_return", index: 4},
                                {field: "year5_rank", displayName: "year5_rank", index: 5}
                            ],
                            sipReturn: [
                                {field: "scheme", displayName: "Scheme", index: 0},
                                {field: "quarterlyReturn", displayName: "quarterlyReturn", index: 1},
                                {field: "monthly_return", displayName: "monthly_return", index: 2},
                                {field: "year1_return", displayName: "year1_return", index: 3},
                                {field: "year3_return", displayName: "year3_return", index: 4},
                                {field: "year5_return", displayName: "year5_return", index: 5}
                            ],
                            navDividend: [
                                {field: "scheme", displayName: "Scheme", index: 0},
                                {field: "nav", displayName: "nav", index: 1},
                                {field: "nav_as_on", displayName: "nav_as_on", index: 2},
                                {field: "previous_nav", displayName: "previous_nav", index: 3},
                                {field: "previous_nav_date", displayName: "previous_nav_date", index: 4},
                                {field: "previous_nav_change", displayName: "previous_nav_change", index: 5},
                                {field: "weeks52_high", displayName: "weeks52_high", index: 6},
                                {field: "high_as_on", displayName: "high_as_on", index: 7},
                                {field: "weeks52_low", displayName: "weeks52_low", index: 8},
                                {field: "lowas_on", displayName: "lowas_on", index: 9},
                                {field: "dividend_paid", displayName: "dividend_paid", index: 10}
                            ]
                        };
                        $scope.ngOptions.columnDefs = _activeColumn[_data];
                        var _httpRequest = {method: 'GET', url: '/api/funds/' + _data};
                        $scope.callService(_httpRequest);
                    });
                },
                controller:function($scope){
                    $scope.ngOptions= {
                        data:[]
                    };

                    $scope.showTabForView = function(){
                        return ('true' == $scope.showTab);
                    }

                    $scope.ngOptions.updateGrid = updateGrid;
                    function updateGrid(data){
                        $scope.ngOptions= {};
                        $scope.ngOptions.data =  data;
                        if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
                            $scope.$apply();
                        }
                    };

                    $scope.callService = function(_httpRequest){
                        $http(_httpRequest)
                            .success(function (data, status, headers, config) { updateGrid(data); })
                            .error(function (data, status, headers, config) {});
                    }
                }
            };
        }]);
    });
})();