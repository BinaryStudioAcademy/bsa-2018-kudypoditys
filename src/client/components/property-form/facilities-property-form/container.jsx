import { facilitiesGet } from '../../../logic/facilities/actions';
import { languagesGet, createLanguage} from '../../../logic/languages/actions';
import { getFormValues } from "redux-form";

export function mapStateToProps(state) {
    const { basicFacility } = getFormValues('propertyForm')(state) || {};
    const { hasInternet, hasParking } = basicFacility || {};

    const { languages } = state.languages;
    const { facilities } = state.facilities;

    return {
        hasInternet,
        hasParking,
        languages,
        facilities
    }
}

export function mapDispatchToProps(dispatch) {
    return {
        getLanguages() {
            dispatch(languagesGet());
        },

        getFacilities() {
            dispatch(facilitiesGet());
        },
        createLanguage(data){
            if(data){
                dispatch(createLanguage(data))
            }
        }
    }
}
