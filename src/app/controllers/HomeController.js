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