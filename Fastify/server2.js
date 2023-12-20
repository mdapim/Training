const fastify = require("fastify")({ logger: false });
const cors = require("fastify-cors");
const sensible = require("fastify-sensible");
const fs = require("fs").promises;
const path = require("path");
fastify.register(cors, {
  origin: "http://localhost:3001",
});

const fetchNameSpace = async (lng, ns) => {
  try {
    const filename = `${lng}/${ns}.json`;
    const filePath = path.join(__dirname, "locales", filename);
    console.info("is this working", filePath);
    const fileContent = await fs.readFile(filePath, "utf-8");
    const jsonData = JSON.parse(fileContent);
    return jsonData;
  } catch (err) {
    console.log({ error: "Error reading JSON file" });
  }

  return { lng, ns };
};

fastify.get("/locales/:lng/:ns", async (request, reply) => {
  const { lng, ns } = request.params;
  reply.send(await fetchNameSpace(lng, ns));
});

const start = async () => {
  try {
    await fastify.listen(3000);
    console.info("Server started on port 3000");
  } catch (err) {
    console.error("Error starting server:", err);
    process.exit(1);
  }
};

start();
