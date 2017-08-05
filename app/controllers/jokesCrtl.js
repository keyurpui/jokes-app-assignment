(function () {
    'use strict';

    angular.module('boilerplate')

        .controller('jokesCrtl', ['$scope', 'jokesPageSrv',
            function ($scope, jokesPageSrv) {
                $scope.jokes = {};
                $scope.jokes.selectedJoke = 'None';
                $scope.jokes.searchedJoke = '';

                $scope.loadSelectedJoke = loadSelectedJoke;
                $scope.loadSearchedJoke = loadSearchedJoke;
                activate();
                /**
                 * Controller startup logic
                 */
                function activate() {
                    // if (!userAuthenticationSrv.getUserLoginInfo()) {
                    //     $location.path("/");
                    // }
                    jokesPageSrv.fetchJokesCategories().then(function (response) {
                        $scope.jokes.jokeCategories = response;
                    });
                }

                function loadSelectedJoke(selectedJoke) {
                    $scope.jokes.selectedJoke = selectedJoke ? selectedJoke : 'None';
                    $scope.jokes.searchedJoke = selectedJoke;
                    if (selectedJoke) {
                        callFetchJoke(selectedJoke);
                    }
                }

                function loadSearchedJoke() {
                    $scope.jokes.selectedJoke = 'None';
                    if ($scope.jokes.searchedJoke) {
                        callFetchJoke($scope.jokes.searchedJoke);
                    }
                }

                function callFetchJoke(jokeCategory) {
                    if (jokeCategory) {
                        jokesPageSrv.fetchJokes(jokeCategory).then(function (response) {
                            $scope.jokes.selectedCategoryJokes = response.result;
                        });
                    }
                }

            }]);

})();
