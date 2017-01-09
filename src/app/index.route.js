(function() {
    'use strict';

    angular.module('mTDubai')
        .config(routeConfig);

    function routeConfig($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/views/home.html',
                controller: 'HomeController',
                controllerAs: 'vm'
            })
            .when('/new', {
                templateUrl: 'app/main/addnew.html',
                controller: 'AddNewController',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/'
            });
        //  $locationProvider.html5Mode(true);
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: true
        });
    }
    angular.module('mTDubai')
        .run(function($rootScope, $location, $anchorScroll, $routeParams) {
            var $rs = $rootScope;
            $rs.$on('$routeChangeSuccess', function() {
                //    $location.hash($routeParams.scrollTo);
                //    $anchorScroll();
            });
        })

})();