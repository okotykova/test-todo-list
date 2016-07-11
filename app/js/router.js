'use strict';

define([
    'jquery',
    'underscore',
    'backbone',
    'js/views/list',
   // 'views/taskItem',
    'js/views/taskItemDescription'
], function($, _, Backbone, listView, taskView){

    var AppRouter = Backbone.Router.extend({
        routes: {
            'list': 'tasksList',
            'task:ID': 'taskDescription',
            '*path':  'redirectToList'
        },

        redirectToList: function(path) {
            console.log('No route:' + path);
            this.navigate('list', {trigger: true});
        },

        tasksList: function() {
            var tasksList = new listView();
            tasksList.render().makeUI();
        },

        taskDescription: function(ID){
            var tasksDescription = new taskView();
              tasksDescription.render().makeUI();
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