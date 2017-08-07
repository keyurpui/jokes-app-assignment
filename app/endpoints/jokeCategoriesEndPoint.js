/**
 * Dummy end point used by specs.
 */

var Endpoint_jokesCategories = (function () {
    'use strict';

    return {

        /**
         * Get jokes categories by calling api
         */

        'get_jokes_categories': {
            url_match: 'https://api.chucknorris.io/jokes/categories',
            response_code: 200,
            params_sent: '?',
            result: [
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
            // End result

        }
    }
})();