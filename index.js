var robot = require("robotjs");

function emulateKey() {
  setTimeout(() => {
    robot.keyTap("k");
    emulateKey();
  }, 1);
}

emulateKey();
