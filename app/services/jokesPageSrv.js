(function () {
    'use strict';

    angular.module('boilerplate')

        .factory('jokesPageSrv', ['$http', 'boilerplateConstants',
            function ($http, boilerplateConstants) {
                var services = {
                    fetchJokes: fetchJokes,
                    fetchJokesCategories: fetchJokesCategories
                };
                function fetchJokes (selectedJoke) {
                    return $http.get(boilerplateConstants.jokesApi, {
                        params: {
                            query: selectedJoke
                        }
                    }).then(function (response) {
                        return response.data;
                    });
                }
                
                function fetchJokesCategories () {
                    return $http.get(boilerplateConstants.jokesCategoriesApi).then(function (response) {
                        return response.data;
                    });
                }

                return services;
            }]);
})();
