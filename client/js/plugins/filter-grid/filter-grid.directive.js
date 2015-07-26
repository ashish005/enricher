/**
 * Created by wizdev on 7/26/2015.
 */
(function () {
    "use strict";
    define(['enricher', 'fundFilters'], function (app) {
        app.directive('fundFilterGrid', function() {
            return {
                restrict: 'AE',
                templateUrl: 'client/js/plugins/filter-grid/filter-grid.html',
                link:function($scope, element, attr){

                },
                controller:function($scope){
                    $scope.ngOptions = {
                        data: [
                            {
                                "firstName": "Cox",
                                "lastName": "Carney",
                                "company": "Enormo",
                                "employed": true
                            },
                            {
                                "firstName": "Lorraine",
                                "lastName": "Wise",
                                "company": "Comveyer",
                                "employed": false
                            },
                            {
                                "firstName": "Nancy",
                                "lastName": "Waters",
                                "company": "Fuelton",
                                "employed": false
                            }
                        ]
                    };
                }
            };
        });
    });
})();