/* global app */
app.controller("mainController", function($scope, $http){
    
    $scope.formData = {};
            
    $http.get('api/polls')
        .success(function(data) {
            console.log(data);
            $scope.polls = data;
        });
            
    $scope.createPoll = function() {
        $http.post('/api/polls', $scope.formData)
            .success(function(data) {
                alert("Success");
                $scope.formData = {};
                $scope.polls = data;
            })
            .error(function(err){
                alert(err);
            })
        }
    })