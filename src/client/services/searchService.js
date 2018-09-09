import api from "../helpers/api";
import history from "client/history";

class SearchService {
    submitSearch(data) {
        console.log("SearchService submitSearch  - " + JSON.stringify(data));
        let queryData = "?";
        Object.keys(data).forEach(key => {
            queryData = queryData + `${key}=${data[key]}&`;
        });
        queryData = queryData.substring(0, queryData.length - 1);
        history.push({
            pathname: "/search-page",
            search: queryData
        });
        return api.sendRequest(`/api/search-property${queryData}`, "get", "");
    }
}
export default new SearchService();
