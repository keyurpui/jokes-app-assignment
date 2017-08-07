describe('boilerplateConstants factory', function () {
    var service;
    
    beforeEach(function () {
        angular.mock.module('boilerplate');
        inject(function ($injector) {
            service = $injector.get('boilerplateConstants');
        });
    });

    it('Should check the constant values to be defined', function () {
        expect(service.jokesApi).toBeDefined();
        expect(service.jokesCategoriesApi).toBeDefined();
        expect(service.loginJokesApp).toBeDefined();
        expect(service.none).toBeDefined();
    });
});
