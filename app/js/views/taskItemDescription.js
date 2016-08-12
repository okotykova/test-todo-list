'use strict';
define([
    'jquery',
    'underscore',
    'backbone',
    'app/js/collections/taskModel',
    'app/js/models/taskModel'
//], function($, _, Backbone, taskModel, taskListItemTemplate) {
], function($, _, Backbone, tasksCollection, taskModel) {
    var taskDescriptionView = Backbone.View.extend({
        el: '#page',

        template: _.template($('#tpl-todo-list-item-page').html()),

        events: {
           // 'click .delete-item': 'deleteTask',
            'click .mark-item-done': 'markTaskAsDone'
        },

        deleteTask: function (e) {

        },

        markTaskAsDone: function (e) {
            this.model.markAsDone();
        },

        initialize: function(options){
            this.collection = new tasksCollection();
            var self = this;
            var ID = options.ID;
            this.collection.bind('change', this.render, this);
            this.collection.fetch({reset: true}).done(function () {
               self.collection.each(function(element) {
                   if(element.get('ID') == ID) {
                       self.model = element;
                   }
               });
               self.render();
           });
        },

        render: function(){
            var model = this.model.toJSON();
            $(this.el).html(this.template({task: this.model}));
            return this;
        },

        makeUI: function() {
            console.log('make UI view');
        }
    });
    return taskDescriptionView;
});