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
domains.controller('showDomain', function($scope){
  $scope.test = 'teste';
})

// routes
domains.config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'pages/index.html'
  });
  $routeProvider.when('/show/:id', {
    templateUrl: 'pages/show.html',
    controller: 'showDomain'
  });
});
