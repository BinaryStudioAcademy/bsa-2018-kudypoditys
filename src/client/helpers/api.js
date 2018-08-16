import axios from "axios";
import cookies from 'browser-cookies';
import dateHelpers from './date-helpers';
// TODO: implement servers url
const baseUrl = "http://127.0.0.1:5000";

class Api {
    constructor() {
        this.adapter = axios.create({
            baseURL: baseUrl
        });
    }

    sendRequestWithAuth(url, type, payload) {
        return this.checkAccessToken().then(() =>
            this.adapter.request({
                url: url, // url
                method: type.toUpperCase(), // 'get' -> 'GET'
                data: payload, // body
                headers: {
                    ...this.getAuthHeader()
                }
            }));
    }

    sendRequest(url, type, payload) {
        return this.adapter.request({
            url: url, // url
            method: type.toUpperCase(), // 'get' -> 'GET'
            data: payload // body
        });
    }

    getAuthHeader() {
        const accessToken = cookies.get('accessToken');

        if (!accessToken) {
            return {};
        }

        return {
            Authorization: `Bearer ${accessToken}`
        }
    }

    checkAccessToken() {
        const expiresIn = cookies.get('expiresIn');
        const current = dateHelpers.toUnixTimeSeconds(new Date());
        if (expiresIn < current) {
            return this.refreshTokens();
        }

        return Promise.resolve();
    }

    refreshTokens() {
        const refreshToken = cookies.get('refreshToken');
        if (!refreshToken) {
            // when this error go to login page
            return Promise.reject(new Error('refresh token not found'));
        }

        const url = `/api/refreshtoken/${refreshToken}`;
        return this.adapter.get(url).then(response => {
            const { token, expiresIn, refreshToken } = response.data;
            cookies.set('accessToken', token);
            cookies.set('refreshToken', refreshToken);
            cookies.set('expiresIn', expiresIn.toString());
        });
    }

}

export default new Api();
