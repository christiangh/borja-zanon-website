/**
 * Photo carousel built on top of slick-carousel (jQuery plugin).
 *
 * Usage: <photo-gallery images="ctrl.images"></photo-gallery>
 * where `images` is an array of { src, alt }.
 *
 * The plugin is initialised once ng-repeat has rendered the slides,
 * so `images` is expected to be static.
 */
angular.module('webBorja').component('photoGallery', {
	bindings: {
		images: '<'
	},
	templateUrl: 'app/shared/photo-gallery/photo-gallery.html',
	controller: ['$element', '$timeout', PhotoGalleryController]
});

function PhotoGalleryController($element, $timeout){
	var ctrl = this;

	var SLICK_OPTIONS = {
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
		arrows: true,
		infinite: true,
		responsive: [
			{ breakpoint: 992, settings: { slidesToShow: 2 } },
			{ breakpoint: 768, settings: { slidesToShow: 1 } }
		]
	};

	var initTimer;
	var $carousel;

	ctrl.$postLink = function(){
		$carousel = $element.find('.photo-gallery');

		// Wait for ng-repeat to render the slides before handing them to slick
		initTimer = $timeout(function(){
			$carousel.slick(SLICK_OPTIONS);
		});

		// Temporary: keep links from navigating to the raw image until the lightbox is wired
		$carousel.on('click', 'a', function(event){
			event.preventDefault();
		});
	};

	ctrl.$onDestroy = function(){
		$timeout.cancel(initTimer);

		if($carousel.hasClass('slick-initialized')){
			$carousel.slick('unslick');
		}

		$carousel.off('click');
	};
}
