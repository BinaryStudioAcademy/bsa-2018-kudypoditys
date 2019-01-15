import api from '../helpers/api';

class MealInRoomService {

    getAll() {
        return api.sendRequest('/api/mealsInRoom', 'get')
            .then(x => x.data);
    }

    create(data) {
        return api.sendRequest('/api/mealsInRoom', 'post', data)
            .then(x => x.data);
    }

    update(data){
        return api.sendRequest('/api/mealsInRoom', 'put', data)
            .then(x => x.data);
    }
}

export default new MealInRoomService();