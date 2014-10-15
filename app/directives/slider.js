'use strict';


var app = angular.module("ybm");


//Encapsulates chosen
app.directive('prpSlider', function ($http) {
    var linker = function (scope, element, attr) {
        //scope.$watch(attr.doveChosen, function (oldVal, newVal) {
        //    element.trigger('liszt:updated');
        //});
        //element.chosen({ disable_search_threshold: 20 });
        //  Owl Carousel

        // Disable click when dragging
        function disableClick() {
            $('.owl-carousel .property').css('pointer-events', 'none');
        }
        // Enable click after dragging
        function enableClick() {
            $('.owl-carousel .property').css('pointer-events', 'auto');
        }

        if ($('.owl-carousel').length > 0) {
            if ($('.carousel-full-width').length > 0) {
                setCarouselWidth();
            }
            $(".featured-properties-carousel").owlCarousel({
                items: 5,
                itemsDesktop: [1700, 4],
                responsiveBaseWidth: ".featured-properties-carousel",
                pagination: false,
                startDragging: disableClick,
                beforeMove: enableClick
            });
            $(".testimonials-carousel").owlCarousel({
                items: 1,
                responsiveBaseWidth: ".testimonial",
                pagination: true
            });
            $(".property-carousel").owlCarousel({
                items: 1,
                responsiveBaseWidth: ".property-slide",
                pagination: false,
                autoHeight: true,
                navigation: true,
                navigationText: ["", ""],
                startDragging: disableClick,
                beforeMove: enableClick
            });
            $(".homepage-slider").owlCarousel({
                autoPlay: 10000,
                navigation: true,
                mouseDrag: false,
                items: 1,
                responsiveBaseWidth: ".slide",
                pagination: false,
                transitionStyle: 'fade',
                navigationText: ["", ""],
                afterInit: sliderLoaded,
                afterAction: animateDescription,
                startDragging: animateDescription
            });
        }
        function sliderLoaded() {
            $('#slider').removeClass('loading');
            document.getElementById("loading-icon").remove();
            centerSlider();
        }
        function animateDescription() {
            var $description = $(".slide .overlay .info");
            $description.addClass('animate-description-out');
            $description.removeClass('animate-description-in');
            setTimeout(function () {
                $description.addClass('animate-description-in');
            }, 400);
        }

        function centerSlider() {
            if ($(window).width() < 979) {
                var $navigation = $('.navigation');
                $('#slider .slide').height($(window).height() - $navigation.height());
                $('#slider').height($(window).height() - $navigation.height());

            }
            var imageWidth = $('#slider .slide img').width();
            var viewPortWidth = $(window).width();
            var centerImage = (imageWidth / 2) - (viewPortWidth / 2);
            $('#slider .slide img').css('left', -centerImage);
        }
    };
    return {
        restrict: 'A',
        link: linker,
        templateUrl: 'app/directives/slider.html'
    }
});
