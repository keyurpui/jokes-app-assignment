(function () {
    'use strict';

    angular.module('boilerplate')

        .controller('userAuthCrtl', ['$scope', '$location', 'boilerplateConstants',
            function ($scope, $location, boilerplateConstants) {
                $scope.user = {};
                $scope.user.email = '';
                $scope.user.password = '';

                $scope.login = login;

                /**
                 * Check login validation based on validation redirect to jokesPage.
                 * @param {Object} loginForm login form object
                 */
                function login(loginForm) {
                    if($scope.loginForm.$valid)
                    {
                        localStorage.setItem(boilerplateConstants.loginJokesApp,true);
                        $location.path('/jokesPage');
                    }
                }

            }]);
})();
