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

        //Third Party Plugins
        ngGrid:'assets/libs/plugins/nggrid/ng-grid-2.0.3.min',
        slimscroll:'assets/libs/plugins/slimscroll/jquery.slimscroll.min',
        //Application Specific
        auth:'js/auth/auth-main',
        navMenu:'js/plugins/nav-menu',

        //Custom Plugins
        contacts:'js/plugins/contacts/contacts.directive',
        iboxTools:'js/plugins/ibox-tools/ibox-tools.directive'
    },
    shim: {
        angularAMD: ['angular'],
        angular: {
            exports: "angular"
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
        auth:{
            deps:['angular', 'ngRoute']
        },
        metisMenu:{
            deps:['jQuery']
        },
        navMenu:{
            deps: ['slimscroll']//'metisMenu',
        },
        ngGrid:{
            deps:['jQuery', 'angular']
        },
        enricher:{
            deps:['jQuery', 'bootstrap', 'angular', 'ngRoute', 'ngGrid']
        }
    },
    deps: ['enricher']
});