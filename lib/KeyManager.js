const Configstore = require("configstore");
const pkg = require("../package.json");
class keyManager {
  constructor() {
    this.conf = new Configstore(pkg.name);
  }
  setKey(key) {
    this.conf.set("apikey", key);
    return key;
  }
  getKey() {
    const key = this.conf.get("apikey");
    if (!key) {
      throw new Error(
        "No API Key Found -- Get a key at https://coinmarketcap.com/api/"
      );
    }
    return key;
  }
  deleteKey() {
    const key = this.conf.get("apikey");
    if (!key) {
      throw new Error(
        "No API Key Found -- Get a key at https://coinmarketcap.com/api/"
      );
    }
    this.conf.delete("apikey");
    return;
  }
}
module.exports = keyManager;
