const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '::1', // used the ipv6 loopback address as it was fastest to type.
    port: '50541' // port found in the server directory constants file.
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log(`server says: ${data}`)
  });

  return conn;
};

module.exports = connect;