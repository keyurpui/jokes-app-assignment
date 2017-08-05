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
                 * fetchs the user payment profile information from upgradeEligibilityPayment api.
                 * @function fetchPaymentDetails
                 * @returns {object} promise object user payment profile information.
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
                
                function fetchJokesCategories () {
                    return $http.get(boilerplateConstants.jokesCategoriesApi).then(function (response) {
                        return response.data;
                    });
                }

                return services;
            }]);
})();
