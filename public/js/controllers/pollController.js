/* global app */
app.controller("pollController",["$scope", "$http", "$routeParams", function($scope, $http, $routeParams) {
    
     $http.get('api/polls')
        .success(function(data) {
            $scope.poll = data[$routeParams.pollName];
           
        });

        
}])