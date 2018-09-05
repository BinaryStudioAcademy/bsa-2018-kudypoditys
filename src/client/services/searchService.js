import api from "../helpers/api";

class SearchService {
    submitSearch(data) {
        console.log("SearchService submitSearch  - " + JSON.stringify(data));
        return api.sendRequest(
            `/api/search-property?query=${data.query}&rooms=${
                data.rooms
            }&adults=${data.adults}&children=${data.children}&startDate=${
                data.startDate
            }&endDate=${data.endDate}&sortBy=${data.sortBy}&page=${data.page}`,
            "get",
            ""
        );
    }
}

export default new SearchService();
