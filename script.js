app = angular.module('myApp', []);
app.controller('MyController', function($scope, $timeout, $interpolate){
$scope.clock = {};
$scope.$watch('emailBody', function(body){
 if (body){
  var template = $interpolate(body);
  $scope.previewText = template ({ to: $scope.to });
 }
});
var updateClock = function(){
 $scope.clock.now = new Date();
 $timeout(function () {
   updateClock();
 },1000);
};
updateClock();
});

app.controller('calcController', function($scope){
$scope.counter = 0;
$scope.add = function(amount) { $scope.counter += amount; };
$scope.subtract = function (amount){ $scope.counter -= amount;};
});

  
