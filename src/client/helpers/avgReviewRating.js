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
    avg = total / array.length
    if (isNaN(avg)) {
        return  0
    }

    return avg.toFixed(1) ;
}

export function getPropertyStatus(rating){
    let ratingStatus = "";


    if (rating >= 9) {
        ratingStatus = "Wonderful";
    } else if (rating >= 8) {
        ratingStatus = "Very Good";
    } else if (rating >= 7) {
        ratingStatus = "Good";
    } else if (rating >= 6) {
        ratingStatus = "Pleasant";
    } else if (rating === 0) {
        ratingStatus = "No rating";
        }
     else if (rating < 6) {
        ratingStatus = "It's Ok";

    }

    return ratingStatus
}

export function getPropertyColor(rating) {
    let ratingColor = "";

    if (rating >= 9) {
        ratingColor = '#0a3d91'
    } else if (rating >= 8) {
        ratingColor = '#255ebc'
    } else if (rating >= 7) {
        ratingColor = '#5473a8'
    } else if (rating >= 6) {
        ratingColor = '#7b9ace'
    } else if (rating === 0) {
        ratingColor = '#44272b'
    }
    else if (rating < 6) {
        ratingColor = '#9ab5e2'
    }
    return ratingColor
}