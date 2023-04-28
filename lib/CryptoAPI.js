const axios = require("axios");
class CryptoAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseURL = "rest.coinapi.io/v1/exchangerate";
  }
  async getData(coinOption, curOption) {
    try {
      const res = await axios.get(
        `${this.baseURL}/${coinOption}/${curOption}`,
        {
          headers: {
            "X-CoinAPI-Key": `${this.apiKey}`,
          },
        }
      );
      return res;
    } catch (err) {
      console.log(err);
    }
  }
}
module.exports = CryptoAPI;
