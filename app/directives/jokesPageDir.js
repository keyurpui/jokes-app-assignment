(function () {
    'use strict';

    angular.module('boilerplate')

        .directive('jokesPageDir', [function () {
            return {
                restrict: 'EA',
                templateUrl: '/app/html/jokesPageDir.html',
                controller: 'jokesCrtl'
            };
        }]);
})();