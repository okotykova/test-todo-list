define(['jquery',
        'underscore',
        'backbone',
        'storage',
        'app/js/router'
], function($, _, Backbone, Storage, Router){

    'use strict';

    var initialize = function(){
        Router.initialize();
    };

    return {
        initialize: initialize
    };
});