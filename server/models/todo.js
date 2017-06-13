// Enity A Model (attributes)

// Expose Todo object to the rest of the API
module.exports = function(sequelize, DataTypes) {

  const Todo = sequelize.define('Todo', {

    // DB attributes
    title: {
      type: DataTypes.STRING,
      // Cannot write to db 
      allowNull: false,
    },
  }, 
  {
    classMethods: {
      // Define the relationship between Entity A and it's Entity B 
      associate: (models) => {
        /* 
           The as: 'todoItems means that every time we query for a todo and include it's todo items,
           they'll be included under the key todoItems instead of TodoItems
        */
        Todo.hasMany(models.TodoItem, {
          foreignKey: 'todoId',
          as: 'todoItems',
        });
      },
    },
  });
  return Todo;
};