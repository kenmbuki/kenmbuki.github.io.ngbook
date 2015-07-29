angular.module('myApp', [])
.controller('ServiceController', ['$scope', '$timeout', 'githubService',
  function($scope, $timeout, githubService) {
    // The same example as above, plus the $timeout service
    var timeout;
    $scope.$watch('username', function(newVal) {
      if (newVal) {
        if (timeout) $timeout.cancel(timeout);
        timeout = $timeout(function() {
          githubService.events(newVal)
          .success(function(data, status) {
            $scope.events = data.data;
          });
        }, 1000);
      }
    });
  }])
.factory('githubService', ['$http', function($http) {
  var doRequest = function(username, path) {
    return $http({
      method: 'JSONP',
      url: 'https://api.github.com/users/' + username + '/' + path + '?callback=JSON_CALLBACK'
    });
  }
  return {
    events: function(username) { return doRequest(username, 'events'); },
  };
}]);