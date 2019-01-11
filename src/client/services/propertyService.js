import api from "../helpers/api";
import history from "client/history";
import moment from "moment";

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
            internetPrice,
            hasParking,
            parkingPrice,
            isPrivate,
            isOnTerritory,
            needToBook
        } = basicFacility;
        return {
            hasInternet: hasInternet !== "absent",
            internetPrice: hasInternet === "paid" ? internetPrice : 0,
            hasParking: hasParking !== "absent",
            parkingPrice: hasParking === "paid" ? parkingPrice : 0,
            isPrivate: isPrivate === "true",
            isOnTerritory: isOnTerritory === "true",
            needToBook: needToBook === "true"
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

    remapProperty(property) {
        if (property) {
            const images = property.images.map((image) => {
                return {
                    url: image.url
                };
            });
            const accomodiationRule = {
                CheckInCheckOut: {
                    arrivalFrom: moment(property.accommodationRule.arrivalTimeStart, "HH:mm:ss").format("HH:mm"),
                    arrivalTo: moment(property.accommodationRule.arrivalTimeEnd, "HH:mm:ss").format("HH:mm"),
                    departureFrom: moment(property.accommodationRule.departureTimeStart, "HH:mm:ss").format("HH:mm"),
                    departureTo: moment(property.accommodationRule.departureTimeEnd, "HH:mm:ss").format("HH:mm")
                },
                cancelReservation: String(property.accommodationRule.cancelReservation)
            };
            let facilities = [];
            property.facilityLists.forEach(list => {
                facilities[list.facility.id] = {
                    id: list.facility.id,
                    name: list.facility.name
                };
            });
            const paymentTypes = property.paymentTypes.map((paymentType) => {
                return {
                    id: paymentType.id,
                    name: paymentType.name
                };
            });
            const languages = property.languages.map((language) => {
                return {
                    id: language.id,
                    name: language.name
                };
            });
            const address = {
                fullAddress: property.address,
                lat: property.coordinates.lat,
                lng: property.coordinates.lng
            }

            const basicFacilities = {
                hasInternet: property.basicFacility.hasInternet ? property.basicFacility.internetPrice ? "paid" : "free" : "absent",
                internetPrice: property.basicFacility.internetPrice || 0,
                hasParking: property.basicFacility.hasParking ? property.basicFacility.parkingPrice ? "paid" : "free" : "absent",
                parkingPrice: property.basicFacility.parkingPrice || 0,
                isPrivate: String(property.basicFacility.isPrivate),
                isOnTerritory: String(property.basicFacility.isOnTerritory),
                needToBook: String(property.basicFacility.needToBook)
            }

            return {
                id: property.id,
                name: property.name,
                description: property.description,
                propertyTypeId: property.propertyType.id,
                currencyId: property.currency.id,
                contactPersonName: property.contactPersonName,
                contactPhone: property.contactPhone,
                address: address,
                address1: '',
                countryId: property.city.country.id,
                cityId: property.city.id,
                rooms: property.rooms,
                images: images,
                accommodationRule: accomodiationRule,
                paymentTypes: paymentTypes,
                languages: languages,
                facilities: facilities,
                basicFacility: basicFacilities,
                vatIncluded: 'null'
            };
        }
        return {};
    }

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

    updateProperty = data => {
        const body = this.normalizeProperty(data);

        return api
            .sendAuthRequest(`/api/property/${data.id}`, "put", body)
            .then(response => {
                return response.data;
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
            .then(response => response.data);
    }
}

export default new PropertyService();
