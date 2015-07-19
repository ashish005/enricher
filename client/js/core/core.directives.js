/**
 * Created by wizdev on 7/12/2015.
 */
(function(define, angular){
    "use strict";
    var core = angular.module('enricher.core', []);
    core.directive('appFooter', function () {
        return {
            restrict: 'AE',
            template: '<div class="footer"><!--<div class="pull-right"> 10GB of <strong>250GB</strong> Free. </div>--> <div> <strong>Copyright</strong> Example Company &copy; 2014-2015 </div></div>'
        };
    });
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

    $(document).ready(function () {
        // Full height of sidebar
        function fix_height() {
            var heightWithoutNavbar = $("body > #wrapper").height() - 61;
            $(".sidebard-panel").css("min-height", heightWithoutNavbar + "px");

            var navbarHeigh = $('nav.navbar-default').height();
            var wrapperHeigh = $('#page-wrapper').height();

            if(navbarHeigh > wrapperHeigh){
                $('#page-wrapper').css("min-height", navbarHeigh + "px");
            }

            if(navbarHeigh < wrapperHeigh){
                $('#page-wrapper').css("min-height", $(window).height()  + "px");
            }

            if ($('body').hasClass('fixed-nav')) {
                $('#page-wrapper').css("min-height", $(window).height() - 60 + "px");
            }
        }

        $(window).bind("load resize scroll", function() {
            if(!$("body").hasClass('body-small')) {
                fix_height();
            }
        });

        setTimeout(function(){
            fix_height();
        })
    });

// Minimalize menu when screen is less than 768px
    $(function() {
        $(window).bind("load resize", function() {
            if ($(this).width() < 769) {
                $('body').addClass('body-small')
            } else {
                $('body').removeClass('body-small')
            }
        })
    })
})(window.define, window.angular);