import api from "../helpers/api";

class CountryService {
  getAllDetails() {
    return api.sendRequest('/api/country/details', 'get')
      .then(x => x.data);
  }
}

export default new CountryService();
