export function getReviewAvg(obj) {
    let total = 0,
        counter = 0;
    for (let key in obj) {
        total += obj[key];
        counter++;
    }
    return total / counter;
}

export function getGroupedArray(array, arrName) {
    const categoryArray = [];

    array.forEach(function(review) {
        for (let key in review) {
            if (key === arrName) {
                categoryArray.push(review[key]);
            }
        }
    });
    return categoryArray;
}

export function getAvgFromArray(array) {
    let total = 0;
    let avg;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return (avg = total / array.length).toFixed(1);
}

export function getAvgPropertyRating(array, arrName){


}