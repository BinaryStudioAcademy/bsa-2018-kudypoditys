import api from "../helpers/api";

class FacilityService {
  getAll() {
    return api.sendRequest('/api/facility/', 'get')
      .then(x => x.data);
  }
}

export default new FacilityService();
