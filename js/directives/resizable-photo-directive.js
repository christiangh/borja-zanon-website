angular.module("webBorja")
.directive("resizablePhoto", [function(){
	return {
		restrict: 'A',
		link: function(scope, element, attrs, controller, transcludeFn){
			function setResizePhoto(){
				var browserHeight = window.innerHeight || 800;
            	$("#photo-background").css('height', (browserHeight-50) + "px");
			}

			//Resize the photo the first time
			setResizePhoto();
			//Resize the photo every time the window size change
            $(window).resize(function() {
  				setResizePhoto()
			});

            $("#opacity-main-photo").addClass("show-it");
		}
	}
}]);