angular.module('im-day', [])
.controller('list', function($scope, $http) {
    $http.get('http://localhost:8090/im-day').
        then(function(response) {
            $scope.response = response.data.lista;
        });
});