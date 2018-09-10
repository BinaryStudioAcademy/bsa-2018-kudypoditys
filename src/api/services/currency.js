const Service = require('./generalService');
const currencyRepository = require("../repositories/currencyRepository");

class CurrencyService extends Service {
}

module.exports = new CurrencyService(currencyRepository);