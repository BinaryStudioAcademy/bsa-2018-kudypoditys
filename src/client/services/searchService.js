import api from '../helpers/api';
import history from 'client/history';

class SearchService {
    submitSearch(data) {
        return api.sendAuthRequest('/api/search/', 'get').then(response => {
           if(response.status === 200){
               history.push('/');
           }

            console.log(response)
            return response
        });
    }
    updateSearch(data) {
        return api.sendRequest(`/api/search/`, 'put', data).then(response => {
            history.push('/search/');
        });
    }

}

export default new SearchService();