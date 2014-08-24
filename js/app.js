angular.module("app",["ngRoute"])
.config(["$routeProvider","$locationProvider",function($routeProvider,$locationProvider) {

	$routeProvider.
		when("/", {
			templateUrl: "view/top/index.html",
			controller: "mainCtrl",
			title:"top"
		})
		.when("/test", {
			templateUrl: "view/test/index.html",
			controller: "helloCtrl",
			title:"test"
		})
		.when("/test/hoge", {
			templateUrl: "view/test/hoge.html",
			controller: "helloCtrl",
			title:"hoge"
		})
		.otherwise({
			redirectTo: "/"
		});

}]);