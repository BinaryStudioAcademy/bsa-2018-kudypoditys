import api from "../helpers/api";
import history from "client/history";
import { UPLOAD_PRESET, UPLOAD_URL } from "./config";
import request from "superagent";

class UserService {
    getCurrentUser() {
        return api
            .sendAuthRequest("/api/users/current", "get")
            .then(response => response.data)
            .catch(err => {
                //history.push("/login");
            });
    }
    uploadAvatar(action) {
        return () =>
            request
                .post(UPLOAD_URL)
                .field("upload_preset", UPLOAD_PRESET)
                .field("file", action.payload[0]);
    }
    updateUser(action) {
        return api
            .sendRequest(
                `/api/users/${action.payload.id}`,
                "put",
                action.payload
            )
            .then(response => response.data);
    }
}

export default new UserService();
