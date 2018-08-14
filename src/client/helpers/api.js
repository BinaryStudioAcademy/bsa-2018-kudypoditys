import axios from "axios";
// TODO: implement servers url
const baseUrl = "http://127.0.0.1:5000";

class Api {
    constructor() {
        this.adapter = axios.create({
            baseURL: baseUrl
        });
    }
    sendRequest(url, type, payload) {
        return this.adapter[type](url, payload);
    }
}

export default new Api();
