/**
 * Created by wizdev on 7/4/2015.
 */
(function () {
    "use strict";
    define(['enricher','contacts'], function (app) {
        var contactsController = function ($scope, $rootScope) {
            $scope.initController = function () {alert('hi');}
        };
        contactsController['$inject'] = ['$scope', '$rootScope'];
        app.register.controller('contactsController', contactsController);
    });
})();