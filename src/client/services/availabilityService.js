import api from "../helpers/api";

class AvailabilityService {
    createAvailability(data) {
        return api
            .sendRequest("/api/availability/", "post", data)
            .then(response => response.data);
    }

    getDetailsById(id) {
        return api
            .sendRequest(`api/room/${id}/availability`, "get")
            .then(response => response.data);
    }
}

export default new AvailabilityService();
