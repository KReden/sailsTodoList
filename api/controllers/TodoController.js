/**
 * TodoController
 *
 * @description :: Server-side logic for managing todoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getTodos: function(req, res) {
    TodoService.getTodos(function(todos) {
      res.json(todos);
    });
  },
  addTodo: function(req, res) {
    console.log(req.body)
    var todo = (req.body) ? req.body : undefined
    if(todo){
      TodoService.addTodo(todo, function(success) {
        res.json(success);
      });
    }else{
      res.send('Bad Request!');
    }
  },
  removeTodo: function(req, res) {
   var todoVal = (req.body.value) ? req.body.value : undefined
    TodoService.removeTodo(todoVal, function(success) {
      res.json(success);
    });
  }
};
