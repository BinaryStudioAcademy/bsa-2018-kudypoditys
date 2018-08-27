import api from "../helpers/api";
import history from "client/history";

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
