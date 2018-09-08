import api from "../helpers/api";
import history from "client/history";

class SearchService {
    submitSearch(data) {
        console.log("SearchService submitSearch  - " + JSON.stringify(data));

        const queryData = `?query=${data.query}&rooms=${data.rooms}&adults=${
            data.adults
        }&children=${data.children}&startDate=${data.startDate}&endDate=${
            data.endDate
        }&sortBy=${data.sortBy}&page=${data.page}`;

        history.push({
            pathname: "/search-page",
            search:queryData });
        return api.sendRequest(`/api/search-property${queryData}`, "get", "");
    }
}
export default new SearchService();
