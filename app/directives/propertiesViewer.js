'use strict';


var app = angular.module("ybm");


//Encapsulates chosen
app.directive('prpViewer', function ($http) {
    var linker = function (scope, element, attr) {
        //scope.$watch(attr.doveChosen, function (oldVal, newVal) {
        //    element.trigger('liszt:updated');
        //});
        //element.chosen({ disable_search_threshold: 20 });
    };
    return {
        restrict: 'A',
        link: linker,
        templateUrl: 'app/directives/propertiesViewer.html'
    }
});

//Encapsulates chosen
app.directive('prpSearch', function ($http) {
    var linker = function (scope, element, attr) {
          };
    return {
        restrict: 'A',
        link: linker,
        templateUrl: 'app/directives/propertiesSearch.html'
    }
});



