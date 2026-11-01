/**
 * Photo carousel built on top of slick-carousel, opening each photo
 * in a fullscreen lightbox with magnific-popup (both jQuery plugins).
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

		// Slick swallows the click after a drag, so this only fires on a real click.
		// Cloned slides (infinite mode) are clickable too, hence the manual index.
		$carousel.on('click', '.photo-gallery-item', function(event){
			event.preventDefault();
			openLightbox(getImageIndex($(this)));
		});
	};

	ctrl.$onDestroy = function(){
		$timeout.cancel(initTimer);

		if($carousel.hasClass('slick-initialized')){
			$carousel.slick('unslick');
		}

		$carousel.off('click');
		$.magnificPopup.close();
	};

	function openLightbox(index){
		$.magnificPopup.open({
			items: ctrl.images.map(function(img){
				return { src: img.src, title: img.alt };
			}),
			type: 'image',
			gallery: { enabled: true },
			mainClass: 'mfp-fade',
			removalDelay: 300
		}, index);
	}

	// Clones get indexes outside [0, total), so wrap them back to the real photo
	function getImageIndex($item){
		var total = ctrl.images.length;
		var slickIndex = parseInt($item.closest('.slick-slide').attr('data-slick-index'), 10) || 0;

		return ((slickIndex % total) + total) % total;
	}
}
