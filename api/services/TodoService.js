module.exports = {
  getTodos: function(next) {
    Todo.find().exec(function(err, todos) {
      if(err) throw err;
      next(todos);
    });
  },
  addTodo: function(todo, next) {
    Todo.create({description: todo.description, list: todo.list, priority: todo.priority}).exec(function(err, todo) {
      if(err) throw err;
      next(todo);
    });
  },
  toggleTodo: function(todo, next) {
    Todo.update({id: todo.id}, {completed: todo.completed}).exec(function(err, todo) {
      if(err) throw err;
      next(todo);
    });
  }
};
