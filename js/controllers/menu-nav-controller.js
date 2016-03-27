angular.module("webBorja")
.controller("MenuNavController", ['$scope', function($scope){
	$scope.menuSelected = 1;
	$scope.positionSelected = function(newOptionSelected){
		if(newOptionSelected == $scope.menuSelected){
			return true;
		}else{
			return false;
		}
	}
}]);