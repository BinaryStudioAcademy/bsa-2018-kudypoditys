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

module.exports = {
    toUnixTimeSeconds,
    getDaysDifference
};