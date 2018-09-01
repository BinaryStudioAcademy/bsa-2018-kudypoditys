import api from "../helpers/api";

class UserService {
    getCurrentUser() {
        return api
            .sendAuthRequest("/api/users/current", "get")
            .then(response => response.data)
            .catch(err => {
                //history.push("/login");
            });
    }
}

export default new UserService();
