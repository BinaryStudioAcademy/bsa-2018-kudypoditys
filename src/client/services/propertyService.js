import api from '../helpers/api';
import history from 'client/history';

class PropertyService {
    createProperty(data) {
        return api.sendAuthRequest('/api/property/', 'post', data).then(response => {
            history.push('/add-property/');
        });
    }
    updatePropery(data) {
        return api.sendRequest(`/api/add-property/${data.propertyId}`, 'put', data).then(response => {
            history.push('/add-property/');
        });
    }

    getDetailsById(id) {
        return api.sendRequest(`api/property/${id}/details`, 'get').then(response => response.data);
    }
}

export default new PropertyService();
