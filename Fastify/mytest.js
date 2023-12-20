const path = require("path");
const fs = require("fs").promises;

const fetchNameSpace = async (lng, ns) => {
  try {
    const filename = `${lng}/${ns}.json`;
    const filePath = path.join(__dirname, "locales", filename);
    const fileContent = await fs.readFile(filePath, "utf-8");
    const jsonData = JSON.parse(fileContent);

    return jsonData;
  } catch (err) {
    // Handle errors (e.g., file not found, parsing error, etc.)
    console.log({ error: "Error reading JSON file" });
  }

  return { lng, ns };
};

exports.fetchNameSpace = fetchNameSpace;

console.log(fetchNameSpace("en", "Menu"));
