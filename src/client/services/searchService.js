import api from "../helpers/api";


class SearchService {
    submitSearch(data) {
        console.log("SearchService submitSearch  - " + JSON.stringify(data));
        return api.sendRequest(
            "/elastic/search/?index=properties&type=document&query=" +
                data.query,
            "get",
            ""
        );
    }
}

export default new SearchService();
