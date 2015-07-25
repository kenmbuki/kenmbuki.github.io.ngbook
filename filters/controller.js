angular.module('myApp', [])
.controller('filterController',
function($scope){
$scope.friends = [
    {name:'Brian Ogolla', age:'22'},
    {name:'Pablo', age:'55'},
    {name:'Doc', age:'35'},
    {name:'Linda', age:'32'},
];
})

.controller('validationCtrl', function ($scope) {
   var validUsername = "Ken Mbuki";
   var validEmail = "mbuki.messi@gmail.com";
   $scope.reset = function(){
        $scope.username = validUsername;
        $scope.email = validEmail;
   }
   $scope.checkData = function() {
        if ($scope.username != validUsername || $scope.email != validEmail) {
            alert("The data provided do not match with the default owner");
        } else {
            alert("Seems to be ok!");
        }
    }
});



