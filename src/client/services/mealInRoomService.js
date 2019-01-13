import api from "../helpers/api";

class MealInRoomService {
  getAll() {
    return api.sendRequest('/api/mealsInRoom', 'get')
      .then(x => x.data);
  }

  create(data) {
    return api.sendRequest('/api/mealsInRoom', 'post',data)
        .then(x => x.data);
  }
}

export default new MealInRoomService();
