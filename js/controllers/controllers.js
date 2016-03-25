(function(){

	var app = angular.module('borja-app');

	app.controller("MenuNavController", function($scope){
		$scope.menuSelected = 1;
		$scope.positionSelected = function($newOptionSelected){
			if($newOptionSelected == $scope.menuSelected){
				return true;
			}else{
				return false;
			}
		}
	});

	app.controller("HomeController", function($scope){
		
	});

	app.controller("BiographyController", function($scope){
		
	});

	app.controller("ServicesController", function($scope){
		
	});

	app.controller("GalleryController", function($scope){
		
	});

	app.controller("ContactController", function($scope){
		
	});

	app.controller("404Controller", function($scope){
		
	});

})();