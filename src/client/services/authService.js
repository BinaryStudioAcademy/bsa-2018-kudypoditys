import api from '../helpers/api';
import cookies from 'browser-cookies';
import history from 'client/history';

class AuthService {
    login(email, password) {
        return api.sendRequest('/api/login', 'post', {
            email, password
        }).then(response => {
            const { token, expiresIn, refreshToken } = response.data;
            
            cookies.set('accessToken', token);
            cookies.set('expiresIn', expiresIn.toString());
            cookies.set('refreshToken', refreshToken);
        }).then(_ => {
            history.push('/');
        });
    }

    logout() {
        cookies.erase('accessToken');
        cookies.erase('expiresIn');
        cookies.erase('refreshToken');
        history.push('/log');
    }
}

export default new AuthService();