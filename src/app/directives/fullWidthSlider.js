(function() {
    'use strict';

    angular.module('mTDubai').directive('fullWidthSlider', function($timeout) {
        return {
            restrict: 'EA',
            transclude: true,
            link: function(scope, element, attrs, controller, transcludeFn) {

                element.append(transcludeFn());
                scope.$parent.$watch('vm.bannerLoaded', function(newVal) {

                    if (newVal)
                        $timeout(function() {

                            element.bxSlider({
                                infiniteLoop: false,
                                hideControlOnEnd: true
                            });
                        }, 0);
                });
            }
        }
    });

})();