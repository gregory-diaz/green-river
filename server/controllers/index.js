/* Next, we create an index.js file inside server/controllers,
   where we're going to be exporting our controllers from.
   I find this helpful since it helps me consolidate my imports
   (require statements) from once central place. */

// Not sure what this file is for
const todos = require('./todo');
const todoItems = require('./todoItems');

module.exports = {
    todos,
    todoItems,
};