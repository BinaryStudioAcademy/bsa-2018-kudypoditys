import api from "../helpers/api";


class SearchService {
    submitSearch(data) {
        console.log("SearchService submitSearch  - " + JSON.stringify(data));
        return api.sendRequest(
            `/elastic/search/?index=properties&type=document&query=" +
                ${data.query}&rooms=${data.rooms}&adults=${data.adults}&children=${data.children}&startDate=${data.startDate}&endDate=${data.endDate}sortBy=${data.sortBy}`,
            "get",
            ""
        );
    }

}

export default new SearchService();
