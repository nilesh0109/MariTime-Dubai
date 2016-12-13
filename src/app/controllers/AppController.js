(function() {
    'use strict';

    angular.module('mTDubai')
        .controller('AppController', AppController);

    function AppController($location, $document) {
        var vm = this;
        vm.hamburgerClick = function($event) {
            var hamburger = angular.element($event.target).closest('.top-nav-hamburger');
            hamburger.siblings('.top-nav').toggleClass('slide-down');
        }
        vm.scrollTo = function(id) {
            $location.hash(id);
            angular.element('html,body').animate({
                scrollTop: angular.element('#' + id).offset().top
            });
        }
        $document.on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            if (angular.element(e.target).closest('.top-nav-hamburger,.top-nav').length > 0)
                return false;
            else {
                angular.element('.top-nav-hamburger').next('.top-nav').removeClass('slide-down');
            }
        });
    }

})();