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
  switch (key) {
    case 'w':
      connection.write("Move: up");
      break;
    case 's':
      connection.write("Move: down");
      break;
    case 'a':
      connection.write("Move: left");
      break;
    case 'd':
      connection.write("Move: right");
      break;
    case '\u0003':
      process.exit();
      break;
  }
};

setupInput(session());