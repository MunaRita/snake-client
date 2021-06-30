const net = require("net");
// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: 50542
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // receive data from the server
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
  
    conn.write('Name: CAC');
    
  });


  return conn;
};

console.log("Connecting  ....");
connect();

module.exports = connect;