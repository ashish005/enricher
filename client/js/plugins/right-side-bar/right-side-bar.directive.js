/**
 * Created by wizdev on 7/12/2015.
 */
(function(define, angular){
    "use strict";
    var rightSideBar = angular.module('enricher.rightSideBar', []);
    rightSideBar.directive('rightSideBar', function() {
        return {
            restrict: 'AE',
            scope:{
                showSideBar:'='
            },
            templateUrl: 'client/js/plugins/right-side-bar/right-side-bar.html',
            link:function(scope, elem){
                var _element =  elem.find('#right-sidebar');
                // Move right sidebar top after scroll
                $(window).scroll(function(){
                    if ($(window).scrollTop() > 0 && !$('body').hasClass('fixed-nav') ) {
                        _element.addClass('sidebar-top');
                    } else {
                        _element.removeClass('sidebar-top');
                    }
                });

                // Open close right sidebar
                $('.right-sidebar-toggle').click(function () {
                    _element.toggleClass('sidebar-open');
                });

                // Initialize slimscroll for right sidebar
                elem.find('.sidebar-container').slimScroll({
                    height: '100%',
                    railOpacity: 0.4,
                    wheelStep: 10
                });
            }
        };
    });
})(window.define, window.angular);