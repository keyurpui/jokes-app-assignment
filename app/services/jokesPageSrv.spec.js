describe('jokesPageSrv factory', function () {
    var $httpBackend, service;

    beforeEach(angular.mock.module('boilerplate'));

    beforeEach(function () {
        inject(function ($injector) {
            $httpBackend = $injector.get('$httpBackend');
            service = $injector.get('jokesPageSrv');
        });
    });

    describe('fetchJokesCategories function of the jokesPageSrv', function () {
        it('should get jokes categories calling endpoint of jokesCategoriesApi', function () {
            $httpBackend.whenGET(Endpoint_jokesCategories.get_jokes_categories.url_match).respond(200, Endpoint_jokesCategories.get_jokes_categories.result);
            service.fetchJokesCategories().then(function (result) {
                expect(result).toBeDefined();
                expect(result[2]).toEqual('movie');
            });
            $httpBackend.flush();
        });
    });

    describe('fetchJokes function of the jokesPageSrv', function () {
        it('should get jokes values by calling endpoint of jokesApi', function () {
            $httpBackend.whenGET(Endpoint_jokesApi.get_jokes.url_match).respond(200, Endpoint_jokesApi.get_jokes.result);
            service.fetchJokes().then(function (result) {
                expect(result).toBeDefined();
                expect(result.result[0]).toBeDefined();
                expect(result.result[0].icon_url).toEqual('https://assets.chucknorris.host/img/avatar/chuck-norris.png');
                expect(result.result[0].id).toEqual('MOEugqJ4T4KirtQulG-Nhg');
            });
            $httpBackend.flush();
        });
    });

});
