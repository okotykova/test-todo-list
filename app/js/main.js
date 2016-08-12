require.config({
    //baseUrl: '',
    paths: {
        jquery: '../../bower_components/jquery/dist/jquery',
        underscore: '../../bower_components/underscore/underscore',
        backbone: '../../bower_components/backbone/backbone',
        storage: '../../bower_components/backbone.localStorage/backbone.localStorage'
    }
});

require(['../app/js/app'], (App) => {

    'use strict';

    var initialize = function() {
        App.initialize();
    };
    return {
        initialize: initialize()
    };
});