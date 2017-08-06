describe('Users factory', function () {
    var service;
    
    beforeEach(angular.mock.module('boilerplate'));

    beforeEach(function () {
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
