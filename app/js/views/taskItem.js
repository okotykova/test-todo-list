'use strict';
define([
    'jquery',
    'underscore',
    'backbone' //,
    //'text!templates/todo-list-item.html'
//], function($, _, Backbone, taskModel, taskListItemTemplate) {
], function($, _, Backbone, taskModel) {
    var taskListItemView = Backbone.View.extend({
        el: '#todo-list',

        template: _.template($('#tpl-todo-list-item').html()),

        events: {
            'click .delete-item': 'deleteTask',
            'click .mark-item-done': 'markTaskAsDone'
        },

        deleteTask: function (e) {
        },

        markTaskAsDone: function (e) {
        },

        initialize: function(){
            this.model = new taskModel();
            this.$el.html(this.template(this.model.toJSON()));
            //var compiledTemplate = _.template( taskListItemTemplate, { tasks: this.model } );
            //this.$el.html(compiledTemplate);
        },

        render: function () {

           /* this.$el.html(this.template(this.model.toJSON()));
            return this;*/
        },

        makeUI: function () {
        }
    });
});

