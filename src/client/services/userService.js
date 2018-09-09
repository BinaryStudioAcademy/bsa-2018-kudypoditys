import api from "../helpers/api";
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
    changePassword(action) {
        return api
            .sendRequest("/api/changepassword", "post", action.payload)
            .then(response => response.data);
    }
    getUserReviews(id) {
        return api
            .sendAuthRequest(`/api/review/${id}/byuserid`, "get")
            .then(response => response);
    }
}

export default new UserService();
