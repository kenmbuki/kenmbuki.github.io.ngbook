app = angular.module('app', []);
app.directive('bnDirective', function( $timeout ){
function link( $scope, element, attributes ) {
    var timer = $timeout (
        function() {
            console.log( "Timeout executed", Date.now() );
             },
             2000
        );
        timer.then(
            function() {
                console.log( "Timer resolved!", Date.now() );
            },
            function() {
                console.log( "Timer rejected!", Date.now() );
            }
        );

        $scope.$on(
                "$destroy",
                function( event ) {
                    $timeout.cancel( timer );
                }
            );
        }
        return({
            link: link,
            scope: false
        });
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