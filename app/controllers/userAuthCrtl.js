(function () {
    'use strict';

    angular.module('boilerplate')

        .controller('userAuthCrtl', ['$scope', '$location',
            function ($scope, $location) {
                $scope.user = {};
                $scope.user.email = '';
                $scope.user.password = '';
                $scope.login = login;

                function login(loginForm) {
                    if($scope.loginForm.$valid)
                    {
                        localStorage.setItem("loginJokesApp",true);
                        $location.path('/jokesPage');
                    }
                }

            }]);
})();
