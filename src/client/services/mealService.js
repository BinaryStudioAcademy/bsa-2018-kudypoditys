import api from "../helpers/api";

class MealService {
  getAll() {
    //   return [
    //     {
    //         id: 1,
    //         name: 'Breakfast'
    //     },
    //     {
    //         id: 2,
    //         name: 'Lunch'
    //     },
    //     {
    //         id: 3,
    //         name: 'Dinner'
    //     }
    // ];
    return api.sendRequest('/api/meals', 'get')
      .then(x => x.data);
  }

}

export default new MealService();
