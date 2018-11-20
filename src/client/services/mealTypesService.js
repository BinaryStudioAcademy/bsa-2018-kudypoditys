import api from '../helpers/api';

class MealTypesService {
  getAll() {
      return [
        {
            id: 1,
            name: 'Ordinary'
        },
        {
            id: 2,
            name: 'Continental'
        },
        {
            id: 3,
            name: 'Exclusive'
        }
    ];
    // return api.sendRequest('/api/mealtypes', 'get')
    //   .then(x => x.data);
  }

}

export default new MealTypesService();