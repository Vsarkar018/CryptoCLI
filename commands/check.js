const KeyManager = require("../lib/KeyManager");
const CryptoAPI = require("../lib/CryptoAPI");
const colors = require("colors");
const check = {
  async price(cmd) {
    try {
      const keyManager = new KeyManager();
      const key = keyManager.getKey();
      const api = new CryptoAPI(key);
      const res = await api.getData(cmd.coin, cmd.cur);
      console.log(
        `Coin: ${res.asset_id_base.yellow} | Price: ${String(res.rate).green} ${res.asset_id_quote.green}`
      );
    } catch (error) {
      console.log(error.message.red);
    }
  },
};
module.exports = check;
