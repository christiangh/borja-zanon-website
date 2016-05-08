angular.module("webBorja")
.factory("menuManager", ['$rootScope', 'SECTIONS', function($rootScope, SECTIONS){
	var menuSelected = 1;
	var autoScrollFired = false;
	return {
		clickOptionOnNav: function(menuHeight, optionSelected){
			if(autoScrollFired){
				//Protecting double click or other click while the scroll is working
				return false;
			}

			autoScrollFired = true;
			$rootScope.$broadcast("autoScrollFired");

			menuSelected = optionSelected;
			var section = SECTIONS[(optionSelected-1)];

			var extraPixel = 1;
			if(section === "home"){
				extraPixel = 0;
			}

			$('html, body').animate({
        		scrollTop: ($("#" + section).offset().top - menuHeight + extraPixel)
    		}, 1500, 'swing', function(){ $rootScope.$broadcast("autoScrollFinished"); autoScrollFired = false; });

    		$("ul.nav-list").removeClass("mobile-menu-displayed");
		},
		goTo: function(elementName){
			if(autoScrollFired){
				//Protecting double click or other click while the scroll is working
				return false;
			}

			autoScrollFired = true;
			$rootScope.$broadcast("autoScrollFired");


			$('html, body').animate({
        		scrollTop: ($(elementName).offset().top)
    		}, 1500, 'swing', function(){ $rootScope.$broadcast("autoScrollFinished"); autoScrollFired = false; });
		},
		isPositionSelected: function(newOptionSelected){
			if(newOptionSelected == menuSelected){
				return true;
			}else{
				return false;
			}
		},
		getMenuSelected: function(){
			return menuSelected;
		},
		setMenuSelected: function(newSelection){
			$rootScope.$apply(function(){
				menuSelected = newSelection;
			})
		}
	}
}]);