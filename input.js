const { upKey, leftKey, downKey, rightKey,} = require("./constants");
// setup interface to handle user input from stdin

let connection; //   => Stores the active TCP connection object.


const setupInput = (conn) => {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  
  const handleUserInput = function(key) {
    if (key === '\u0003') {
      process.exit();

    } else if (key === upKey) {
      conn.write("Move: up");
    
    } else if (key === leftKey) {
      conn.write("Move: left");

    } else if (key === downKey) {
      conn.write("Move: down");

    } else if (key === rightKey) {
      conn.write("Move: right");

    } //else if (key === heyKey) {

    //   conn.write('SAY: HEY');

    // } else if (key === zzzKey) {
    //   conn.write('SAY: ZZZ');
    // }

  };

  stdin.on("data", handleUserInput);
  return stdin;
    
};

 


module.exports = { setupInput };