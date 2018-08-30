import api from '../helpers/api';
import history from 'client/history';

class SearchService {
    submitSearch(data) {
        console.log("SearchService submitSearch  - "+JSON.stringify(data))
        return api.sendRequest('/elastic/search/?index=properties&type=document&query='+data.query, 'get',"")//.then(response => {
        //  //  if(response.status === 200){
        //      //  history.push('/');
        //  // }4
        //  console.log(JSON.stringify(response))

        //  return response
        //     // response
        // });
    }
    // updateSearch(data) {
    //     return api.sendRequest(`/api/search/`, 'put', data).then(response => {
    //         history.push('/search/');
    //     });
    // }

}

export default new SearchService();