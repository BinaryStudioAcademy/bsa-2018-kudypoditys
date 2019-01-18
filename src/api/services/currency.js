const Service = require('./generalService');
const currencyRepository = require("../repositories/currencyRepository");
const moment = require("moment");
const api = require("../helpers/api");

class CurrencyService extends Service {

    async findAll() {

        const currencies = await currencyRepository.findAll();

        const result = currencies.map(async x => {

            if (moment().diff(x.rateLastUpdate , 'hours') >= 24) {

                const res = await api.sendRequestToApi(`${process.env.CURRENCY_API}?q=USD_${x.code}&compact=y`);

                const rate = (await res.json())[`USD_${x.code}`]["val"];

                await x.update({ rateLastUpdate : moment().format(), rate : rate});

                return Object.assign(x, { rateLastUpdate : moment().format(), rate : rate});
            }

            return x;
        })

        const results = await Promise.all(result)

        return results;
    }
}

module.exports = new CurrencyService(currencyRepository);