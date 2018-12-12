import api from '../helpers/api';
import { CURRENCY_CONVERTER_API } from "client/helpers/config";

class CurrencyService {
  getAll() {
    return api.sendRequest('/api/currency', 'get').then(x => x.data);
  }
  getCurrencyConvertedValue() {
    const exchangeId = `UAH_USD`;
    return api
      .sendRequest(`${CURRENCY_CONVERTER_API}/api/v6/convert?q=${exchangeId}`, 'get')
      .then(({ data }) => data.results[exchangeId].val);
  }
}

export default new CurrencyService();
