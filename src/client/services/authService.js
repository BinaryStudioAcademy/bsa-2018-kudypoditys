import api from '../helpers/api';
import cookies from 'browser-cookies';

class AuthService {
    login(email, password) {
        return api.sendRequest('/api/login', 'post', {
            email, password
        }).then(response => {
            const { token, expiresIn, refreshToken } = response.data;

            console.log('##### ', response);

            cookies.set('accessToken', token);
            cookies.set('expiresIn', expiresIn.toString());
            cookies.set('refreshToken', refreshToken);
        });
    }
}

export default new AuthService();