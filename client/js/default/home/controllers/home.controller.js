/**
 * Created by wizdev on 7/10/2015.
 */
(function(define, angular){
    define(['enricher', 'dynTabGrid'], function (app) {
        app.controller('homeController', ['$scope', '$rootScope', '$http',
            function ($scope, $rootScope, $http)
            {
                $scope.init = function()
                {
                    $scope.performersExtraOptions =
                    {
                        alt_asset_class: {title: 'Alternative Asset Class', content: []},
                        arbitage: {title: 'Arbitrage', content: [], disabled: true},
                        debt: {title: 'Debt', content: [], disabled: true},
                        eq_div: {title: 'Equity - Diversified', content: [], disabled: true},
                        eq_int: {title: 'Equity - International', content: [], disabled: true},
                        eq_sec: {title: 'Equity - Sectoral', content: [], disabled: true},
                        gold: {title: 'Gold', content: [], disabled: true},
                        hybrid: {title: 'Hybrid', content: [], disabled: true}
                    };

                    $scope.performersInfo = [
                        {"scheme":"Birla Sun Life Global Commodities Fund - Regular Plan - Growth","Year1Return":-26.06,"latest_nav":10.9870,"date":"30/07/15"},
                        {"scheme":"DWS Global Agribusiness Offshore Fund - Growth","Year1Return":-3.68,"latest_nav":15.7100,"date":"30/07/15"},
                        {"scheme":"UTI Wealth Builder Fund - Series II - Growth","Year1Return":4.44,"latest_nav":28.0821,"date":"30/07/15"},
                        {"scheme":"IDFC Asset Allocation FoF - Conservative - Growth","Year1Return":12.82,"latest_nav":16.3358,"date":"30/07/15"},
                        {"scheme":"IDFC Asset Allocation FoF - Moderate - Growth","Year1Return":14.03,"latest_nav":17.4346,"date":"30/07/15"}
                    ];
                }
                $scope.getCSSClass = function(value){
                    return value>=0?'label-primary':'label-warning';
                }
            }
        ]);
    });
})(window.define, window.angular);