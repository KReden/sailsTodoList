/**
 * Todo.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    description:{
      type: 'string',
      required: true
    },
    priority:{
      type: 'text',
      enum: ['high', 'medium', 'low'],
      defaultsTo: 'low'
    },
    completed: {
      type: 'boolean',
      defaultsTo: false
    },
    list: {
      model: 'list',
      required: true
    }
  }
};
