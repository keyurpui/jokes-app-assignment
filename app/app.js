(function () {
  'use strict';
  var app = angular.module('boilerplate', ['ngRoute']);

  app.run(['$rootScope', '$location', function ($rootScope, $location) {
    $rootScope.$on('$routeChangeStart', function (event, currRoute, prevRoute) {
      var logged = localStorage.getItem('loginJokesApp');
      var appTo = currRoute.requireAuth;
      if (!logged) {
        if (appTo) {
          $location.path('/');
        }
      } else {
        if (!appTo) {
          $location.path('/jokesPage');
        }
      }
      
    });
  }]);

})();


