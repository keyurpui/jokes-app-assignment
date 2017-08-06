var Endpoint_jokesApi = (function () {
    'use strict';

    return {

        /**
         * Get jokes categories by calling api
         */

        'get_jokes': {
            url_match: 'https://api.chucknorris.io/jokes/search',
            response_code: 200,
            params_sent: '?query=celebrity',
            result: {
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
            }// End result

        }
    }
})();