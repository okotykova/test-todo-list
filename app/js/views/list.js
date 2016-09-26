define([
    'jquery',
    'underscore',
    'backbone',
    'app/js/collections/taskModel',
    'app/js/views/taskItem'
], function($, _, Backbone, tasksCollection, taskListItemView){

    "use strict";

    var tasksListView = Backbone.View.extend({
        el: '#page',

        template: _.template($('#tpl-todo-list').html()),

        events: {
            'click .delete-all': 'deleteAllTasks',
            'click .mark-all-done': 'markAllTasksAsDone'
        },

        deleteAllTasks: function(e) {
            _.invoke(this.collection.toArray(), 'destroy');
        },

        markAllTasksAsDone: function(e) {
            var self = this;
            self.collection.each(function(element) {
                element.markAsDone();
            });

        },

        initialize: function(){
            this.collection = new tasksCollection();
            var self = this;
            this.collection.bind('change', this.render, this);
            this.collection.bind('destroy', this.render, this);
            this.collection.fetch({reset: true}).done(function () {
                self.render();
            });
        },

        render: function(){
            var self = this,
                viewItem;
            self.$el.empty().html(this.template());
            self.collection.each(function(element) {
                viewItem = new taskListItemView({model: element});
            });

            return this;
        },

        makeUI: function() {
            console.log('make UI view');
        }
    });

    return tasksListView;

});