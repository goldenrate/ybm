(function () {
    //define the module //""
    var app = angular.module("ybm", ["ui.bootstrap", "ngRoute"]);
  
    var MainController = function ($scope, $http) {
    };

    app.config(function ($routeProvider) {
        $routeProvider
            .when('/home', routes.home)
            .when('/properties', routes.properties)
            .when('/services', routes.services)
            .when('/owners', routes.owners)
            .when('/contact', routes.contact)
            //.when('/terms', routes.terms)
            //.when('/contact', routes.contact)
            .otherwise({ redirectTo: '/home' });
    });

    var routes = {
        home: { templateUrl: 'home.html', controller: 'homeController' },
        properties: { templateUrl: 'properties.html', controller: 'listingsController' },
        services: { templateUrl: 'services.html', controller: 'mainController' },
        owners: { templateUrl: 'owners.html', controller: 'mainController' },
        contact: { templateUrl: 'contact.html', controller: 'mainController' },
        //privacy: { templateUrl: 'PrivacyStatement.html', controller: 'brandingController' },
        //terms: { templateUrl: 'TermsofUse.html', controller: 'brandingController' },
        //contact: { templateUrl: 'app/Contact.html', controller: 'ContactController' }
    }
    app.controller("MainController", MainController);
   
  

}());

//app.config(function ($routeProvider) {
//    $routeProvider
//        .when('/main', routes.main)
//        //.when('/privacy', routes.privacy)
//        //.when('/terms', routes.terms)
//        //.when('/contact', routes.contact)
//        .otherwise({ redirectTo: '/main' });
//});

//var routes = {
//    main: { templateUrl: 'app/Main.html', controller: 'MainController' },
//    //privacy: { templateUrl: 'PrivacyStatement.html', controller: 'brandingController' },
//    //terms: { templateUrl: 'TermsofUse.html', controller: 'brandingController' },
//    //contact: { templateUrl: 'app/Contact.html', controller: 'ContactController' }
//}