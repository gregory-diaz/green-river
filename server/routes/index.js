// Import javascript modules
const todosController = require('../controllers').todos;
const todoItemsController = require('../controllers').todoItems;

// Module.exports is the object that's actually returned as the result of a require call.
module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the Todos API',
    }));
    
    // Entity A handlers
    app.post('/api/todos', todosController.create); // Create an entry for Entity A 
    app.get('/api/todos', todosController.list); // Enumerate all Entity A's in the database   
    app.get('/api/todos/:todoId', todosController.retrieve); // Retrieve all of Entity A's data
    app.put('/api/todos/:todoId', todosController.update); // Update an instance of Entity A
    app.delete('/api/todos/:todoId', todosController.destroy); // Delete an instance of Entity A from the database

    //Entity B handlers
    app.post('/api/todos/:todoId/items', todoItemsController.create); // Create an entry for Entity B
    app.put('/api/todos/:todoId/items/:todoItemId', todoItemsController.update); // Update Entity B record
    app.delete('/api/todos/:todoId/items/:todoItemId', todoItemsController.destroy); // Delete Entity B record

    // For any other request method on todo items, we're going to return "Method Not Allowed"
    app.all('/api/todos/:todoId/items', (req, res) =>
        res.status(405).send({
            message: 'Method Not Allowed',
        }));

};