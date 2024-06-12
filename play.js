const { session } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
const connection = session();
setupInput(connection);
