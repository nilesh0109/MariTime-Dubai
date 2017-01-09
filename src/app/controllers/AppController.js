(function() {
    'use strict';

    angular.module('mTDubai')
        .controller('AppController', ['$location', '$document', '$http', AppController]);

    function AppController($location, $document, $http) {
        var vm = this;

        vm.LoadFooter = LoadFooter;

        function LoadFooter() {

            $http({
                method: 'GET',
                url: 'http://demoserver.tacme.net:3030/DMCATacsoftH3/Services/GenericContentRestService.svc/GetGenericContentByUniqueName?WebsiteID=3&LanguageID=1&UniqueName=footer.copy.rights'
            }).then(function successCallback(response) {

                vm.FooterRights = response.data.payload[0];

            }, function errorCallback(response) {
                //console.log(response);
                //  alert(response);
            });
        }


        vm.hamburgerClick = function($event) {
            var hamburger = angular.element($event.target).closest('.top-nav-hamburger');
            hamburger.siblings('.top-nav').toggleClass('slide-down');
        }
        vm.scrollTo = function(id) {
            // $location.hash(id);
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
        scrollTop();
    }

    function scrollTop() {
        // browser window scroll (in pixels) after which the "back to top" link is shown
        var offset = 5,
            //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
            offset_opacity = 1200,
            //duration of the top scrolling animation (in ms)
            scroll_top_duration = 700,
            //grab the "back to top" link


            $back_to_top = angular.element('<a href="#0" class="move-to-top fa fa-angle-up"></a>').appendTo('body');

        //hide or show the "back to top" link
        angular.element(window).scroll(function() {
            (angular.element(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible'): $back_to_top.removeClass('cd-is-visible cd-fade-out');
            if (angular.element(this).scrollTop() > offset_opacity) {
                $back_to_top.addClass('cd-fade-out');
            }
        });

        //smooth scroll to top
        $back_to_top.on('click', function(event) {
            event.preventDefault();
            angular.element('body,html').animate({
                scrollTop: 0
            }, scroll_top_duration);
        });
    }
})();


/*(function() {
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
 */