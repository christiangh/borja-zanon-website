angular.module("webBorja")
.factory("menuManager", ['$rootScope', 'SECTIONS', function($rootScope, SECTIONS){
	var menuSelected = 0;
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
			$('html, body').animate({
        		scrollTop: ($("#" + section).offset().top - menuHeight)
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