import api from "../helpers/api";
import history from "client/history";

class PropertyService {
    normalizeProperty = data => {
        const {
            basicFacility,
            accommodationRule,
            vatIncluded,
            rooms,
            address
        } = data;

        return {
            ...data,
            basicFacility: this.normalizeBasicFacility(basicFacility),
            accommodationRule: this.normalizeAccommodationRule(
                accommodationRule
            ),
            vatIncluded: Boolean(vatIncluded),
            coordinates: this.normalizeCoordinates(address),
            address: address.fullAddress,
            rooms: rooms.map(x => ({
                ...x,
                roomTypeId: x.roomType.id,
                bedInRooms: x.bedInRooms.map(bir => ({
                    ...bir,
                    bedTypeId: bir.bedType.id
                }))
            }))
        };
    };

    normalizeCoordinates = address => {
        if (!address) return {};
        const { lat, lng } = address;
        return { lat, lng };
    };

    normalizeBasicFacility = basicFacility => {
        if (!basicFacility) return {};

        const {
            hasInternet,
            hasParking,
            isPrivate,
            isOnTerritory,
            needToBook
        } = basicFacility;
        return {
            hasInternet: hasInternet !== "absent",
            hasParking: hasParking !== "absent",
            isPrivate: Boolean(isPrivate),
            isOnTerritory: Boolean(isOnTerritory),
            needToBook: Boolean(needToBook)
        };
    };

    normalizeAccommodationRule = accommodationRule => {
        if (!accommodationRule) return {};
        const { cancelReservation, checkInCheckOut = {} } = accommodationRule;

        return {
            cancelReservation: Boolean(cancelReservation),
            arrivalTimeStart: checkInCheckOut.arrivalFrom,
            arrivalTimeEnd: checkInCheckOut.arrivalTo,
            departureTimeStart: checkInCheckOut.departureFrom,
            departureTimeEnd: checkInCheckOut.departureTo
        };
    };

    createProperty = data => {
        const body = this.normalizeProperty(data);

        return api
            .sendAuthRequest("/api/property/", "post", body)
            .then(response => {
                if (response.status === 200) {
                    history.push("/");
                }

                return response.data;
            });
    };
    updatePropery(data) {
        return api
            .sendAuthRequest(`/api/property/${data.propertyId}`, "put", data)
            .then(response => {
                console.log(response);
            });
    }

    getUserPropertiesInfo(data) {
        return api
            .sendRequest(`/api/property/${data.id}/info`, "get")
            .then(response => response.data);
    }
    getPropertiesByCity(city) {
        return api
            .sendRequest(`api/property/city/${city}`, "get")
            .then(response => response.data);
    }
}

export default new PropertyService();
