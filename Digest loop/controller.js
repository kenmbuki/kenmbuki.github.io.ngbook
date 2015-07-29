app = angular.module('app', []);

app.controller('MainCtrl', function($scope) {
  $scope.foo = 0;
  $scope.bar = 0;
});

app.directive('clickable', function() {

  return {
    restrict: "E",
    scope: {
      foo: '=',
      bar: '='
    },
    template: '<ul style="background-color: lightblue"><li>{{foo}}</li><li>{{bar}}</li></ul>',
    link: function(scope, element, attrs) {
      element.bind('click', function() {
        scope.foo++;
        scope.bar++;

        scope.$apply();
      });
    }
  }

});
app.controller('UpdateCtrl', function($scope) {
  $scope.name = "Angular";

  $scope.updated = -1;

  $scope.$watch('name', function() {
    $scope.updated++;
  });
});

