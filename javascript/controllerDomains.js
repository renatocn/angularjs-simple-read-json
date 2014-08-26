// https://docs.angularjs.org/api/ng/service/$http#get
function controllerDomains($scope, $http){
  //define domains is array
  $scope.domains = Array();
  //https://docs.angularjs.org/api/ng/service/$http#get
  $http.get("domains.json").success(function(data){
    //define $scope.domains with value to data.domains returned
    $scope.domains = data.domains;
  }).error(function(data){
    //if on error, show on console.log
    console.log("Error...");
  });
}
