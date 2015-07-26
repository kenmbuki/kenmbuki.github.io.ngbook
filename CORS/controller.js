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
        }, 350);
      }
    });
  }])
.factory('githubService', ['$http', function($http) {
    var githubUsername;
    var doRequest = function(path) {
      return $http({
        method: 'JSONP',
        url: 'https://api.github.com/users/' + githubUsername + '/' + path + '?callback=JSON_CALLBACK'
      });
    }
    return {
      events: function() { return doRequest('events'); },
      setUsername: function(newUsername) { githubUsername = newUsername; }
    };
  }]);