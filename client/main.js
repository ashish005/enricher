/**
 * Created by wizdev on 6/24/2015.
 */
(function (window) {
    "use strict";
    //window.name = "NG_DEFER_BOOTSTRAP!";
    define(['angularAMD'], function (angularAMD) {//'navMenu'
        var angular = require("angular");
        var _appName = "enricher";

        var app =  angular.module(_appName, ['ngRoute', 'ngGrid']);

        app.config(['$routeProvider', function ($routeProvider)
            {
                $routeProvider
                .when('/login',
                    angularAMD.route({
                        templateUrl: 'client/js/auth/templates/login.html',
                        controllerUrl: 'js/auth/controllers/auth.controller'
                    }))
                .when('/register',
                    angularAMD.route({
                        templateUrl: 'client/js/auth/templates/register.html',
                        controllerUrl: 'js/auth/controllers/auth.controller'
                    }))
                .when('/forgot_password', { templateUrl: 'client/js/auth/templates/forgot_password.html' })
                .when('/home', { templateUrl: 'client/js/components/home/templates/home.html' })
                .when('/contacts', angularAMD.route({
                    templateUrl: 'client/js/components/contacts/templates/contacts.html',
                    controllerUrl: 'js/components/contacts/controllers/contacts.controller'
                }))
                .when('/admin/user-info', angularAMD.route({
                    templateUrl: 'client/js/admin/users-info/templates/users-info.html',
                    controllerUrl: 'js/admin/users-info/controllers/users-info.controller'
                }))
                .otherwise({ redirectTo: '/login' }) //Handle all exceptions
            }
        ]);

        app.directive('pageView',['$rootScope','$http', '$compile', function($rootScope, $http, $compile){
            return {
                restrict: 'AE',
                replace: 'true',
                transclude:true,
                compile: function(element, attrs) {
                    return function(scope, element, attrs) {
                        function setActiveView(name){
                            var _activeMaster = template_for(name);
                            $http.get(_activeMaster.templateUrl).then(function(result){
                                element.html(result.data);
                                $compile(element.contents())($rootScope);
                            });
                        }
                        setActiveView(window.location.hash.replace('#',''));
                        scope.$on('changeMasterView', function(e, args){
                            setActiveView(args.name)
                        });
                    };
                }
            };
        }]);

        app.run(['$rootScope', '$compile','$document', function ($rootScope, $compile, $document) {
            require(['iboxTools']);

            $rootScope.$on("$routeChangeStart", function (event, nextRoute, currentRoute) {
                $rootScope.$emit('changeMasterView', { name: nextRoute.originalPath });
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

            $('body').on('click', 'a.collapse-link', function() {
                debugger;
                var ibox = $(this).closest('div.ibox');
                var button = $(this).find('i');
                var content = ibox.find('div.ibox-content');
                content.slideToggle(200);
                button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
                ibox.toggleClass('').toggleClass('border-bottom');
                setTimeout(function () {
                    ibox.resize();
                    ibox.find('[id^=map-]').resize();
                }, 50);
            });

            // Close ibox function
            $('body').on('click', 'a.close-link', function() {
                $(this).closest('div.ibox').remove();
            });
        }]);

        function  template_for(activeRoute){
            var _masterView = {
                auth:{ id:1, templateUrl:'auth-templates.html', viewKeys:['/login', '/register', '/forgot_password'], requiredModules:'' },
                admin:{id:2, templateUrl:'admin-templates.html', viewKeys:['/admin', '/admin/user-info'], requiredModules:'navMenu'},
                user:{id:3 , templateUrl:'user-templates.html', viewKeys:['/home','/contacts'], requiredModules:'navMenu'}
            };
            var _activeMasterView = _masterView.auth;
            angular.forEach(_masterView, function (value, key) {
                var _activeViewInfo = value.viewKeys.indexOf(activeRoute);
                if(_activeViewInfo>-1) {
                    _activeMasterView = _masterView[key];
                }
            });

            var _basePath = 'client/js/core/templates/';
            _activeMasterView.templateUrl =_basePath + _activeMasterView.templateUrl;
/*
            if(window._activeMasterView && (window._activeMasterView != _activeMasterView.id)){
                window._activeMasterView = _activeMasterView.id;
                window.location.reload();
            }*/
            return _activeMasterView;
        }

        function requireDependency(){
            require(['navMenu'], function () {
                app.requires.push('navMenu');
                return angularAMD.bootstrap(app);
            });
        };

        angular.element(document).ready(function () {
            requireDependency();
        });
        return app;
    });
})(window);
