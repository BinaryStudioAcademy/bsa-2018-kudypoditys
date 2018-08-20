import api from '../helpers/api';
import cookies from 'browser-cookies';
import history from 'client/history';

class PropertyService {
    createPropery(data) {
        return api.sendRequest('/api/add-property/', 'post',data).then(response => {
            const { token, expiresIn, refreshToken } = response.data;

            cookies.set('accessToken', token);
            cookies.set('expiresIn', expiresIn.toString());
            cookies.set('refreshToken', refreshToken);
        }).then(_ => {
            history.push('/add-property/');
        });
    }

    updatePropery(data) {
        return api.sendRequest(`/api/add-property/${data.propertyId}`, 'put',data).then(response => {
            const { token, expiresIn, refreshToken } = response.data;

            cookies.set('accessToken', token);
            cookies.set('expiresIn', expiresIn.toString());
            cookies.set('refreshToken', refreshToken);
        }).then(_ => {
            history.push('/add-property/');
        });
    }
}

export default new PropertyService();
