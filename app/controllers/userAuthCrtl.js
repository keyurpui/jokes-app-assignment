(function () {
    'use strict';

    angular.module('boilerplate')

        .controller('userAuthCrtl', ['$scope', '$location', 'boilerplateConstants',
            function ($scope, $location, boilerplateConstants) {
                $scope.user = {};
                $scope.user.email = '';
                $scope.user.password = '';
                $scope.login = login;

                function login(loginForm) {
                    if($scope.loginForm.$valid)
                    {
                        localStorage.setItem(boilerplateConstants.loginJokesApp,true);
                        $location.path('/jokesPage');
                    }
                }

            }]);
})();
