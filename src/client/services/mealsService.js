import api from '../helpers/api';

class MealsService {
  getAll() {
      return [
        {
            id: 1,
            name: 'Breakfast'
        },
        {
            id: 2,
            name: 'Lunch'
        },
        {
            id: 3,
            name: 'Dinner'
        }
    ];
    // return api.sendRequest('/api/meals', 'get')
    //   .then(x => x.data);
  }

}

export default new MealsService();
