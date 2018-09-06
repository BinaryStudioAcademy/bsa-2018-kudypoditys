import api from '../helpers/api';

class BedTypeService {
  getAll() {
    return api.sendRequest('/api/bedtype', 'get')
      .then(x => x.data);
  }

}

export default new BedTypeService();
