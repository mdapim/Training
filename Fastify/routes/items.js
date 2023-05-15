const items = require('../items');
const {
  getItems,
  getItem,
  addItem,
  deleteItem,
  updateItem,
} = require('../controllers/itemsController');
//Options for get all items (format the return for the replies)
//add ops as a second argument to specify the schema can validate data
//used for limiting data sent or specifying type

// Item schema
const Item = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
  },
};
// Options get all items
const getItemsOpts = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: {
          Item,
        },
      },
    },
  },
  //create a handler to handle the request as well rather than have it in the function below
  handler: getItems,
};

// Option to get an item
const getItemOpts = {
  schema: {
    response: {
      200: Item,
    },
  },
  handler: getItem,
};

const postItemOpts = {
  schema: {
    body: {
      //can specify input for body ensure its required
      type: 'object',
      required: ['name'],
      properties: {
        name: { type: 'string' },
      },
    },
    response: {
      201: Item,
    },
  },
  handler: addItem,
};

const deleteItemOpts = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          message: { type: 'string' },
        },
      },
    },
  },
  handler: deleteItem,
};

const updateItemOpts = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          item: Item,
          message: { type: 'string' },
        },
      },
    },
  },
  handler: updateItem,
};

// Create a function to treat the routes as a plug in
function itemRoutes(fastify, options, done) {
  fastify.get('/items', getItemsOpts);

  fastify.get('/items/:id', getItemOpts);

  fastify.post('/items', postItemOpts);

  fastify.delete('/items/:id', deleteItemOpts);

  fastify.patch('/items/:id', updateItemOpts);

  done();
}

module.exports = itemRoutes;
