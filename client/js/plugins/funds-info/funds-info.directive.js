/**
 * Created by wizdev on 7/11/2015.
 */
(function () {
    "use strict";
    define(['enricher'], function (app) {
        var fundsInfo = angular.module('fundsInfo', []);
        fundsInfo.directive('fundsInfo', ['fundInfoConstant', function(fundInfoConstant) {
            return {
                restrict: 'AE',
                templateUrl: 'client/js/plugins/funds-info/funds-info.html',
                /*template: '<div class="row wrapper border-bottom white-bg page-heading">\
                 <ol class="horizontal-ol">\
                 <li ng-repeat="fund in fundInfo"><a href="{{fund.key}}"><i class="fa fa-th-large"></i>\
                 <span class="nav-label">{{fund.value}}</span></a></li></ol></div>',*/
                controller:function($scope){
                    $scope.fundInfo = fundInfoConstant;
                }
            };
        }]);
    });
})();