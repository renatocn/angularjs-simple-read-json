var domains = angular.module('controllerDomains', ['ngRoute']);

// index
domains.controller('domainsList', function($scope, $http) {
  $http.get("domains.json").success(function(data){
    $scope.domains = data.domains;
  }).error(function(data){
    console.log("Error...");
  });
});

// show
domains.controller('showDomain', function($scope, $routeParams){
  $scope.name = "showDomain";
  $scope.params = $routeParams;
})

// routes
domains.config(function($routeProvider, $locationProvider){
  $routeProvider.when('/show/:id', {
    templateUrl: 'show.html',
    controller: 'showDomain'
  });
  $locationProvider.html5Mode(true);
});
