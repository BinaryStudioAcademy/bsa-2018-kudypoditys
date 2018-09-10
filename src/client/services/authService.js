import api from "../helpers/api";
import cookies from "../helpers/cookie-tool";
import history from "client/history";

class AuthService {
    signup(user) {
        return api
            .sendRequest("/api/signup", "post", user)
            .then(response => response.data)
            .catch(err => {
                return Promise.reject(new Error(err.message));
            });
    }

    login(email, password) {
        return api
            .sendRequest("/api/login", "post", {
                email,
                password
            })
            .then(response => {
                const {
                    accessToken,
                    refreshToken,
                    accessExpiryDate,
                    refreshExpiryDate
                } = response.data;
                cookies.setTokens(
                    accessToken,
                    refreshToken,
                    accessExpiryDate,
                    refreshExpiryDate
                );
            })
            .catch(err => {
                return Promise.reject(new Error(err.message));
            });
    }

    logout() {
        cookies.clearTokens();
        history.push("/login");
    }

    verifyEmail(string) {
        return api
            .sendRequest(`/api/users/verifyemail${string}`, "get")
            .then(response => {
                return response;
            });
    }

    sendForgotPasswordEmail(email) {
        return api
            .sendRequest(`/api/forgot?email=${email}`, "get")
            .then(response => response.data);
    }

    resetPassword(email, token, newPassword) {
        return api
            .sendRequest(`/api/resetpassword`, "post", {
                email,
                token,
                newPassword
            })
            .then(response => response.data);
    }
}

export default new AuthService();
