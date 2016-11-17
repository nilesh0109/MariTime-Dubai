(function() {
    'use strict'

    describe('controller HomeController', function() {
        var vm;
        beforeEach(module('mTDubai'));

        beforeEach(inject(function($injector) {
            var $controller = $injector.get('$controller');
            IntializeController();

            function IntializeController() {
                vm = $controller("HomeController");
            }

        }));

        it('should be present', function() {
            expect(vm).not.toBe(null);
        });

        it('should have 4 items with the banner images', function() {
            expect(vm.items.length).toBe(5);
            expect(vm.items[0].imgSrc).toBe('assets/images/home/banner1.png');

        });
    });
})();