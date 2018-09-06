import api from '../helpers/api';

class LanguageService {
  getAll() {
    return api.sendRequest('/api/language/', 'get')
      .then(x => x.data);
  }
}

export default new LanguageService();
