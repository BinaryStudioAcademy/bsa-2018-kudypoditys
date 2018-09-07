import api from "../helpers/api";
import history from "client/history";

class PropertyService {
    normalizeProperty = (data) => {
        const {
            basicFacility, accommodationRule, vatIncluded, rooms
        } = data;

        return {
            ...data,
            basicFacility: this.normalizeBasicFacility(basicFacility),
            accommodationRule: this.normalizeAccommodationRule(accommodationRule),
            vatIncluded: Boolean(vatIncluded),
            rooms: rooms.map(x => ({
                ...x,
                roomTypeId: x.roomType.id,
                bedInRooms: x.bedInRooms.map(bir => ({ ...bir, bedTypeId: bir.bedType.id }))
            }))
        }
    }

    normalizeBasicFacility = (basicFacility) => {
        if (!basicFacility) return {};

        const {
            hasInternet, hasParking, isPrivate, isOnTerritory,
            needToBook
        } = basicFacility;
        return {
            hasInternet: hasInternet !== 'absent',
            hasParking: hasParking !== 'absent',
            isPrivate: Boolean(isPrivate),
            isOnTerritory: Boolean(isOnTerritory),
            needToBook: Boolean(needToBook)
        }
    }

    normalizeAccommodationRule = (accommodationRule) => {
        if (!accommodationRule) return {};
        const { cancelReservation, checkInCheckOut = {} } = accommodationRule;

        return {
            cancelReservation: Boolean(cancelReservation),
            arrivalTimeStart: checkInCheckOut.arrivalFrom,
            arrivalTimeEnd: checkInCheckOut.arrivalTo,
            departureTimeStart: checkInCheckOut.departureFrom,
            departureTimeEnd: checkInCheckOut.departureTo
        };
    }

    createProperty = (data) => {
        console.log('create property');
        const body = this.normalizeProperty(data);
        console.log(body);

        return api
            .sendAuthRequest("/api/property/", "post", body)
            .then(response => {
                if (response.status === 200) {
                    history.push("/");
                }

                console.log(response);
                return response;
            });
    }
    updatePropery(data) {
        return api
            .sendRequest(`/api/add-property/${data.propertyId}`, "put", data)
            .then(response => {
                history.push("/add-property/");
            });
    }

    getUserPropertiesInfo(id) {
        return api
            .sendRequest(`/api/property/${id}/info`, "get")
            .then(response => response.data);
    }
    getPropertiesByCity(city) {
        return api
            .sendRequest(`api/property/city/${city}`, "get")
            .then(response => response.data)
    }
}

export default new PropertyService();
