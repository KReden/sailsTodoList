module.exports = {
  getLists: function(next) {
    List.find().populate('todos').exec(function(err, lists) {
      if(err) throw err;
      next(lists);
    });
  },
  addList: function(list, next) {
    List.create({description: list.description, list: list.list, priority: list.priority}).exec(function(err, list) {
      if(err) throw err;
      next(list);
    });
  },
  toggleList: function(list, next) {
    List.update({id: list.id}, {completed: list.completed}).exec(function(err, list) {
      if(err) throw err;
      next(list);
    });
  }
};
