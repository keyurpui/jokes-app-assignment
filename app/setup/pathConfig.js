(function () {
  'use strict';
  angular.module('boilerplate')

    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider

        .when('/', {
          templateUrl: 'views/login.html',
          requireAuth:false
        })
        .when('/jokesPage', {
          templateUrl: 'views/jokesPage.html',
          requireAuth:true
        })
        .otherwise({
          redirectTo: '/'
        });

    }]);
}());