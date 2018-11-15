function toUnixTimeSeconds(date) {
    return Math.floor(
        date.getTime() / 1000
    );
}

function getDaysDifference(checkIn, checkOut) {
    let daysStaying = 1;
    if (checkIn && checkOut) {
        daysStaying = checkOut.diff(checkIn, "days");
    }

    return daysStaying;
}

function isWithinLastDay(current, booking) {
    return (Math.round(current - booking) / 3600 <= 24) ? true : false;
}

module.exports = {
    toUnixTimeSeconds,
    getDaysDifference,
    isWithinLastDay
};