import {checkInOutUpdate} from 'client/logic/checkIn-checkOut/actions';


export function mapStateToProps(state) {
    const {checkInOut} = state;

    return {

        arrivalFrom: checkInOut.arrivalFrom,
        arrivalTo: checkInOut.arrivalTo,
        departureFrom: checkInOut.departureFrom,
        departureTo: checkInOut.departureTo

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