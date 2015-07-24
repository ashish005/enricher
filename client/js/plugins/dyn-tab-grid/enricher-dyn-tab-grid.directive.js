/**
 * Created by wizdev on 7/19/2015.
 */
(function () {
    "use strict";
    define(['enricher', 'uiGrid'], function (app) {
        app.directive('enricherDynTabGrid', function() {
            return {
                restrict: 'AE',
                scope:{
                    record:'='
                },
                templateUrl: 'client/js/plugins/dyn-tab-grid/enricher-dyn-tab-grid.html',
                link:function(scope, element){
                    element.find('.btn-group').on('click', '.btn', function(e){
                        var _data = this.getAttribute("data-key");
                        scope.tabGridRec = scope.serviceResp[_data].content;

                        if (scope.$root.$$phase != '$apply' && scope.$root.$$phase != '$digest') {
                            scope.$apply();
                        }
                    });
                },
                controller:function($scope){
                    var week = [
                        {"ending":"Arbitrage","cat_avg":0.2,"best_fund":1,"worst_fund":0.07},
                        {"ending":"Debt","cat_avg":0.04,"best_fund":0.69,"worst_fund":-3.51},
                        {"ending":"Equity - Sectoral","cat_avg":2.96,"best_fund":6.93,"worst_fund":0.15},
                        {"ending":"Equity - International","cat_avg":1.51,"best_fund":3.65,"worst_fund":-3.82},
                        {"ending":"Alternative Asset Class","cat_avg":1.08,"best_fund":1.93,"worst_fund":0.4},
                        {"ending":"Hybrid","cat_avg":1.06,"best_fund":3.21,"worst_fund":-0.26},
                        {"ending":"Gold","cat_avg":-1.03,"best_fund":-0.09,"worst_fund":-1.87},
                        {"ending":"Equity - Diversified","cat_avg":2.83,"best_fund":4.92,"worst_fund":-0.16}
                    ];
                    var month1 =[
                        {"ending":"Arbitrage","cat_avg":0.55,"best_fund":2.57,"worst_fund":0.32},
                        {"ending":"Debt","cat_avg":0.95,"best_fund":63.76,"worst_fund":-3.02},
                        {"ending":"Equity - Sectoral","cat_avg":7.5,"best_fund":11.92,"worst_fund":-6.23},
                        {"ending":"Equity - International","cat_avg":-2.28,"best_fund":6.42,"worst_fund":-14.22},
                        {"ending":"Alternative Asset Class","cat_avg":0.75,"best_fund":5.2,"worst_fund":-6.67},
                        {"ending":"Hybrid","cat_avg":2.92,"best_fund":8.03,"worst_fund":-0.33},
                        {"ending":"Gold","cat_avg":-2.96,"best_fund":-1.37,"worst_fund":-4.02},
                        {"ending":"Equity - Diversified","cat_avg":6.77,"best_fund":11.57,"worst_fund":0.49}
                    ];
                    var month3 = [
                        {"ending":"Arbitrage","cat_avg":1.78,"best_fund":2.1,"worst_fund":0.72},
                        {"ending":"Debt","cat_avg":1.26,"best_fund":4.37,"worst_fund":-1.97},
                        {"ending":"Equity - Sectoral","cat_avg":1.89,"best_fund":6.31,"worst_fund":-10.95},
                        {"ending":"Equity - International","cat_avg":-2.13,"best_fund":7.18,"worst_fund":-13.2},
                        {"ending":"Alternative Asset Class","cat_avg":-0.46,"best_fund":1.86,"worst_fund":-5.76},
                        {"ending":"Hybrid","cat_avg":0.96,"best_fund":3.8,"worst_fund":-3.55},
                        {"ending":"Gold","cat_avg":-3.36,"best_fund":-2.18,"worst_fund":-5.24},
                        {"ending":"Equity - Diversified","cat_avg":4.43,"best_fund":710.54,"worst_fund":-4.08}
                    ];
                    var month6 =[
                        {"ending":"Arbitrage","cat_avg":3.94,"best_fund":4.65,"worst_fund":2.22},
                        {"ending":"Debt","cat_avg":2.95,"best_fund":6.16,"worst_fund":-8.1},
                        {"ending":"Equity - Sectoral","cat_avg":4.17,"best_fund":25.65,"worst_fund":-5.17},
                        {"ending":"Equity - International","cat_avg":3.99,"best_fund":19.48,"worst_fund":-25.32},
                        {"ending":"Alternative Asset Class","cat_avg":2.23,"best_fund":4.37,"worst_fund":-0.33},
                        {"ending":"Hybrid","cat_avg":2.75,"best_fund":7.93,"worst_fund":-1.91},
                        {"ending":"Gold","cat_avg":-6.83,"best_fund":-5.85,"worst_fund":-8.66},
                        {"ending":"Equity - Diversified","cat_avg":4.48,"best_fund":18.41,"worst_fund":-4.47}
                    ];
                    var year =[
                        {"ending":"Arbitrage","cat_avg":8.08,"best_fund":8.87,"worst_fund":7.16},
                        {"ending":"Debt","cat_avg":9.59,"best_fund":15.14,"worst_fund":-2.5},
                        {"ending":"Equity - Sectoral","cat_avg":21.43,"best_fund":59.94,"worst_fund":-22.86},
                        {"ending":"Equity - International","cat_avg":0.27,"best_fund":25.72,"worst_fund":-38.2},
                        {"ending":"Alternative Asset Class","cat_avg":5.07,"best_fund":21.59,"worst_fund":-23.58},
                        {"ending":"Hybrid","cat_avg":13.92,"best_fund":29.24,"worst_fund":2.31},
                        {"ending":"Gold","cat_avg":-8.9,"best_fund":-6.66,"worst_fund":-10.71},
                        {"ending":"Equity - Diversified","cat_avg":22.02,"best_fund":57.57,"worst_fund":-98.59}
                    ];
                    var year3 = [
                        {"ending":"Arbitrage","cat_avg":8.52,"best_fund":9.17,"worst_fund":7.93},
                        {"ending":"Debt","cat_avg":8.76,"best_fund":13.17,"worst_fund":-6.71},
                        {"ending":"Equity - Sectoral","cat_avg":22.46,"best_fund":46.15,"worst_fund":-2.87},
                        {"ending":"Equity - International","cat_avg":9.54,"best_fund":26.55,"worst_fund":-18.87},
                        {"ending":"Alternative Asset Class","cat_avg":9.7,"best_fund":18.7,"worst_fund":-2.26},
                        {"ending":"Hybrid","cat_avg":13.59,"best_fund":26.08,"worst_fund":2.63},
                        {"ending":"Gold","cat_avg":-5.75,"best_fund":-4.72,"worst_fund":-6.69},
                        {"ending":"Equity - Diversified","cat_avg":23.47,"best_fund":44.29,"worst_fund":-72.28}
                    ];
                    var year5 = [
                        {"ending":"Arbitrage","cat_avg":"8.52","best_fund":"9.05","worst_fund":"8.1"},
                        {"ending":"Debt","cat_avg":"8.41","best_fund":"10.89","worst_fund":"-0.82"},
                        {"ending":"Equity - Sectoral","cat_avg":"10.88","best_fund":"29.04","worst_fund":"-4.12"},
                        {"ending":"Equity - International","cat_avg":"6.79","best_fund":"16.33","worst_fund":"-10.98"},
                        {"ending":"Alternative Asset Class","cat_avg":"7.96","best_fund":"10.63","worst_fund":"0.58"},
                        {"ending":"Hybrid","cat_avg":"9.87","best_fund":"16.94","worst_fund":"1.55"},
                        {"ending":"Gold","cat_avg":"--","best_fund":"--","worst_fund":"--"},
                        {"ending":"Equity - Diversified","cat_avg":"13.15","best_fund":"25.21","worst_fund":"-0.39"}
                    ];

                    var tabs = {
                            week: {title: '1 Week', content: week},
                            month1: {title: '1 Month', content: month1, disabled: true},
                            month3: {title: '3 Month', content: month3, disabled: true},
                            month6: {title: '6 month', content: month6, disabled: true},
                            year: {title: '1 Year', content: year, disabled: true},
                            year3: {title: '3 Year', content: year3, disabled: true},
                            year5: {title: '5 Year', content: year5, disabled: true}
                        };
                    //$scope.ngOptions = {data : tabs.week.content};
                    $scope.serviceResp = tabs;
                    $scope.tabGridRec = tabs.week.content;


                    $scope.getCSSClass = function(value){
                        return value>=0?'label-primary':'label-warning';
                    }
                }
            };
        });
    });
})();