(function() {
    'use strict'

    describe('controller AppController', function() {
        var app;
        beforeEach(module('mTDubai'));

        beforeEach(inject(function($injector) {
            var $controller = $injector.get('$controller');
            IntializeController();

            function IntializeController() {
                app = $controller("AppController");
            }

        }));

        it('should be present', function() {
            expect(app).not.toBe(null);
        });

    });
})();