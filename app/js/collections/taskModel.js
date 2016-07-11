'use strict';

define([
    'underscore',
    'backbone',
    'js/models/taskModel'
], function(_, Backbone, taskModel){
    var tasksCollection = Backbone.Collection.extend({
        model: taskModel,
        url: '../data/taskList.json'
    });

    return tasksCollection;
});
