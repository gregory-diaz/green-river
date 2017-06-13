/* Contains all handlers for Entity A operations 
   - Create
   - List
   - Retrieve
   - Update 
   - Destroy
*/

// Import modules in 
const Todo = require('../models').Todo;
const TodoItem = require('../models').TodoItem

// Expose all handlers for Entity A to rest of API
module.exports = {

  // Create Entity A function
  create(req, res) {
    return Todo
      .create({
        title: req.body.title,
      })
      .then(todo => res.status(201).send(todo))
      .catch(error => res.status(400).send(error));
  },
  // List Entity B's referenced by Entity A
  list(req, res){
    return Todo 
    .findAll({
      include:[{
        model: TodoItem,
        as: 'todoItems'
      }],
    })
    .then(todos=> res.status(200).send(todos))
    .catch(error => res.status(400).send(error));
  },
  // Retrieve an instance of Entity A  
  retrieve(req,res){
    return Todo
      .findById(req.params.todoId,{
        include:[{
          model: TodoItem,
          as: 'todoItems',
        }]
      })
      .then(todo => {
        if (!todo){
          return res.status(404).send({
            message: 'Todo Not Found',
          });
        }
        return res.status(200).send(todo);
      })
      .catch(error => res.status(400).send(error));
  },
  // Update an instance of Entity A
  update(req,res){
    return Todo
      .findById(req.params.todoId, {
        include: [{
          model: TodoItem,
          as: 'todoItems',
        }],
      })
      .then(todo => {
        if(!todo){
          return res.status(404).send({
            message: 'Todo Not Found',
          });
        }
        return todo
        .update({
          title: req.body.title || todo.title,
        })
        .then(() => res.status(200).send(todo))
        .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error))
  },
  //Delete an istance of Entity A
  destroy(req,res){
    return Todo
      .findById(req.params.todoId)
      .then(todo => {
        if(!todo) {
          return res.status(400).send({
            message: 'Todo Not Found',
          });
        }
        return todo
          .destroy()
          .then(() => res.status(200).send({message: 'Todo deleted successfully.'}))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};