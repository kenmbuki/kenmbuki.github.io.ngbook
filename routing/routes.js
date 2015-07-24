angular.module("weather", ['ngRoute'])
    .config(function($routeProvider){
        $routeProvider
        .when('/index',{
            templateUrl:'partials/index.html',
            controller:'mainController'
        })
        .when('/home',{
            templateUrl:'partials/home.html',
            controller:'homeController'
        })
        .when('/about',{
            templateUrl: 'partials/about.html',
            controller: 'aboutController'
        })
        .when('/contact',{
            templateUrl: 'partials/contact.html',
            controller: 'contactController'
        });
});