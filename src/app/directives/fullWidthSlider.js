(function() {
    'use strict';

    angular.module('mTDubai').directive('fullWidthSlider', function($timeout) {
        return {
            restrict: 'EA',
            transclude: true,
            link: function(scope, element, attrs, controller, transcludeFn) {

                element.append(transcludeFn());
                $timeout(function() {
                    if (element.find('li').length > 1)
                        element.bxSlider({
                            infiniteLoop: false,
                            hideControlOnEnd: true
                        });
                }, 0);
            }
        }
    });

})();