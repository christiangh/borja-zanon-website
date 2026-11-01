angular.module('webBorja').controller('GalleryController', GalleryController);

function GalleryController(){
	var galleryCtrl = this;

	var TOTAL_IMAGES = 7;

	galleryCtrl.images = [];

	for(var i = 1; i <= TOTAL_IMAGES; i++){
		galleryCtrl.images.push({
			src: 'assets/images/gallery' + i + '.jpg',
			alt: 'Borja Zanón - foto ' + i
		});
	}
}
