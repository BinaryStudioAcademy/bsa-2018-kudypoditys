import api from "../helpers/api";

class ReviewService {
    createReview(data) {
        return api
            .sendAuthRequest("/api/review", "post", data)
            .then(response => {
                // if(response.status === 200){
                //     history.push('/');
                // }
                return response;
            });
    }
}

export default new ReviewService();
