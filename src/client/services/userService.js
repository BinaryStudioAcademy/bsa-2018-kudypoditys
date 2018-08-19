import api from '../helpers/api';

class UserService {
    getMe() {
        return api.sendRequestWithAuth('/api/users/me', 'get').then(response => response.data);
    }
}

export default new UserService();
