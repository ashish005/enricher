/**
 * Created by wizdev on 7/18/2015.
 */
(function (window) {
    "use strict";
    //window.name = "NG_DEFER_BOOTSTRAP!";
    define(['angularAMD'], function (angularAMD) {
        var angular = require("angular");
        var _appName = "enricher";
        var app = angular.module(_appName, ['ui.bootstrap', 'ngRoute', 'enricher.auth', 'enricher.core', 'ui.grid']);

        var _pluginOptions ={
            default: {
                home: {
                    templateUrl: 'client/js/default/home/templates/home.html',
                    controllerUrl: 'js/default/home/controllers/home.controller'
                },
                dynamicFilterGrid: {
                    templateUrl: 'client/js/default/dynamic-filter-grid/templates/dynamic-filter-grid.html',
                    controllerUrl: 'js/default/dynamic-filter-grid/controllers/dynamic-filter-grid.controller'
                },
                defaultFilterGrid: {
                    templateUrl: 'client/js/default/default-filter-grid/templates/default-filter-grid.html',
                    controllerUrl: 'js/default/default-filter-grid/controllers/default-filter-grid.controller'
                }
            },
            admin:{
                home: {
                    templateUrl: 'client/js/admin/dashboard/templates/dashboard.html',
                    controllerUrl: 'js/admin/dashboard/controllers/dashboard.controller'
                },
            }
        }

        app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            //$locationProvider.html5Mode(true);
            $routeProvider
                .when('/home', angularAMD.route(_pluginOptions.default.home))
                .when('/nfos', angularAMD.route(_pluginOptions.default.defaultFilterGrid))
                .when('/dividends', angularAMD.route(_pluginOptions.default.defaultFilterGrid))
                .when('/indices', angularAMD.route(_pluginOptions.default.defaultFilterGrid))
                .when('/schemeSummary', angularAMD.route(_pluginOptions.default.dynamicFilterGrid))
                .when('/schemeSummary/:name', angularAMD.route(_pluginOptions.default.dynamicFilterGrid))


                .when('/admin/home', angularAMD.route(_pluginOptions.admin.home))
                .otherwise({redirectTo: '/home'});//Handle all exceptions
        }]);

        app.run(['$rootScope', function ($rootScope) {
            $rootScope.$on("$routeChangeStart", function (event, nextRoute, currentRoute) {
                console.log('$routeChangeStart');
            });

            $rootScope.$on('$routeChangeSuccess', function (event, nextRoute, currentRoute) {
                console.log('$routeChangeSuccess');
            });

            $rootScope.$on('$routeChangeError', function (event, current, previous, rejection) {
                console.log('$routeChangeError');
            });

            $rootScope.$on('$viewContentLoaded', function () {
                console.log('$viewContentLoaded');
            });
        }]);

        app.controller('appViewController', ['$rootScope', '$scope', function ($rootScope, $scope) {
            $scope.initEnricher = function() {
                var _req = {method: 'GET', url: 'api/init'};
                var initInjector = angular.injector(["ng"]);
                var $http = initInjector.get("$http");
                $http(_req).then(function (resp)
                {
                    var _appInfo = resp.data;
                    var _menu = [
                        {
                            childItems: null,
                            iconClass: "fa-th-large",
                            key: "home",
                            routeTo:'#/',
                            template: "<span class='label label-warning pull-right'>16/24</span>",
                            text: "Home"
                        },
                        {
                            childItems: [
                                {key: "tg", text: "Top Gainers", routeTo:'#/schemeSummary/gainer'},
                                {key: "tl", text: "Top Loosers", routeTo:'#/schemeSummary/looser',}
                            ],
                            iconClass: "fa-th-large",
                            key: "fp",
                            template: "<span class='label label-warning pull-right'>16/24</span>",
                            text: "Fund Performers"
                        },
                        {
                            childItems: null,
                            iconClass: "fa-diamond",
                            key: "nfo",
                            routeTo:'#/nfos',
                            template: "<span class='label label-warning pull-right'>16/24</span>",
                            text: "NFOs"
                        },
                        {
                            childItems: null,
                            iconClass: "fa-bar-chart-o",
                            key: "dvdnts",
                            routeTo:'#/dividends',
                            template: "<span class='label label-warning pull-right'>16/24</span>",
                            text: "Dividends"
                        },
                        {
                            childItems: null,
                            iconClass: "fa-bar-chart-o",
                            key: "indecs",
                            routeTo:'#/indices',
                            template: "<span class='label label-warning pull-right'>16/24</span>",
                            text: "Indices"
                        },
                        {
                            childItems: [
                                {key: "fs", text: "Fund Search"},
                                {key: "mft", text: "MF Tools"}
                            ],
                            iconClass: "fa-bar-chart-o",
                            key: "tools",
                            template: "<span class='label label-warning pull-right'>16/24</span>",
                            text: "Tools"
                        }
                    ];
                    $rootScope.menuData = _menu;// _appInfo.menu;
                    $rootScope.fundInfo = _appInfo.fundInfo;
                }, function (error) {
                    throw new Error('Config file has error : ' + error);
                });
            };
        }]);

        app.directive('pageView', ['$rootScope', '$compile', '$http', '$q',  function ($rootScope, $compile, $http, $q) {
            return {
                restrict: 'AE',
                replace: true,
                compile: function(element, attrs) {
                    return function(scope, element, attrs) {
                        var _basePath = 'client/js/core/templates/';
                        var _masterView = {
                            auth:{ id:1, templateUrl:'auth-templates.html', viewKeys:['login', 'register', 'forgot_password'], requiredModules:[] },
                            admin:{id:2, templateUrl:'admin-templates.html', viewKeys:['admin', 'admin/user-info'], requiredModules:['navMenu'] },
                            user:{id:3 , templateUrl:'user-templates.html', viewKeys:['home','contacts'], requiredModules:['navMenu', 'chatWindow', 'rightSideBar', 'fundsInfo']},
                            default:{id:3 , templateUrl:'default-templates.html', viewKeys:['home','contacts'], requiredModules:['navMenu', 'fundsInfo', 'iboxTools', 'watchlist']}
                        };
                        var _activeMasterView = _masterView.default;

                        var hash = window.location.hash.split('/')[1];
                        if(hash) {
                            var _isAuthIndex = _masterView.auth.viewKeys.indexOf(hash);

                            if (_isAuthIndex == -1) {
                                _activeMasterView = _masterView.default;
                            }
                        }

                        _activeMasterView.templateUrl =_basePath + _activeMasterView.templateUrl;
                        require(_activeMasterView.requiredModules, function(){
                            console.log(_activeMasterView.templateUrl);
                            $http.get(_activeMasterView.templateUrl).then(function(result){
                                    element.html(result.data);
                                    $compile(element.contents())($rootScope);

                                }, function(error){}
                            );
                        });
                    };
                }
            };
        }]);

        app.config(function( $controllerProvider, $provide, $compileProvider ) {
                // Let's keep the older references.
                app._controller = app.controller;
                app._service = app.service;
                app._factory = app.factory;
                app._value = app.value;
                app._directive = app.directive;

                // Provider-based controller.
                app.controller = function( name, constructor ) {
                    $controllerProvider.register( name, constructor );
                    return(this);
                };

                // Provider-based service.
                app.service = function( name, constructor ) {
                    $provide.service( name, constructor );
                    return(this);
                };

                // Provider-based factory.
                app.factory = function( name, factory ) {
                    $provide.factory( name, factory );
                    return(this);
                };

                // Provider-based value.
                app.value = function( name, value ) {
                    $provide.value( name, value );
                    return(this);
                };

                // Provider-based directive.
                app.directive = function( name, factory ) {
                    $compileProvider.directive( name, factory );
                    return(this);
                };
            });

        angular.element(document).ready(function () {
            $('<div ng-controller="appViewController" ng-init="initEnricher()"><div id="wrapper" page-view></div></div>').appendTo('body');
            return angular.bootstrap($('body'), [_appName]);
        });
        return app;
    });
})(window);