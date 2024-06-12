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
    case 'q':
      connection.write("Say: Two Arms!!!");
      break;
    case 'e':
      connection.write("Say: Retreat!!!");
      break;
    case '\u0003':
      process.exit();
      break;
  }
};

module.exports = { setupInput };