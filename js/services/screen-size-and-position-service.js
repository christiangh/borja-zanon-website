angular.module("webBorja")
.factory("screenSizeAndPosition", ['$rootScope', function($rootScope){
	var menuHeight = 50;
	var defaultHeight = 800;
	var browserHeight = 0;

	return {
		menuHeight: menuHeight,
		setResizePhoto: function(element){
			browserHeight = window.innerHeight || defaultHeight;
        	$(element).css('height', (browserHeight-menuHeight) + "px");
		},
		isBelowTheMainPhoto: function(scrollPos){
			return scrollPos >= $("#nav-container").offset().top;
		},
		checkTheSection: function(sections, scrollPos, currentPosition){
			if(scrollPos < (browserHeight - menuHeight)){
				//Over the menu
				if(currentPosition){
					$rootScope.$broadcast("changeMenuSelected", 0);
				}
			}else{
				$(sections).each(function (index, currentObject) {
			    	var realIndex = index+1;
					var refElement = $("#" + currentObject);

					if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() - 150 > scrollPos && currentPosition != realIndex) {
						//Active
						$rootScope.$broadcast("changeMenuSelected", realIndex);
					}
				});
			}
		}
	}
}]);