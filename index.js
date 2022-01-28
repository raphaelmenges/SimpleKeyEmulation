const {keyboard} = require("@nut-tree/nut-js");

async function emulateKey() {
  keyboard.config.autoDelayMs = 1000;
  await keyboard.type("abcäüö🤣");
}

emulateKey();