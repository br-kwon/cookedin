angular.module('cookedin', [
  'cookedin.services',
  'cookedin.auth',
  'cookedin.listing',
  'ng-route'
])

.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/signin', {
      templateUrl: 'auth/login.html',
      controller: 'AuthController'
    })
    .when('/signup', {
      templateUrl: 'auth/createAccount.html',
      controller: 'AuthController'
    })
    .when('/listing', {
      templateUrl: 'listing/listing.html',
      controller: 'ListingController'
    });
});