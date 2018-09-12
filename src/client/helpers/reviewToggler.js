import moment from "moment";
export function getPropReviewsArray(bookingArray) {
    let array = [],
        now = moment();

    if (bookingArray.length > 0) {
        bookingArray.forEach(function(book) {
            let momentA = moment(now);
            let momentB = moment(book.dateIn);

            if (momentA > momentB) {
                array.push(book);
            }
        });
    }
    return array;
}

export function getPropToggler(bookingArray, property) {
    let b = 0;

    for (let i = 0; i < bookingArray.length; i++) {
        if (bookingArray[i].room.property.id === property.id) {
            // console.log(bookingArray[i].room.property.id)
            // console.log(property.id)
            // console.log((bookingArray[i].room.property.id === property.id))
            b = 1;
            return b;
        }
    }
    console.log(b);
    return b;
}
