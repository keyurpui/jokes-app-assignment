describe('jokesCrtl controller', function () {

    var controller, scope, $rootScope, getJokes, getJokesCategories, jokesPageSrv;

    getJokes = {
        "total": 3,
        "result": [
            {
                "category": null,
                "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
                "id": "MOEugqJ4T4KirtQulG-Nhg",
                "url": "http://api.chucknorris.io/jokes/MOEugqJ4T4KirtQulG-Nhg",
                "value": "Celebrities die in threes because for Chuck Norris, killing one celebrity is never enough."
            },
            {
                "category": null,
                "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
                "id": "mCZSvjsVTyaJHjfAooZwSQ",
                "url": "http://api.chucknorris.io/jokes/mCZSvjsVTyaJHjfAooZwSQ",
                "value": "Chuck Norris won on a special celebrity episode of America's Got Talent by playing \"In-A-Gadda-Da-Vida\" with a pair of cymbals."
            },
            {
                "category": null,
                "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
                "id": "lhNnigJgTDOdqxnvAFYjPQ",
                "url": "http://api.chucknorris.io/jokes/lhNnigJgTDOdqxnvAFYjPQ",
                "value": "Chuck Norris recently won the celebrity 'Dancing with the Stars' TV competition with his rendition of a Rottweiler dragging is ass across the carpet."
            }
        ]
    };

    getJokesCategories = [
        "explicit",
        "dev",
        "movie",
        "food",
        "celebrity",
        "science",
        "political",
        "sport",
        "religion",
        "animal",
        "music",
        "history",
        "travel",
        "career",
        "money",
        "fashion"
    ]

    beforeEach(function () {
        angular.mock.module('boilerplate');
        inject(function ($injector) {
            controller = $injector.get('$controller');
            $rootScope = $injector.get('$rootScope');
            scope = $rootScope.$new();

            jokesPageSrv = jasmine.createSpyObj('jokesPageSrv', ['fetchJokes', 'fetchJokesCategories']);
            jokesPageSrv.fetchJokes.and.returnValue({
                'then': function (callback) {
                    callback(getJokes);
                }
            });
            jokesPageSrv.fetchJokesCategories.and.returnValue({
                'then': function (callback) {
                    callback(getJokes);
                }
            });


            // Instantiates controller
            controller('jokesCrtl', {
                $scope: scope,
                jokesPageSrv: jokesPageSrv
            });
        });

        $rootScope.$digest();
    });

    describe('Basic functionality', function () {
        it('should check scope are defined after ajax call', function () {
            expect(scope.jokes).toBeDefined();
            expect(scope.jokes.jokeCategories).toBeDefined();
        });
    });
    
    describe('Should check scope functions of jokesCrtl', function () {
        it('should check loadSelectedJoke function', function () {
            expect(scope.jokes.selectedJoke).toEqual('None');
            var selectedJoke = 'movies';
            scope.loadSelectedJoke(selectedJoke);
            expect(scope.jokes.selectedJoke).toEqual('movies');
            expect(scope.jokes.searchedJoke).toEqual('movies');
            expect(jokesPageSrv.fetchJokes).toHaveBeenCalledWith('movies');
        });

        it('should check loadSearchedJoke function', function () {
            scope.jokes.searchedJoke = 'dev';
            scope.loadSearchedJoke();
            expect(scope.jokes.selectedJoke).toEqual('None');
            expect(jokesPageSrv.fetchJokes).toHaveBeenCalledWith('dev');
        });
    });
});
