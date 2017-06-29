var app = angular.module("myApp", ["ngRoute"])
 
app.controller("mainCtrl", function($scope, $http, $sce ) {

var url = "https://www.nsoft.com/angular/"

$http.jsonp($sce.trustAsResourceUrl(url)).then(function(response) {
    $scope.phones = response.data.phones
    console.log($scope.phones)
})

$scope.next = function() {
	var temp = $scope.phones[0]
	$scope.phones.splice(0,1)
	$scope.phones.push(temp)
}

$scope.prev = function() {
	var len = $scope.phones.length - 1
	var temp = $scope.phones[len]
	$scope.phones.splice(len,1)
	$scope.phones.unshift(temp)
}

$scope.getPhone = function(event) {
	for(i = 0; i < $scope.phones.length; i++)
	if(event.target.currentSrc === $scope.phones[i].image) {
		$scope.selectedPhone = $scope.phones[i]
	}
}
})

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "view/slider.html"
    })
    .when("/6144", {
        templateUrl : "view/phone.html"
    })
    .when("/6033", {
        templateUrl : "view/phone.html"
    })
    .when("/5705", {
        templateUrl : "view/phone.html"
    })
    .when("/5497", {
        templateUrl : "view/phone.html"
    })
    .when("/3724", {
        templateUrl : "view/phone.html"
    })
    .when("/6077", {
        templateUrl : "view/phone.html"
    })
})

app.directive('removeOnRightClick', function(){
  return{
    restrict: 'A',
    link: function(scope, element, attr){
      element.bind('contextmenu', function(e){
        e.preventDefault();
        element.remove()
       for(i = 0; i < scope.phones.length; i++) {
       	if(scope.phones[i].id === scope.phone.id) {
       		scope.phones.splice(i,1)
       	}
       }
      })
    }
  }
})



