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
                
                /**
                 * Loads selected category jokes, selection done by dropdown.
                 * @function loadSelectedJoke
                 * @param {String} selectedJoke jokes category
                 */
                function loadSelectedJoke (selectedJoke) {
                    $scope.jokes.selectedJoke = selectedJoke ? selectedJoke : boilerplateConstants.none;
                    $scope.jokes.searchedJoke = selectedJoke;
                    if (selectedJoke) {
                        callFetchJoke(selectedJoke);
                    }
                }

                /**
                 * Loads searched category jokes, searching done by inputbox.
                 * @function loadSearchedJoke
                 */
                function loadSearchedJoke () {
                    $scope.jokes.selectedJoke = boilerplateConstants.none;
                    if ($scope.jokes.searchedJoke) {
                        callFetchJoke($scope.jokes.searchedJoke);
                    }
                }

                /**
                 * Gets jokes by calling fetchJokes function of jokesPageSrv.
                 * @param {String} jokeCategory selected joke category
                 */
                function callFetchJoke(jokeCategory) {
                    if (jokeCategory) {
                        jokesPageSrv.fetchJokes(jokeCategory).then(function (response) {
                            $scope.jokes.selectedCategoryJokes = response.result;
                        });
                    }
                }

            }]);

})();
