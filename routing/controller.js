angular.module("weather")
.controller("mainController", function($scope){
    $scope.message = 'Welcome, Karibu sana !!!';
})
.controller("homeController", function($scope){
    $scope.message = 'Am just Becoming a guru !! Thats all about me.';
})
.controller("aboutController", function($scope, $http){
    $scope.message = 'Am just Becoming a guru !! Thats all about me.';
    $http.get('https://api.github.com/users/angular/repos')
        .success(function(repos){
            $scope.repos = repos;
        });
})
.controller("contactController", function($scope){
    $scope.message = 'Contact Me Buddy !!';
})

// inline array notation to avoid problems on minification
//controller('aboutController', ['$scope', '$http', function (s, h) {
//    h.get('https://api.github.com/users/angular/repos')
//        .success(function (repos) {
//        s.repos = repos;
//    });
//}])