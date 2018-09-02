export function getReviewAvg(obj) {
    let total = 0,
        counter = 0;
    for (let key in obj) {
        total += obj[key];
        counter++;
    }
    return total / counter;
}
