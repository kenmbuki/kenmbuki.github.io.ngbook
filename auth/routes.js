angular.module("weather", ['ngRoute'])
    .config(function($routeProvider){
        $routeProvider
        .when('/login', {
            controller: 'LoginController',
            templateUrl: '/login.html'
        })
        .when('/register', {
            controller: 'RegisterController',
            templateUrl: '/register.html'
        })
        .when('/profile', {
            controller: 'ProfileController',
            templateUrl: '/profile.html',
            access: {
                requiresLogin : true,
                requiredPermission: ['user']
            }
        })
        .otherwise({ redirectTo: '/login' });
});