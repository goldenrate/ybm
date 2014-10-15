/**
 * AngularJS module to process a form.
 * https://www.lullabot.com/blog/article/processing-forms-angularjs
 */

(function () {
    var app = angular.module("ybm");
    var searchController = function ($scope, $http) {
        $scope.modSelectedState = null;
        $scope.modSelectedCities = null;
        //$scope.fuckyou = "really?";

        var stateUrl = "http://reference.3taps.com/locations?level=state&auth_token=2ea8ef27ada6670c562b7f18a2e7d849";
       
        $scope.states = [];
        $scope.cities = [];


        $scope.newvar = function () {
          return $http.get(stateUrl).success(function (data) {
            $scope.states = data.locations;
          });
        }
        $scope.newvar();
        var blabla = "";

        $http.get('./data/states.js').success(function (data) {
            $scope.states = data.locations;
        });

        $http.get('./data/cities.js').success(function (data) {
            $scope.cities = data.locations;
        });
    };

    app.controller("searchController", searchController);

}());



