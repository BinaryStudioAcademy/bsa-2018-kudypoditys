import api from "../helpers/api";

class CurrencyService {
  getAll() {
    return api.sendRequest('/api/currency', 'get').then(x => x.data);
  }
}

export default new CurrencyService();
