/**
 * Created by wizdev on 6/28/2015.
 */

var _basePath = {
    plugins:'js/plugins/'
};

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
        uiGrid:'assets/libs/plugins/ui-grid/ui-grid.min',
        metisMenu:'assets/libs/plugins/metisMenu/jquery.metisMenu',
        slimscroll:'assets/libs/plugins/slimscroll/jquery.slimscroll.min',
        chosenJquery:'assets/libs/plugins/chosen/chosen.jquery',
        //chosenJquery:'//cdnjs.cloudflare.com/ajax/libs/chosen/1.0/chosen.jquery.min',

        'enricher-core':'js/core/core.directives',

        //Application Specific
        auth:'js/auth/auth-main',

        //Plugins
        navMenu:_basePath.plugins + 'nav-menu',
        fundsInfo:_basePath.plugins + 'funds-info/funds-info.directive',
        rightSideBar:_basePath.plugins + 'right-side-bar/right-side-bar.directive',
        dynTabGrid:_basePath.plugins + 'dyn-tab-grid/enricher-dyn-tab-grid.directive',
        contacts:_basePath.plugins + 'contacts/contacts.directive',
        iboxTools:_basePath.plugins + 'ibox-tools/ibox-tools.directive',
        chatWindow:_basePath.plugins + 'chat-window/chat-window',
        fundFilters:_basePath.plugins + 'fund-filters/fund-filters.directive',
        fundFilterGrid:_basePath.plugins + 'filter-grid/filter-grid.directive',
        watchlist:_basePath.plugins + 'watchlist/watchlist.directive'
    },
    shim: {
        angularAMD: ['angular'],
        angular: {
            exports: "angular"
        },
        'enricher-core': {
            deps: ["angular", 'ngRoute']
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
        uiGrid:{
            deps:['jQuery', 'angular']
        },
        enricher:{
            deps:['jQuery', 'bootstrap','ui-bootstrap', 'slimscroll', 'uiGrid', 'enricher-core', 'auth']
        }
    },
    deps: ['enricher']
});