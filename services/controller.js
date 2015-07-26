angular.module("weather", ['CalculatorService'])
.controller("mainController", function($scope){
    $scope.message = 'Welcome, Karibu sana !!!';
})
.controller('CalcController', function($scope, Calculator){
$scope.findSquare = function () {
        $scope.answer = Calculator.square($scope.number);
    }
});
