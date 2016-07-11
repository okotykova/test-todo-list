require.config({
    //baseUrl: '',
    paths: {
        jquery: 'js/bower_components/jquery/src/jquery',
        underscore: 'js/bower_components/underscore/underscore',
        backbone: 'js/bower_components/backbone/backbone'
    }
    /*,
    shim: {
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone',
            init: function($, _){
                var Backbone = this.Backbone;
                return Backbone;
            }
        }
    }*/
});

require(['js/app'], function(App){
    var initialize = function() {
        App.initialize();
    };
    return {
        initialize: initialize()
    };
});