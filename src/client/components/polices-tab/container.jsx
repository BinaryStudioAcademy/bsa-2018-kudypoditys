import {policesTabUpdate} from "client/logic/polices-tab/actions";


export function mapStateToProps(state) {
    const {policesTab} = state;

    return {
        arrivalFrom: policesTab.arrivalFrom,
        arrivalTo: policesTab.arrivalTo,
        departureFrom: policesTab.departureFrom,
        departureTo: policesTab.departureTo,

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
