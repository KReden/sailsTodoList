/**
 * ListController
 *
 * @description :: Server-side logic for managing lists
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  getLists: function(req, res) {
    ListService.getLists(function(lists) {
      res.json(lists);
    });
  },
  addList: function(req, res) {
    console.log(req.body)
    var list = (req.body) ? req.body : undefined
    if(list){
      ListService.addList(list, function(success) {
        res.json(success);
      });
    }else{
      res.send('Bad Request!');
    }
  },
  toggleList: function(req, res) {
    console.log(req.body)
   var list = (req.body) ? req.body : undefined
   if(list){
     ListService.toggleList(list, function(success) {
       res.json(success);
     });
   }else{
     res.send('Bad Request!');
   }
  }
};
