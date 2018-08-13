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
        onCheckInFrom(value) {
            dispatch(checkInOutUpdate({

                arrivalFrom: value

            }));
        },
        onCheckInTo(value) {
            dispatch(checkInOutUpdate({arrivalTo: value}));
        },
        onCheckOutFrom(value) {
            dispatch(checkInOutUpdate({


                        departureFrom: value

                }
            ));
        },
        onCheckOutTo(value) {
            dispatch(checkInOutUpdate({departureTo: value}));
        }
    };
}