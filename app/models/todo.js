var mongoose = require('mongoose');

var TodoSchema =  new mongoose.Schema({
   done: Boolean,
   text : {type : String, required: true}
});

var TodoModel = mongoose.model('Todo', TodoSchema);
module.exports.Todo = TodoModel;
