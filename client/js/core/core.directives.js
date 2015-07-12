/**
 * Created by wizdev on 7/12/2015.
 */
(function(define, angular){
    "use strict";
    var core = angular.module('enricher.core', []);
    core.directive('landingScrollspy', function(){
        return {
            restrict: 'AE',
            link: function (scope, element, attrs) {
                element.scrollspy({
                    target: '.navbar-fixed-top',
                    offset: 80
                });
            }
        };
    });
    core.directive('fullScroll', ['$timeout', function($timeout){
        return {
            restrict: 'AE',
            link: function (scope, element, attrs) {
                $timeout(function(){
                    element.slimscroll({
                        height: '100%',
                        railOpacity: 0.9
                    });
                });
            }
        };
    }]);
})(window.define, window.angular);