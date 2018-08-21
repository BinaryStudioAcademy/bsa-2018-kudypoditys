import api from "../helpers/api";

class UserService {
    getCurrentUser() {
        return api
            .sendAuthRequest("/api/users/current", "get")
            .then(response => response.data);
    }
}

export default new UserService();
