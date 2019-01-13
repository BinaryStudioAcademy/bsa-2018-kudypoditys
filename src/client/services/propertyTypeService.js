import api from "../helpers/api";

class PropertyTypeService {
  getAll() {
    return api.sendRequest('/api/propertytype/', 'get')
      .then(x => x.data);
  }
}

export default new PropertyTypeService();
