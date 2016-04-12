
angular.module('podium').controller('controller', function($scope, $translate) {
	$scope.translate = function(lang) {
		$translate.use(lang);
	}

	$scope.getLanguage = function() {
		return $translate.use();
	}
});