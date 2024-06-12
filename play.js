const { session } = require("./client.js");
console.log(`Connecting`)
// console.log(`Connecting to ${connectionHost}:${connectionPort}}`);

// setup interface to handle user input from stdin
let connection;

const setupInput = function (session) {
  connection = session
  const stdin = process.stdin;
  stdin.setRawMode(true); 
  stdin.setEncoding("utf8"); 
  stdin.resume(); 
  stdin.on("data", handleUserInput); 
  return stdin;
};

const handleUserInput = function (key) {
  // code handling the key press will go here
  if(key === "w") {
    connection.write("Move: up");
  }
  if(key === "s") {
    connection.write("Move: down");
  }
  if(key === "a") {
    connection.write("Move: left");
  }
  if(key === "d") {
    connection.write("Move: right");
  }
  if(key === "\u0003") {
    process.exit();
  }
};

setupInput(session());