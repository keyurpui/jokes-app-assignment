(function () {
    'use strict';
    angular.module('boilerplate')
        .constant('boilerplateConstants', {
            jokesApi: 'https://api.chucknorris.io/jokes/search',
            jokesCategoriesApi: 'https://api.chucknorris.io/jokes/categories',
            loginJokesApp: 'loginJokesApp',
            none: 'None'
        });
})();