angular.module("webBorja")
.directive("resizablePhoto", ['screenSizeAndPosition', function(screenSizeAndPosition){
	return {
		scope: {},
		restrict: 'A',
		link: function(scope, element, attrs, controller, transcludeFn){
			//Resize the photo the first time
			screenSizeAndPosition.setResizePhoto(element);

			//Resize the photo every time the window size change
            $(window).resize(function() {
  				screenSizeAndPosition.setResizePhoto(element);
			});

            $("#photo-background").addClass("show-it");
		}
	}
}]);