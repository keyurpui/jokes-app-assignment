describe('userAuthCrtl controller', function () {

    var controller, scope, $rootScope, getJokesCategories, $location;
    
    beforeEach(function () {
        angular.mock.module('boilerplate');
        inject(function ($injector) {
            controller = $injector.get('$controller');
            $rootScope = $injector.get('$rootScope');
            $location = $injector.get('$location');
            scope = $rootScope.$new();
            spyOn($location, 'path');
            // Instantiates controller
            controller('userAuthCrtl', {
                $scope: scope
            });
        });

        $rootScope.$digest();
    });

    describe('Basic functionality', function () {
        it('should check login function positive scenario', function () {
            scope.loginForm = {
                $valid : true
            }
            scope.login(scope.loginForm );
            expect($location.path).toHaveBeenCalledWith('/jokesPage');
        });
        it('should check login function nagative scenario', function () {
            scope.loginForm = {
                $valid : false
            }
            scope.login(scope.loginForm );
            expect($location.path).not.toHaveBeenCalled();
        });
    });
});
