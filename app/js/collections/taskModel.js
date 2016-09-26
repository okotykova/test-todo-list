define([
    'jquery',
    'underscore',
    'backbone',
    'storage',
    'app/js/models/taskModel'
], function($, _, Backbone, Storage, taskModel){

    'use strict';

    var tasksCollection = Backbone.Collection.extend({
        model: taskModel,
        localStorage: new Storage('tasksCollection'),
        parse : function(response) {
            return response;
        },
        refreshFromServer: function() {
            return Backbone.ajaxSync('read', this);
        },
        fetch: function(options) {
            if (!localStorage.getItem('tasksCollection')) {
                var self = this;
                $.getJSON( "app/data/taskList.json", (data) => {
                })
                    .done((response) => {
                        $.each(response, function (i, item) {
                            self.create(item);
                        });
                        return this;
                    });
            } else {
                return Backbone.Collection.prototype.fetch.call(this, options);
            }
        }
    });

    return tasksCollection;

});
