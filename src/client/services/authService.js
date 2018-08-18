import api from "../helpers/api";
import cookies from "../helpers/cookie-tool";
import history from "client/history";

class AuthService {
    signup(user) {
        return api
            .sendRequest("/api/signup", "post", user)
            .then(response => {
                const { accessToken, refreshToken, expiryDate } = response.data;
                cookies.setTokens(accessToken, refreshToken, expiryDate);
            })
            .catch(err => {
                return Promise.reject(new Error(err.response.data));
            });
    }

    login(email, password) {
        return api
            .sendRequest("/api/login", "post", {
                email,
                password
            })
            .then(response => {
                const { accessToken, refreshToken, expiryDate } = response.data;
                cookies.setTokens(accessToken, refreshToken, expiryDate);
            })
            .catch(err => {
                return Promise.reject(new Error(err.response.data));
            });
    }

    logout() {
        cookies.erase("accessToken");
        cookies.erase("refreshToken");
        history.push("/log");
    }
}

export default new AuthService();
