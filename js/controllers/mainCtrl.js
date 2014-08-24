angular.module("app")
    .controller("mainCtrl", function($scope) {
    	$scope.page = 'index';
    	$scope.title = "メインコントローラー";
    	$scope.description = "テストーーーー！";
    	$scope.hoge = "hoge×２";
	});