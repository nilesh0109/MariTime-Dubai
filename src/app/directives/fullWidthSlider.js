(function() {
    'use strict';

    angular.module('mTDubai').directive('fullWidthSlider', function($timeout) {
        return {
            restrict: 'EA',
            transclude: true,
            link: function(scope, element, attrs, controller, transcludeFn) {

                element.append(transcludeFn());
                $timeout(function() {
                    element.bxSlider();
                }, 0);
            }
        }
    });

})();