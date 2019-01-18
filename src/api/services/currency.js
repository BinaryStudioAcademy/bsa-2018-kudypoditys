const Service = require('./generalService');
const currencyRepository = require("../repositories/currencyRepository");
const moment = require("moment");
const fetch = require("node-fetch");

class CurrencyService extends Service {

    async findAll() {

        const currencies = await currencyRepository.findAll();

        const result = currencies.map(async x => {

            if (moment().diff(x.rateLastUpdate , 'hours') >= 24) {

                const res = await fetch(`http://free.currencyconverterapi.com/api/v5/convert?q=USD_${x.code}&compact=y`);
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