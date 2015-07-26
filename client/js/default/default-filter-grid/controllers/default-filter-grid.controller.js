/**
 * Created by wizdev on 7/26/2015.
 */
(function(define, angular){
    define(['enricher', 'fundFilterGrid'], function (app) {//'fundFilters',
        app.controller('defaultFilterGridController', ['$scope', '$rootScope', '$http','$routeParams',
            function ($scope, $rootScope, $http, $routeParams)
            {
                var _routeParam =  $routeParams.name;
            }
        ]);
    });
})(window.define, window.angular);