'use strict';
define([
    'jquery',
    'underscore',
    'backbone',
    'app/js/models/taskModel'
], function($, _, Backbone, taskModel) {
    var taskListItemView = Backbone.View.extend({
        el: '#todo-list',

        template: _.template($('#tpl-todo-list-item').html()),

        events: {
            'click .delete-item': 'deleteTask',
            'click .mark-item-done': 'markTaskAsDone'
        },

        deleteTask: function (e) {
            var currentID = $(e.target).closest('li').attr('id');
            if(this.model.get('ID') == currentID) {
                this.model.destroy();
                this.render();
            }

        },

        markTaskAsDone: function (e) {
            var currentID = $(e.target).closest('li').attr('id');
            if(this.model.get('ID') == currentID)
                this.model.changeStatus();
        },

        initialize: function(){

            this.render();
        },

        remove: function() {
            this.render();
        },

        render: function () {
            $(this.el).append(this.template(this.model.toJSON()));
            return this;
        },

        makeUI: function () {
        }
    });
    return taskListItemView;
});

