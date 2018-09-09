const Repository = require('./generalRepository');

const Currency = require('../models/Currency');

class CurrencyRepository extends Repository {
}

module.exports = new CurrencyRepository(Currency);