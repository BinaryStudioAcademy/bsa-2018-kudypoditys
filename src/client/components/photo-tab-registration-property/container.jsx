import {imageUpdate} from "client/logic/photo-tab/actions";


export function mapStateToProps(state) {
    const {propertyPhoto} = state;
    return {
        ...propertyPhoto
    }
}

export function mapDispatchToProps(dispatch) {
    return {
        filesUpdate(data) {
            dispatch(imageUpdate(data));
        }
    }
}
