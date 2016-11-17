(function() {
    'use strict';

    describe('directive fullWidthSlider', function() {
        var compile, scope, directiveElem, timeout;

        beforeEach(module('mTDubai'));

        beforeEach(function() {
            inject(function($compile, $rootScope, $timeout) {
                timeout = $timeout;
                compile = $compile;
                scope = $rootScope.$new();
                scope.items = [{
                    'imgSrc': 'assets/images/home/banner1.png'
                }, {
                    'imgSrc': 'assets/images/home/banner1.png'
                }, {
                    'imgSrc': 'assets/images/home/banner1.png'
                }, {
                    'imgSrc': 'assets/images/home/banner1.png'
                }, {
                    'imgSrc': 'assets/images/home/banner1.png'
                }];

            });
            directiveElem = getCompiledElement();
            timeout.flush();
        });

        function getCompiledElement() {
            var compiledDirective = compile(angular.element('<ul class="bxslider" id="top-slider" full-width-slider><li ng-repeat="item in items"><img class="img-responsive" ng-src="{{item.imgSrc}}" /></li></ul>'))(scope);
            scope.$digest();
            return compiledDirective;
        }
        it('should  have a scope with the banner elements', function() {
            expect(directiveElem.scope().items.length).toBe(5);
        });
        it('should add a bxslider ', function() {
            expect(directiveElem.find('li').length).toBe(5);
            expect(directiveElem.parent('.bx-viewport').length).toBe(1);
            expect(directiveElem.parent().parent('.bx-wrapper').length).toBe(1);
        });
    });
})();