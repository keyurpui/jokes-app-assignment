(function () {
    'use strict';

    angular.module('boilerplate')

        .factory('jokesPageSrv', ['$http', 'boilerplateConstants',
            function ($http, boilerplateConstants) {
                var services = {
                    fetchJokes: fetchJokes,
                    fetchJokesCategories: fetchJokesCategories
                };

                /**
                 * fetchs the jokes information from jokesApi api.
                 * @function fetchJokes
                 * @returns {object} promise object jokes information.
                 */
                function fetchJokes (selectedJoke) {
                    return $http.get(boilerplateConstants.jokesApi, {
                        params: {
                            query: selectedJoke
                        }
                    }).then(function (response) {
                        return response.data;
                    });
                }

                /**
                 * fetchs the jokes categories from jokesCategoriesApi api.
                 * @function fetchJokesCategories
                 * @returns {object} promise object jokes categories.
                 */
                function fetchJokesCategories () {
                    return $http.get(boilerplateConstants.jokesCategoriesApi).then(function (response) {
                        return response.data;
                    });
                }

                return services;

            }]);
})();
