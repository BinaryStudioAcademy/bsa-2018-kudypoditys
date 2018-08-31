import api from '../helpers/api';
import history from 'client/history';

class ReviewService {
    createReview(data) {
        return api.sendAuthRequest('/api/review', 'post', data).then(response => {
            // if(response.status === 200){
            //     history.push('/');
            // }

            console.log(response);
            return response
        });
    }



}

export default new ReviewService();
