const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
//TodofindByIdAndRemove
// Todo.findOneAndRemove({}).then((todo) => {
//
// });

Todo.findByIdAndRemove('5afd100c3c98f90ee8c6ce8b').then((todo) => {
  console.log(todo);
})
