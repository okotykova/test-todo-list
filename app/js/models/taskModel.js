'use strict';

define([
    'underscore',
    'backbone'
], function(_, Backbone){
    var taskModel = Backbone.Model.extend({
        defaults: {
            name: '',
            description: '',
            status: 'undone'
        },
        changeStatus: function () {
            if(this.status === 'done')
                this.status = 'undone';
            else
                this.status = 'done';
        },
        deleteItem: function () {
            console.log('item to delete');
        }
    });

    return taskModel;
});
