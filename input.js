// setup interface to handle user input from stdin
const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function(key) {
    if (key === '\u0003') {
      process.exit();
    }
    // else if( key === 'a') {
    //   conn.write("Move: left")
    // }
  };

  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = setupInput;