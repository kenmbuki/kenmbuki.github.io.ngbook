angular.module('myApp', [])
.controller('filterController',
function($scope){
$scope.friends = [
    {name:'Brian Ogolla', age:'22'},
    {name:'Pablo', age:'55'},
    {name:'Doc', age:'35'},
    {name:'Linda', age:'32'},
];
});