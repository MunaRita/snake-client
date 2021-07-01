const net = require("net");
// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: 50542
  });

  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
  });

  conn.on('connect',() => {
    conn.write('Name: CAC');

    // conn.write("Move: left");
    // setInterval(() => {
    //   conn.write("Move: left");
    //  }, 100);

        
  });

  return conn;
};
 

console.log("Connecting  ....");
connect();

module.exports = connect;