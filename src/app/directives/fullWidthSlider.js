(function() {
    'use strict';

    angular.module('mTDubai').directive('fullWidthSlider', function() {
        return {
            restrict: 'EA',
            transclude: true,
            link: function(scope, element, attrs, controller, transcludeFn) {

                element.append(transcludeFn());
                scope.$parent.$watch('vm.bannerLoaded', function(newVal) {
                    if (newVal)
                        if (element.find('li').length > 1)
                            element.bxSlider({
                                infiniteLoop: false,
                                hideControlOnEnd: true
                            });
                });
            }
        }
    });

})();