'use strict';
define([
    'jquery',
    'underscore',
    'backbone',
    'js/models/taskModel'
    //'text!templates/to do-list-item-description.html'
//], function($, _, Backbone, taskModel, taskListItemTemplate) {
], function($, _, Backbone, taskModel) {
    var taskDescriptionView = Backbone.View.extend({
        el: '#page',

       // template: _.template($('#tpl-to-do-list-item-page').html()),

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
            var compiledTemplate = _.template( $('#tpl-todo-list-item-page').html(), { task: this.model } );
            this.$el.html(compiledTemplate);
        },

        render: function(){
            console.log('render view');
            return this;
        },

        makeUI: function() {
            console.log('make UI view');
        }
    });
    return taskDescriptionView;
});