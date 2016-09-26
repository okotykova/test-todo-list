'use strict';

define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone){
    var taskModel = Backbone.Model.extend({
        defaults: {
            ID: '',
            name: '',
            description: '',
            status: 'undone'
        },

        changeStatus: function () {
            var newStatus = 'done';
            if(this.get('status') == newStatus)
                newStatus = 'undone';
            this.save({
                status: newStatus
            });
        },

        markAsDone: function() {
            this.save({
                status: 'done'
            });
        },

        deleteItem: function () {
            console.log('item to delete');
        }
    });

    return taskModel;
});
