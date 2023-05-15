const fastify = require('fastify')({ logger: true }); //fastify variable is used ot create routes doesn't have to be called fastify
fastify.register(require('./routes/items')); //can register routes same way you would a plug in

const start = async () => {
  //fastify.listen returns a promise
  try {
    await fastify.listen({ port: 3000 });
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
