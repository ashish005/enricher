/**
 * Created by wizdev on 7/12/2015.
 */
(function(define, angular){
    define(['enricher', 'fundFilterGrid'], function (app) {//'fundFilters',
        app.controller('dynFilterGridController', ['$scope', '$rootScope', '$http',
            function ($scope, $rootScope, $http)
            {
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
        ]);
    });
})(window.define, window.angular);