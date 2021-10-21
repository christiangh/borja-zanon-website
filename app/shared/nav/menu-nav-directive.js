angular.module("webBorja")
.directive("menuNav", ["screenSizeAndPosition", "SECTIONS", 'menuManager', function(screenSizeAndPosition, SECTIONS, menuManager){
	var autoScrollWorking = false;
	var checkTheSectionInWebBorja = screenSizeAndPosition.checkTheSection.bind({}, SECTIONS);

	return{
		restrict: "A",
		link: function(scope, element, attrs, controller, transcludeFn){
			$(element).attr("id", "menu-nav");

			scope.clickOptionOnNav = menuManager.clickOptionOnNav.bind({}, screenSizeAndPosition.menuHeight);
			scope.isPositionSelected = menuManager.isPositionSelected;

			$(window).scroll(function() {
				var scrollPos = $(document).scrollTop();

				//To make the menu fixed or relative 
		        if(screenSizeAndPosition.isBelowTheMainPhoto(scrollPos)){
		        	element.addClass("fixed-nav");
		        }else{
		        	element.removeClass("fixed-nav");
		        }

		        //To select the menu by the position
		        if(!autoScrollWorking){
		        	checkTheSectionInWebBorja(scrollPos, menuManager.getMenuSelected());
		        }

				scope.$on('autoScrollFired', function(){
					autoScrollWorking = true;
				});

				scope.$on('autoScrollFinished', function(){
					autoScrollWorking = false;
				});

				scope.$on('changeMenuSelected', function(event, newMenuSelected){
					menuManager.setMenuSelected(newMenuSelected);
				});

				scope.toggleMobileMenu = function(){
					$(".navbar-toggle").toggleClass("pushed");

					if(!$("#menu-nav").hasClass("fixed-nav") && !$("ul.nav-list").hasClass("mobile-menu-displayed")){
						menuManager.goTo("#nav-container");
					}

					$("ul.nav-list").toggleClass("mobile-menu-displayed");
				}
		    });
		}
	}
}]);
