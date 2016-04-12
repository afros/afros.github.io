
angular.module('podium').controller('controller', function($scope, $translate) {
	$scope.translate = function(lang) {
		console.log("test");
		$translate.use(lang);
	}

	$scope.getLanguage = function() {
		console.log("test");
		return $translate.use();
	}
});