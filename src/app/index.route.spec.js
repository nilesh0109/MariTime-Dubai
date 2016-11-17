(function() {
    'use strict';
    describe('index route ', function() {
        beforeEach(module('mTDubai'));
        it('should map routes to controllers', function() {

            inject(function($injector) {
                var $route = $injector.get('$route');
                expect($route.routes['/'].controller).toBe('HomeController');
                expect($route.routes['/'].templateUrl).toEqual('app/views/home.html');

                expect($route.routes['/new'].controller).toEqual('AddNewController');
                expect($route.routes['/new'].templateUrl).toEqual('app/main/addnew.html');

                expect($route.routes[null].redirectTo).toEqual('/');
            });
        });

    });
})();