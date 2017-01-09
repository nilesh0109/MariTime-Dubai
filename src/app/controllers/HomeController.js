(function() {
    'use strict';

    angular.module('mTDubai')
        .controller('HomeController', ['$http', '$sce', '$q', HomeController]);

    function HomeController($http, $sce, $q) {
        var vm = this;

        // Methods definations

        vm.LoadBanners = LoadBanners;
        vm.LoadChairMain = LoadChairMain;
        vm.LoadPotential = LoadPotential;
        vm.Inovation = Inovation;
        vm.Excellence = Excellence;
        vm.Triumps = Triumps;
        vm.Driving = Driving;
        vm.Horizone = Horizone;
        vm.SailWithUS = SailWithUS;
        vm.ContactUs = ContactUs;
        // Helper Method
        vm.SafeHtml = SafeHtml;


        function ContactUs() {
            $http({
                method: 'GET',
                url: 'http://demoserver.tacme.net:3030/DMCATacsoftH3/Services/FeedbackRestService.svc/SendFeedbackToClient?clientToNotify=5&Name=' + vm.ContactUsForm.name + '&Email=' + vm.ContactUsForm.email + '&Phone=' + vm.ContactUsForm.phone + '&FeedType=Comment&subject=contact%20DMCO&description=' + vm.ContactUsForm.comment + '&WebsiteID=3&LanguageID=1'
            }).then(function successCallback(response) {

                vm.ContactUsForm.name.$setViewValue("");
                vm.ContactUsForm.email.$setViewValue("");
                vm.ContactUsForm.phone.$setViewValue("");
                vm.ContactUsForm.comment.$setViewValue("");
                var contactForm = angular.element(document.querySelectorAll('[name="vm.ContactUsForm"]')[0]);
                contactForm.find('[name="name"]').controller('ngModel').$render();
                contactForm.find('[name="email"]').controller('ngModel').$render();
                contactForm.find('[name="phone"]').controller('ngModel').$render();
                contactForm.find('[name="comment"]').controller('ngModel').$render();
                vm.ContactUsForm.$setPristine();
                alert("Your comment is submitted successfully.");
            }, function errorCallback(response) {
                // console.log(response);
                // alert(response);
            });
        }

        function SailWithUS() {
            $http({
                method: 'GET',
                url: 'http://demoserver.tacme.net:3030/DMCATacsoftH3/Services/GenericContentRestService.svc/GetGenericContentByUniqueName?WebsiteID=3&LanguageID=1&UniqueName=sail.with.us'
            }).then(function successCallback(response) {

                vm.SailWithUSData = response.data.payload[0];


            }, function errorCallback(response) {

                // alert(response);
            });
        }

        function Horizone() {
            $http({
                method: 'GET',
                url: 'http://demoserver.tacme.net:3030/DMCATacsoftH3/Services/GenericContentRestService.svc/GetGenericContentByUniqueName?WebsiteID=3&LanguageID=1&UniqueName=beyond.the.horizon'
            }).then(function successCallback(response) {

                vm.HorizoneData = response.data.payload[0];


            }, function errorCallback(response) {

                //  alert(response);
            });
        }

        function Driving() {
            $http({
                method: 'GET',
                url: 'http://demoserver.tacme.net:3030/DMCATacsoftH3/Services/GenericContentRestService.svc/GetGenericContentByUniqueName?WebsiteID=3&LanguageID=1&UniqueName=a.powerful.driving.force'
            }).then(function successCallback(response) {

                vm.DrivingData = response.data.payload[0];


            }, function errorCallback(response) {

                // alert(response);
            });
        }

        function Triumps() {
            $http({
                method: 'GET',
                url: 'http://demoserver.tacme.net:3030/DMCATacsoftH3/Services/GenericContentRestService.svc/GetGenericContentByUniqueName?WebsiteID=3&LanguageID=1&UniqueName=a.number.of.significant.triumphs'
            }).then(function successCallback(response) {

                vm.TriumpsData = response.data.payload[0];


            }, function errorCallback(response) {

                // alert(response);
            });
        }

        function Excellence() {
            $http({
                method: 'GET',
                url: 'http://demoserver.tacme.net:3030/DMCATacsoftH3/Services/GenericContentRestService.svc/GetGenericContentByUniqueName?WebsiteID=3&LanguageID=1&UniqueName=a.platform.of.excellence'
            }).then(function successCallback(response) {

                vm.ExcellenceData = response.data.payload[0];


            }, function errorCallback(response) {
                //console.log(response);
                //   alert(response);
            });
        }

        function Inovation() {
            $http({
                method: 'GET',
                url: 'http://demoserver.tacme.net:3030/DMCATacsoftH3/Services/GenericContentRestService.svc/GetGenericContentByUniqueName?WebsiteID=3&LanguageID=1&UniqueName=the.strength.of.innovation'
            }).then(function successCallback(response) {

                vm.InnovationData = response.data.payload[0];


            }, function errorCallback(response) {
                //console.log(response);
                // alert(response);
            });
        }

        function SafeHtml(nHtml) {
            return $sce.trustAsHtml(nHtml);
        }

        // Methods
        function LoadBanners() {

            vm.bannerLoaded = false;
            var prm1 = $http({
                method: 'GET',
                url: 'http://demoserver.tacme.net:3030/DMCATacsoftH3/Services/BannerRestService.svc/GetBannersByZone?WebsiteID=3&LanguageID=1&ZoneUniqueName=home.header.banner'
            }).then(function successCallback(response) {
                vm.items = response.data.payload;
                vm.Loaded = true;

            }, function errorCallback(response) {
                alert(response);
            });

            var prm2 = $http({
                method: 'GET',
                url: 'http://demoserver.tacme.net:3030/DMCATacsoftH3/Services/GenericContentRestService.svc/GetGenericContentByUniqueName?WebsiteID=3&LanguageID=1&UniqueName=dubai'
            }).then(function successCallback(bannerTextResponse) {

                vm.BannerData = bannerTextResponse.data.payload[0];


            }, function errorCallback(bannerTextResponse) {
                //console.log(response);
                //   alert(bannerTextResponse);
            });
            $q.all([prm1, prm2]).then(function() {
                vm.bannerLoaded = true;

            });
        }

        function LoadChairMain() {
            $http({
                method: 'GET',
                url: 'http://demoserver.tacme.net:3030/DMCATacsoftH3/Services/GenericContentRestService.svc/GetGenericContentByUniqueName?WebsiteID=3&LanguageID=1&UniqueName=word.from.the.chairman'
            }).then(function successCallback(response) {

                vm.ChairMainData = response.data.payload[0];


            }, function errorCallback(response) {
                //console.log(response);
                // alert(response);
            });
        }

        function LoadPotential() {
            $http({
                method: 'GET',
                url: 'http://demoserver.tacme.net:3030/DMCATacsoftH3/Services/GenericContentRestService.svc/GetGenericContentByUniqueName?WebsiteID=3&LanguageID=1&UniqueName=redefining.potential'
            }).then(function successCallback(response) {

                vm.PotentialData = response.data.payload[0];


            }, function errorCallback(response) {
                //console.log(response);
                // alert(response);
            });
        }
    }

})();



/*
(function() {
    'use strict';

    angular.module('mTDubai')
        .controller('HomeController', HomeController);

    function HomeController() {
        var vm = this;
        vm.items = [{
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
    }

})();

*/