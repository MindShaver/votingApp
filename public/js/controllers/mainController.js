/* global app */
app.controller("mainController", function($scope, $http){
    
    $scope.formData = {};
            
    $http.get('api/polls')
        .success(function(data) {
            $scope.polls = data;
        });
        
    $scope.removePoll = function(id) {
        $http.delete('/api/polls/' + id)
            .success(function(results) {
                $scope.polls = results;
            })
            .error(function(err) {
                throw err;
            });
    }   
            
    $scope.createPoll = function() {
        $http.post('/api/polls', $scope.formData)
            .success(function(data) {
                $scope.formData = {};
                $scope.polls = data;
            })
            .error(function(err){
                throw err;
            });
        }
    });
    