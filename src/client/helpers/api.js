import axios from "axios";
import dateHelpers from "./date-helpers";
import cookies from "./cookie-tool";
import { SERVER_HOST } from "./config";
// TODO: implement servers url
const baseUrl = SERVER_HOST;

class Api {
    constructor() {
        this.adapter = axios.create({
            baseURL: baseUrl
        });
    }

    sendAuthRequest = (url, type, payload) => {
        return this.checkAccessToken().then(() =>
            this.adapter
                .request({
                    url: url, // url
                    method: type.toUpperCase(), // 'get' -> 'GET'
                    data: payload, // body
                    headers: {
                        ...this.getAuthHeader()
                    }
                })
                .then(response => {
                    return response;
                })
        );
    };

    sendRequest(url, type, payload) {
        return this.adapter.request({
            url: url, // url
            method: type.toUpperCase(), // 'get' -> 'GET'
            data: payload // body
        });
    }

    getAuthHeader() {
        const accessToken = cookies.getAccessToken();
        if (!accessToken) {
            return {};
        }

        return {
            Authorization: `Bearer ${accessToken}`
        };
    }

    checkAccessToken() {
        const accessToken = cookies.getAccessToken();
        if (!accessToken) {
            return this.refreshTokens();
        }

        return Promise.resolve();
    }

    refreshTokens() {
        const refreshToken = cookies.getRefreshToken();
        if (!refreshToken) {
            // when this error go to login page
            return Promise.reject(new Error("refresh token not found"));
        }

        const url = `/api/refreshtoken/${refreshToken}`;
        return this.adapter.get(url).then(response => {
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
        });
    }
}

export default new Api();
