import api from "../helpers/api";

class RoomTypeService {
  getAll() {
    return api.sendRequest('/api/roomtype', 'get')
      .then(x => x.data);
  }

}

export default new RoomTypeService();
