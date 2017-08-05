(function () {
    'use strict';

    angular.module('boilerplate')

        .directive('userAuthDir', [function () {
            return {
                restrict: 'EA',
                templateUrl: '/app/html/userAuthDir.html',
                controller: 'userAuthCrtl'
            };
        }]);
})();