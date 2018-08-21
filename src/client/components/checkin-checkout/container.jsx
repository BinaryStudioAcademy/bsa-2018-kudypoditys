import {checkInOutUpdate} from 'client/logic/polices-tab/actions';


export function mapStateToProps(state) {
    const {policesTab} = state;

    return {

        arrivalFrom: policesTab.arrivalFrom,
        arrivalTo: policesTab.arrivalTo,
        departureFrom: policesTab.departureFrom,
        departureTo: policesTab.departureTo

    };
}

export function mapDispatchToProps(dispatch) {
    return {
        onSelectTime(value, type) {

            dispatch(checkInOutUpdate({

                [type]: value

            }));
        }

    }
}