/**
 * Created by wizdev on 6/28/2015.
 */
require.config({
    //packages: ["enricher"],
    paths: {
        enricher:'main',
        angular: "assets/libs/angular/angular",
        angularAMD: 'assets/libs/angular/angularAMD.min',
        ngRoute: 'assets/libs/angular/angular-route',
        jQuery: 'assets/libs/jquery/jquery-2.1.1.min',
        bootstrap:'assets/libs/bootstrap/bootstrap.min',
        'ui-bootstrap':'assets/libs/bootstrap/ui-bootstrap-tpls-0.12.0.min',
        //Third Party Plugins
        ngGrid:'assets/libs/plugins/nggrid/ng-grid-2.0.3.min',
        slimscroll:'assets/libs/plugins/slimscroll/jquery.slimscroll.min',

        'enricher-core':'js/core/core.directives',

        //Application Specific
        auth:'js/auth/auth-main',
        navMenu:'js/plugins/nav-menu',
        fundsInfo:'js/plugins/funds-info/funds-info.directive',
        rightSideBar:'js/plugins/right-side-bar/right-side-bar.directive',

        //Custom Plugins
        appViewSetup:'js/plugins/app-view-setup',
        contacts:'js/plugins/contacts/contacts.directive',
        iboxTools:'js/plugins/ibox-tools/ibox-tools.directive',
        chatWindow:'js/plugins/chat-window//chat-window'
    },
    shim: {
        angularAMD: ['angular'],
        angular: {
            exports: "angular"
        },
        'enricher-core': {
            deps: ["angular"]
        },
        chatWindow: {
            deps: ["angular"]
        },
        ngRoute: {
            deps: ["angular"]
        },
        bootstrap:{
            deps:['jQuery']
        },
        slimscroll:{
            deps:['jQuery']
        },
        appViewSetup:{
            deps:['jQuery']
        },
        auth:{
            deps:['angular', 'ngRoute']
        },
        metisMenu:{
            deps:['jQuery']
        },
        navMenu:{
            deps: ['slimscroll']//'metisMenu',
        },
        'ui-bootstrap':{
            deps: ['jQuery', 'angular']
        },
        rightSideBar:{
            deps: ['angular', 'ui-bootstrap']
        },
        ngGrid:{
            deps:['jQuery', 'angular']
        },
        enricher:{
            deps:['jQuery', 'bootstrap','ui-bootstrap', 'angular', 'ngRoute', 'ngGrid', 'chatWindow', 'enricher-core', 'rightSideBar']
        }
    },
    deps: ['enricher', 'appViewSetup']
});