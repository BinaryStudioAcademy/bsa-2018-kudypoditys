import api from '../helpers/api';
import history from 'client/history';


class PropertyService {
    createPropery(data) {
        return api.sendRequest('/api/add-property/', 'post', data).then(response => {
            history.push('/add-property/');
        });
    }

    updatePropery(data) {
        return api.sendRequest(`/api/add-property/${data.propertyId}`, 'put', data).then(response => {
            history.push('/add-property/');
        });
    }
}

export default new PropertyService();
