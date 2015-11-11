angular.module('cookedin', [])

.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/signin', {
      templateUrl: 'auth/login.html',
      controller: 'AuthController'
    })
    .when('/signup', {
      templateUrl: 'auth/createAccount.html',
      controller: 'AuthController'
    });
});