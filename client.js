const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    
    host: IP,
    port: PORT
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
    //conn.write('Say: HEY');

    // conn.write("Move: left");
    // setInterval(() => {
    //   conn.write("Move: left");
    //  }, 100);

        
  });

  return conn;
};
 

module.exports = { connect };