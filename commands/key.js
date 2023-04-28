const KeyManager = require("../lib/KeyManager");
const inquirer = require("inquirer");
const colors = require("colors");
const { isRequired } = require("../utils/validation");
const key = {
  async set() {
    const keyManager = new KeyManager();
    const input = await inquirer.prompt([
      {
        type: "input",
        name: "key",
        message: "Enter API Key".green + " https://coinmarketcap.com/api/",
        validate: isRequired,
      },
    ]);
    const key = keyManager.setKey(input.key);
    if (key) {
      console.log("API Key set".blue);
    }
  },
  show() {
    try {
      const keyManager = new KeyManager();
      const key = keyManager.getKey();

      console.log("Current API key :", key.yellow);
      return key;
    } catch (err) {
      console.log(err.message.red);
    }
  },
  remove() {
    try {
      const keyManager = new KeyManager();
      keyManager.deleteKey();
      console.log("Key Removed".blue);
      return;
    } catch (err) {
      console.log(err.message.red);
    }
  },
};

module.exports = key;
