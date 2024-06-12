const net = require("net");

// establishes a connection with the game server
const session = function () {
  const sessionObject = net.createConnection({
    host: 'localhost', // used the ipv6 loopback address as it was fastest to type.
    port: '50541' // port found in the server directory constants file.
  });

  // interpret incoming data as text
  sessionObject.setEncoding("utf8");

  sessionObject.on("data", (data) => {
    console.log(`server says: ${data}`)
  });
  sessionObject.on("connect", () => {
    sessionObject.write("Name: SDP")
  })

  return sessionObject;
};

// const connectionHost = connect.conn.host;
// const connectionPort = connect.conn.port;

// console.log(connect.conn.port);

module.exports = { session };