(function () {
    'use strict';

    angular.module('boilerplate')

        .controller('jokesCrtl', ['$scope', 'jokesPageSrv', 'boilerplateConstants',
            function ($scope, jokesPageSrv, boilerplateConstants) {
                $scope.jokes = {};
                $scope.jokes.selectedJoke = boilerplateConstants.none;
                $scope.jokes.searchedJoke = '';

                $scope.loadSelectedJoke = loadSelectedJoke;
                $scope.loadSearchedJoke = loadSearchedJoke;
                activate();
                /**
                 * Controller startup logic
                 */
                function activate() {
                    jokesPageSrv.fetchJokesCategories().then(function (response) {
                        $scope.jokes.jokeCategories = response;
                    });
                }

                function loadSelectedJoke(selectedJoke) {
                    $scope.jokes.selectedJoke = selectedJoke ? selectedJoke : boilerplateConstants.none;
                    $scope.jokes.searchedJoke = selectedJoke;
                    if (selectedJoke) {
                        callFetchJoke(selectedJoke);
                    }
                }

                function loadSearchedJoke() {
                    $scope.jokes.selectedJoke = boilerplateConstants.none;
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
