/**
 * Created by wizdev on 7/11/2015.
 */
(function () {
    "use strict";
    define(['enricher'], function (app) {
        app.directive('fundsInfo', function() {
            return {
                restrict: 'AE',
                scope:{
                    record:'='
                },
                templateUrl: 'client/js/plugins/funds-info/funds-info.html',
                controller:function($scope){
                    $scope.fundInfo = $scope.record;
                }
            };
        });
    });
})();