'use strict';

define([
    'jquery',
    'underscore',
    'backbone',
    'js/collections/taskModel'
    //'text!templates/t-odo-list.html'
//], function($, _, Backbone, tasksCollection, taskListTemplate){
], function($, _, Backbone, tasksCollection){
    var tasksListView = Backbone.View.extend({
        el: '#page',

       // template: _.template($('#tpl-to-do-list').html()),

        events: {
            'click .delete-all': 'deleteAllTasks',
            'click .mark-all-done': 'markAllTasksAsDone'
        },

        deleteAllTasks: function(e) {
        },

        markAllTasksAsDone: function(e) {
        },

        initialize: function(){
            this.collection = new tasksCollection();
            var tasks = this.collection.models;
            var compiledTemplate = _.template( $('#tpl-todo-list').html(), { tasks: tasks } );
            this.$el.html(compiledTemplate);
            console.log('tasks '+JSON.stringify(tasks));
            tasks.forEach(function(element){
                var view = new taskModel({model: element, template: '#tpl-todo-list-item'});
                this.$('#todo-list').append(view.render().el);
            });
        },

        render: function(){
            console.log('render view');
            return this;
        },

        makeUI: function() {
            console.log('make UI view');
        }
    });

    return tasksListView;
});