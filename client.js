const net = require("net");
const { IP, PORT, NAME, ENCODING } = require("./constants");

// establishes a connection with the game server
const session = function () {
  const sessionObject = net.createConnection({
    host: IP, // used the ipv6 loopback address as it was fastest to type.
    port: PORT// port found in the server directory constants file.
  });

  // interpret incoming data as text
  sessionObject.setEncoding(ENCODING);

  sessionObject.on("connect", () => {
    sessionObject.write(NAME)
  })

  sessionObject.on("data", (data) => {
    console.log(`server says: ${data}`)
  });

  return sessionObject;
};

module.exports = { session };