import {policesTabUpdate} from "client/logic/polices-tab/actions";


export function mapStateToProps(state) {
    const {propertyPolicesTab} = state;
    return {
        ...propertyPolicesTab,
    };
}

export function mapDispatchToProps(dispatch) {
    return {
        onSubmit(data) {
            console.log("mapDispatchToProps dispatch( policesTabUpdate(data)" + JSON.stringify(data))
            dispatch(policesTabUpdate(data));
        }
    }
}
