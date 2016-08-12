define([
    'jquery',
    'underscore',
    'backbone',
    'storage',
    'app/js/views/list',
    'app/js/views/taskItemDescription',
    'app/js/collections/taskModel'
], function($, _, Backbone, Storage, listView, taskView, taskCollection){

    'use strict';

    var AppRouter = Backbone.Router.extend({
        routes: {
            'list': 'tasksList',
            'task/:ID': 'taskDescription',
            '*path':  'redirectToList'
        },

        redirectToList: function(path) {
            console.log('No route:' + path);
            this.navigate('list', {trigger: true});
        },

        tasksList: function() {
            var tasksList = new listView();
        },

        taskDescription: function(ID){
            var tasksDescription = new taskView({ID : ID});
        }
    });

    var initialize = function () {
        var app_router = new AppRouter;

        if (!Backbone.History.started) {
            // Backbone.history.start({pushState: true, hashChange: false});
            Backbone.history.start();
        }
    };

    return {
        initialize: initialize
    };
});