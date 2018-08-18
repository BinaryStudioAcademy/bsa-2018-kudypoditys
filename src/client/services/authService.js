import api from "../helpers/api";
import cookies from "../helpers/cookie-tool";
import history from "client/history";

class AuthService {
    signup(user) {
        return api
            .sendRequest("/api/signup", "post", user)
            .then(response => {
                const { accessToken, refreshToken } = response.data;
                cookies.setTokens(accessToken, refreshToken);
            })
            .catch(err => {
                Promise.reject(new Error(err.message));
            });
    }

    login(email, password) {
        return api
            .sendRequest("/api/login", "post", {
                email,
                password
            })
            .then(response => {
                const { token, expiresIn, refreshToken } = response.data;

                cookies.set("accessToken", token);
                cookies.set("expiresIn", expiresIn.toString());
                cookies.set("refreshToken", refreshToken);
            })
            .then(_ => {
                history.push("/");
            });
    }

    logout() {
        cookies.erase("accessToken");
        cookies.erase("refreshToken");
        history.push("/log");
    }
}

export default new AuthService();
