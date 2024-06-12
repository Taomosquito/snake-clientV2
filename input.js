const { MOVE_KEY_UP, MOVE_KEY_DOWN, MOVE_KEY_LEFT, MOVE_KEY_RIGHT, firstMessage, secondMessage, control_C } = require("./constants");

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
    case MOVE_KEY_UP:
      connection.write("Move: up");
      break;
    case MOVE_KEY_DOWN:
      connection.write("Move: down");
      break;
    case MOVE_KEY_LEFT:
      connection.write("Move: left");
      break;
    case MOVE_KEY_RIGHT:
      connection.write("Move: right");
      break;
    case firstMessage:
      connection.write("Say: Two Arms!!!");
      break;
    case secondMessage:
      connection.write("Say: Retreat!!!");
      break;
    case control_C:
      process.exit();
      break;
  }
};

module.exports = { setupInput };