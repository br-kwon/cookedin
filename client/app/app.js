angular.module('cookedin', [
  'cookedin.services',
  'cookedin.listing',
  'cookedin.auth',
  'ngRoute'
])

.config(function ($routeProvider, $httpProvider) {
  $routeProvider
  .when('/signin', {
    templateUrl: 'app/auth/login.html',
    controller: 'AuthController'
  })
  .when('/signup', {
    templateUrl: 'app/auth/createAccount.html',
    controller: 'AuthController'
  })
  .when('/listing', {
    templateUrl: 'app/listing/listing.html',
    controller: 'ListingController',
    authenticate: true
  })
  .otherwise({
    redirectTo: '/signin'
  });
});