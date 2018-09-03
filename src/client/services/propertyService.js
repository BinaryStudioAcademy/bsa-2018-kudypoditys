import api from "../helpers/api";
import history from "client/history";

class PropertyService {
    createProperty(data) {
        return api
            .sendAuthRequest("/api/property/", "post", data)
            .then(response => {
                if (response.status === 200) {
                    history.push("/");
                }

                console.log(response);
                return response;
            });
    }
    updatePropery(data) {
        return api
            .sendRequest(`/api/add-property/${data.propertyId}`, "put", data)
            .then(response => {
                history.push("/add-property/");
            });
    }

    getUserPropertiesInfo(id) {
        return api
            .sendRequest(`/api/property/${id}/info`, "get")
            .then(response => response.data);
    }
    getPropertiesByCity(city){
        return api.sendRequest(`api/property/city-info/`, 'get').then(response => response.data)
    }
}

export default new PropertyService();
