!function(){"use strict";angular.module("mTDubai",["ngRoute","ngMessages"])}(),function(){"use strict";angular.module("mTDubai").directive("fullWidthSlider",function(){return{restrict:"EA",transclude:!0,link:function(e,a,t,n,i){a.append(i()),e.$parent.$watch("vm.bannerLoaded",function(e){e&&a.find("li").length>1&&a.bxSlider({infiniteLoop:!1,hideControlOnEnd:!0})})}}})}(),function(){"use strict";function e(e,a,t){function n(){e({method:"GET",url:"http://demoserver.tacme.net:3030/DMCATacsoftH3/Services/FeedbackRestService.svc/SendFeedbackToClient?clientToNotify=5&Name="+v.ContactUsForm.name+"&Email="+v.ContactUsForm.email+"&Phone="+v.ContactUsForm.phone+"&FeedType=Comment&subject=contact%20DMCO&description="+v.ContactUsForm.comment+"&WebsiteID=3&LanguageID=1"}).then(function(e){v.ContactUsForm.name.$setViewValue(""),v.ContactUsForm.email.$setViewValue(""),v.ContactUsForm.phone.$setViewValue(""),v.ContactUsForm.comment.$setViewValue("");var a=angular.element(document.querySelectorAll('[name="vm.ContactUsForm"]')[0]);a.find('[name="name"]').controller("ngModel").$render(),a.find('[name="email"]').controller("ngModel").$render(),a.find('[name="phone"]').controller("ngModel").$render(),a.find('[name="comment"]').controller("ngModel").$render(),v.ContactUsForm.$setPristine()},function(e){})}function i(){e({method:"GET",url:"http://demoserver.tacme.net:3030/DMCATacsoftH3/Services/GenericContentRestService.svc/GetGenericContentByUniqueName?WebsiteID=3&LanguageID=1&UniqueName=sail.with.us"}).then(function(e){v.SailWithUSData=e.data.payload[0]},function(e){alert(e)})}function o(){e({method:"GET",url:"http://demoserver.tacme.net:3030/DMCATacsoftH3/Services/GenericContentRestService.svc/GetGenericContentByUniqueName?WebsiteID=3&LanguageID=1&UniqueName=beyond.the.horizon"}).then(function(e){v.HorizoneData=e.data.payload[0]},function(e){alert(e)})}function r(){e({method:"GET",url:"http://demoserver.tacme.net:3030/DMCATacsoftH3/Services/GenericContentRestService.svc/GetGenericContentByUniqueName?WebsiteID=3&LanguageID=1&UniqueName=a.powerful.driving.force"}).then(function(e){v.DrivingData=e.data.payload[0]},function(e){alert(e)})}function s(){e({method:"GET",url:"http://demoserver.tacme.net:3030/DMCATacsoftH3/Services/GenericContentRestService.svc/GetGenericContentByUniqueName?WebsiteID=3&LanguageID=1&UniqueName=a.number.of.significant.triumphs"}).then(function(e){v.TriumpsData=e.data.payload[0]},function(e){alert(e)})}function c(){e({method:"GET",url:"http://demoserver.tacme.net:3030/DMCATacsoftH3/Services/GenericContentRestService.svc/GetGenericContentByUniqueName?WebsiteID=3&LanguageID=1&UniqueName=a.platform.of.excellence"}).then(function(e){v.ExcellenceData=e.data.payload[0]},function(e){alert(e)})}function l(){e({method:"GET",url:"http://demoserver.tacme.net:3030/DMCATacsoftH3/Services/GenericContentRestService.svc/GetGenericContentByUniqueName?WebsiteID=3&LanguageID=1&UniqueName=the.strength.of.innovation"}).then(function(e){v.InnovationData=e.data.payload[0]},function(e){alert(e)})}function m(e){return a.trustAsHtml(e)}function p(){v.bannerLoaded=!1;var a=e({method:"GET",url:"http://demoserver.tacme.net:3030/DMCATacsoftH3/Services/BannerRestService.svc/GetBannersByZone?WebsiteID=3&LanguageID=1&ZoneUniqueName=home.header.banner"}).then(function(e){v.items=e.data.payload,v.Loaded=!0},function(e){alert(e)}),n=e({method:"GET",url:"http://demoserver.tacme.net:3030/DMCATacsoftH3/Services/GenericContentRestService.svc/GetGenericContentByUniqueName?WebsiteID=3&LanguageID=1&UniqueName=dubai"}).then(function(e){v.BannerData=e.data.payload[0]},function(e){alert(e)});t.all([a,n]).then(function(){v.bannerLoaded=!0})}function d(){e({method:"GET",url:"http://demoserver.tacme.net:3030/DMCATacsoftH3/Services/GenericContentRestService.svc/GetGenericContentByUniqueName?WebsiteID=3&LanguageID=1&UniqueName=word.from.the.chairman"}).then(function(e){v.ChairMainData=e.data.payload[0]},function(e){alert(e)})}function u(){e({method:"GET",url:"http://demoserver.tacme.net:3030/DMCATacsoftH3/Services/GenericContentRestService.svc/GetGenericContentByUniqueName?WebsiteID=3&LanguageID=1&UniqueName=redefining.potential"}).then(function(e){v.PotentialData=e.data.payload[0]},function(e){alert(e)})}var v=this;v.LoadBanners=p,v.LoadChairMain=d,v.LoadPotential=u,v.Inovation=l,v.Excellence=c,v.Triumps=s,v.Driving=r,v.Horizone=o,v.SailWithUS=i,v.ContactUs=n,v.SafeHtml=m}angular.module("mTDubai").controller("HomeController",e,["$http","$sce","$q"])}(),function(){"use strict";function e(e,t,n){function i(){n({method:"GET",url:"http://demoserver.tacme.net:3030/DMCATacsoftH3/Services/GenericContentRestService.svc/GetGenericContentByUniqueName?WebsiteID=3&LanguageID=1&UniqueName=footer.copy.rights"}).then(function(e){o.FooterRights=e.data.payload[0]},function(e){alert(e)})}var o=this;o.LoadFooter=i,o.hamburgerClick=function(e){var a=angular.element(e.target).closest(".top-nav-hamburger");a.siblings(".top-nav").toggleClass("slide-down")},o.scrollTo=function(a){e.hash(a),angular.element("html,body").animate({scrollTop:angular.element("#"+a).offset().top})},t.on("click",function(e){return e.preventDefault(),e.stopPropagation(),angular.element(e.target).closest(".top-nav-hamburger,.top-nav").length>0?!1:void angular.element(".top-nav-hamburger").next(".top-nav").removeClass("slide-down")}),a()}function a(){var e=5,a=1200,t=700,n=angular.element('<a href="#0" class="move-to-top fa fa-angle-up"></a>').appendTo("body");angular.element(window).scroll(function(){angular.element(this).scrollTop()>e?n.addClass("cd-is-visible"):n.removeClass("cd-is-visible cd-fade-out"),angular.element(this).scrollTop()>a&&n.addClass("cd-fade-out")}),n.on("click",function(e){e.preventDefault(),angular.element("body,html").animate({scrollTop:0},t)})}angular.module("mTDubai").controller("AppController",["$location","$document","$http"],e)}(),function(){"use strict";function e(e,a){e.when("/",{templateUrl:"app/views/home.html",controller:"HomeController",controllerAs:"vm"}).when("/new",{templateUrl:"app/main/addnew.html",controller:"AddNewController",controllerAs:"vm"}).otherwise({redirectTo:"/"}),a.html5Mode({enabled:!0,requireBase:!0})}e.$inject=["$routeProvider","$locationProvider"],angular.module("mTDubai").config(e),angular.module("mTDubai").run(["$rootScope","$location","$anchorScroll","$routeParams",function(e,a,t,n){var i=e;i.$on("$routeChangeSuccess",function(){a.hash(n.scrollTo),t()})}])}(),angular.module("mTDubai").run(["$templateCache",function(e){e.put("app/views/home.html",'<section ng-include="\'app/includes/home/top-slider.html\'" class="home-slider-wrapper" id="home-slider-wrapper"></section><section ng-include="\'app/includes/home/chairman-word.html\'" class="chairman-word-back pattern-back" id="chairman-word-wrapper"></section><section id="potential-wrapper"><figure><img class="img-responsive pattern" src="assets/images/home/pattern1.png"></figure><div ng-include="\'app/includes/home/potential.html\'" class="potential-back pattern-back"></div></section><section id="innovation-wrapper"><figure><img class="img-responsive pattern" src="assets/images/home/pattern2.png"></figure><div ng-include="\'app/includes/home/innovation.html\'" class="innovation-back pattern-back"></div></section><section id="excellence-wrapper"><figure class="excellence-figure triangle-bottom-lime-after triangle-bottom-white-before"><img class="img-responsive pattern" src="assets/images/home/pattern3.png"></figure><div ng-include="\'app/includes/home/excellence.html\'" class="excellence-back pattern-back"></div></section><section id="triumph-wrapper"><figure><img class="img-responsive pattern" src="assets/images/home/pattern4.png"></figure><div ng-include="\'app/includes/home/triumph.html\'" class="triumph-back pattern-back"></div></section><section class="driving-back" style="background-image:url(\'assets/images/home/driving-back.png\');" id="driving-force-wrapper"><div ng-include="\'app/includes/home/driving-force.html\'" class="driving-force-back pattern-back"></div></section><section ng-include="\'app/includes/home/horizon.html\'" class="horizon-back pattern-back" id="horizon-wrapper"></section><section id="contactus-wrapper"><figure><img class="img-responsive pattern" src="assets/images/home/pattern5.png"></figure><div ng-include="\'app/includes/home/contactus.html\'" class="container"></div></section><section ng-include="\'app/includes/home/contact-info.html\'" class="container" id="contactinfo-wrapper"></section>'),e.put("app/includes/common/footer.html",'<div ng-init="app.LoadFooter()" class="text-center footer-back" style="background-image:url(\'../assets/images/common/footer-pattern.png\')"><span class="copyright">&copy; {{ app.FooterRights.Keywords}}</span></div>'),e.put("app/includes/common/header.html",'<a href="index.html" class="maritime-logo"><img src="assets/images/common/logo.png"></a>'),e.put("app/includes/common/top-nav.html",'<nav class="top-nav-wrapper"><div class="container"><a href="javascript:void(0)" class="top-nav-hamburger visible-xs" ng-click="app.hamburgerClick($event);"><i class="fa fa-bars fa-lg"></i></a><ul class="top-nav"><li><a href="/"><i class="fa fa-home fa-lg"></i></a></li><li><a href="javascript:void(0)" ng-click="app.scrollTo(\'chairman-word-wrapper\')"><span>Chairman message</span></a></li><li><a href="javascript:void(0)" ng-click="app.scrollTo(\'potential-wrapper\')"><span>POTENTIAL</span></a></li><li><a href="javascript:void(0)" ng-click="app.scrollTo(\'excellence-wrapper\')"><span>EXCELLENCE</span></a></li><li><a href="javascript:void(0)" ng-click="app.scrollTo(\'triumph-wrapper\')"><span>TRIUMPHS</span></a></li><li><a href="javascript:void(0)" ng-click="app.scrollTo(\'driving-force-wrapper\')"><span>DRIVING FORCE</span></a></li><li><a href="javascript:void(0)" ng-click="app.scrollTo(\'horizon-wrapper\')"><span>BEYOND THE HORIZON</span></a></li><li><a href="javascript:void(0)" ng-click="app.scrollTo(\'innovation-wrapper\')"><span>INNOVATION</span></a></li><li><a href="javascript:void(0)" ng-click="app.scrollTo(\'contactus-wrapper\')"><i class="fa fa-envelope-o fa-lg"></i></a></li></ul></div></nav>'),e.put("app/includes/home/chairman-word.html",'<div class="container" ng-init="vm.LoadChairMain()"><div class="chairman-word-wrapper home-section clearfix"><figure class="img-container float-left margin-right-20 top-right-blue-pattern triangle-right-lime-after"><img class="img-responsive" ng-src="http://demoserver.tacme.net:3030/dmco{{vm.ChairMainData.MainImage}}"></figure><div class="textWrapper float-right"><h2 class="section-title text-uppercase margin-top-0">{{vm.ChairMainData.Title}}</h2><p><span ng-bind-html="vm.SafeHtml(vm.ChairMainData.Content)"></span></p><span class="name">{{vm.ChairMainData.Keywords}}</span> <span class="designation">{{vm.ChairMainData.MetaPageTitle}}</span></div><div class="clearfix"></div><div class="quote-wrapper"><blockquote>{{vm.ChairMainData.Description}}</blockquote><span class="author">{{vm.ChairMainData.MetaPageDescription}}</span></div></div></div>'),e.put("app/includes/home/contact-info.html",'<div class="home-section contact-info-section" ng-init="vm.SailWithUS()"><h2 class="section-title text-uppercase text-center">{{vm.SailWithUSData.Title}}</h2><div class="contact-info-wrapper"><div class="contact-info"><i class="fa fa-phone-square fa-lg" aria-hidden="true"></i> <span class="content">{{vm.SailWithUSData.Description}}</span></div><div class="contact-info"><i class="fa fa-envelope-square fa-lg" aria-hidden="true"></i> <span class="content" ng-bind-html="vm.SafeHtml(vm.SailWithUSData.Content)"></span></div></div><div class="social-wrapper"><a href="javascript:void(0)" class="social-icon instagram"><i class="fa fa-instagram fa-2x" aria-hidden="true"></i></a> <a href="javascript:void(0)" class="social-icon twitter"><i class="fa fa-twitter-square fa-2x" aria-hidden="true"></i></a> <a href="javascript:void(0)" class="social-icon facebook"><i class="fa fa-facebook-square fa-2x" aria-hidden="true"></i></a></div></div>'),e.put("app/includes/home/contactus.html",'<div class="home-section form-section"><h2 class="section-title text-uppercase margin-top-0">CONTACT US</h2><form class="form-validate" novalidate="" name="vm.ContactUsForm"><div class="form-row"><div class="left-col"><div class="form-control"><input id="name" type="text" placeholder="Name:" name="name" ng-model="name" ng-required="true"> <i class="fa fa-user"></i> <label class="error" ng-show="vm.ContactUsForm.name.$error.required && !vm.ContactUsForm.name.$pristine">Please enter your name</label></div><div class="form-control"><input type="email" placeholder="Email:" name="email" ng-model="email" ng-required="true"> <i class="fa fa-envelope"></i> <label class="error" ng-show="vm.ContactUsForm.email.$error.required && !vm.ContactUsForm.email.$pristine">Please enter your email</label> <label class="error" ng-show="vm.ContactUsForm.email.$error.email && !vm.ContactUsForm.email.$pristine">Please enter a valid email</label></div><div class="form-control"><input type="tel" placeholder="phone:" name="phone" ng-model="phone" ng-required="true" ng-pattern="/^\\d+$/" maxlength="12"> <i class="fa fa-phone-square"></i> <label class="error" ng-show="vm.ContactUsForm.phone.$error.required && !vm.ContactUsForm.phone.$pristine">Please enter your phone Number</label> <label class="error" ng-show="vm.ContactUsForm.phone.$error.pattern || vm.ContactUsForm.phone.$error.maxlength && !vm.ContactUsForm.phone.$pristine">Please enter a valid phone Number(Only Numbers are allowed)</label></div></div><div class="right-col"><div class="form-control full-height"><textarea placeholder="Comment:" name="comment" ng-model="comment"></textarea> <i class="fa fa-comments"></i></div></div></div><div class="form-control text-center"><button type="submit" class="blue-form-btn" ng-disabled="vm.ContactUsForm.$invalid" ng-click="vm.ContactUs()">Send</button></div></form></div>'),e.put("app/includes/home/driving-force.html",'<div class="container" ng-init="vm.Driving()"><div class="driving-force-wrapper home-section clearfix"><figure class="img-container float-right triangle-left-acqa-after triangle-left-white-before"><img class="img-responsive" ng-src="http://demoserver.tacme.net:3030/dmco{{vm.DrivingData.MainImage}}"></figure><div class="textWrapper float-left"><h2 class="section-title text-uppercase">{{vm.DrivingData.Title}}</h2><span ng-bind-html="vm.SafeHtml(vm.DrivingData.Content)"></span></div></div></div>'),e.put("app/includes/home/excellence.html",'<div class="container" ng-init="vm.Excellence()"><div class="excellence-wrapper home-section clearfix"><figure class="img-container float-right margin-left-20 bottom-left-acqa-pattern"><img class="img-responsive" ng-src="http://demoserver.tacme.net:3030/dmco{{vm.ExcellenceData.MainImage}}"></figure><div class="textWrapper float-left"><h2 class="section-title text-uppercase margin-top-0">{{vm.ExcellenceData.Title}}</h2><h4 class="section-subtitle text-uppercase">{{vm.ExcellenceData.Description}}</h4><h4 class="margin-top-50 margin-bottom-60">{{vm.ExcellenceData.Keywords}}</h4><p><span ng-bind-html="vm.SafeHtml(vm.ExcellenceData.Content)"></span></p></div></div></div>'),e.put("app/includes/home/horizon.html",'<div class="container" ng-init="vm.Horizone()"><div class="horizon-wrapper home-section clearfix"><figure class="img-container float-left triangle-bottom-lime-after"><img class="img-responsive horizon1" ng-src="http://demoserver.tacme.net:3030/dmco{{vm.HorizoneData.RelatedEntities[0].Url}}"> <img class="img-responsive horizon2" ng-src="http://demoserver.tacme.net:3030/dmco{{vm.HorizoneData.MainImage}}"></figure><div class="textWrapper float-right"><h2 class="section-title text-uppercase">{{vm.HorizoneData.Title}}</h2><span ng-bind-html="vm.SafeHtml(vm.HorizoneData.Content)"></span></div></div></div>'),e.put("app/includes/home/innovation.html",'<div class="container" ng-init="vm.Inovation()"><div class="innovation-wrapper home-section clearfix"><figure class="img-container float-left margin-right-20 bottom-right-blue-pattern"><img class="img-responsive" src="../assets/images/home/innovation.png"> <img class="img-responsive dmca-logo" ng-src="http://demoserver.tacme.net:3030/dmco{{vm.InnovationData.MainImage}}"></figure><div class="textWrapper float-right"><h2 class="section-title text-uppercase">{{ vm.InnovationData.Title }}</h2><h4 class="section-subtitle text-uppercase">{{vm.InnovationData.Description}}</h4><span ng-bind-html="vm.SafeHtml(vm.InnovationData.Content)"></span></div></div></div>'),e.put("app/includes/home/potential.html",'<div class="container" ng-init="vm.LoadPotential()"><div class="potential-wrapper home-section clearfix"><figure class="img-container float-right margin-left-20 triangle-left-acqa-after triangle-left-white-before"><img class="img-responsive" ng-src="http://demoserver.tacme.net:3030/dmco{{vm.PotentialData.MainImage}}"></figure><div class="textWrapper float-left"><h2 class="section-title text-uppercase margin-top-0">{{vm.PotentialData.Title}}</h2><h4 class="section-subtitle text-uppercase">{{vm.PotentialData.Description}}</h4><span ng-bind-html="vm.SafeHtml(vm.PotentialData.Content)"></span></div></div></div>'),e.put("app/includes/home/top-slider.html",'<ul ng-init="vm.LoadBanners()" class="bxslider" id="top-slider" full-width-slider=""><li ng-repeat="item in vm.items"><img class="img-responsive" ng-src="http://demoserver.tacme.net:3030/dmco{{item.Url}}"></li></ul><div class="text-over-banner"><div class="slogan"><h1 class="title">{{vm.BannerData.Title}}</h1><h3 class="title">{{vm.BannerData.Description}}</h3><form class="search-container"><input type="text" class="searchBox" name="searchBox" placeholder="Search"> <button type="submit" class="search-icon"><i class="fa fa-2x fa-search"></i></button></form></div></div>'),e.put("app/includes/home/triumph.html",'<div class="container" ng-init="vm.Triumps()"><div class="triumph-wrapper home-section clearfix"><h2 class="section-title text-uppercase">{{vm.TriumpsData.Title}}</h2><figure class="img-container float-right"><img class="img-responsive" ng-src="http://demoserver.tacme.net:3030/dmco{{vm.TriumpsData.MainImage}}"></figure><span ng-bind-html="vm.SafeHtml(vm.TriumpsData.Content)"></span></div></div>')}]);
//# sourceMappingURL=../maps/scripts/app-89f4128575.js.map
