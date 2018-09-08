import React, { Fragment } from 'react';
import './index.scss';

import { getPropertyStatus, getGroupedArray,
    getAvgFromArray, } from 'client/helpers/avgReviewRating';
import {Progress} from "semantic-ui-react";

class avgRatingBar extends React.Component {
    render() {
        const { property } = this.props;


        const
            avgPropRatingArray = getGroupedArray(property.reviews, 'avgReview'),
            avgPropCleanliness = getGroupedArray(property.reviews, 'Cleanliness'),
            avgPropComfort = getGroupedArray(property.reviews, 'Comfort'),
            avgPropFacilities = getGroupedArray(property.reviews, 'Facilities'),
            avgPropPrice = getGroupedArray(property.reviews, 'Price'),
            avgPropLocation = getGroupedArray(property.reviews, 'Cleanliness');

        const
            avgCleanliness = getAvgFromArray(avgPropCleanliness),
            avgFacilities = getAvgFromArray(avgPropFacilities),
            avgComfort = getAvgFromArray(avgPropComfort),
            avgPrice = getAvgFromArray(avgPropPrice),
            avgLocation = getAvgFromArray(avgPropLocation),
            avgPropRating = getAvgFromArray(avgPropRatingArray);
        return (
            <div className="avg_rating___block">

                <Progress progress="value" color='blue' size='small' total='10' value={avgCleanliness} label="Cleanliness"/>
                <Progress progress="value"  color='blue' size='small' total='10' value={avgFacilities} label="Facilities"/>
                <Progress progress="value"  color='blue' size='small' total='10' value={avgComfort} label="Comfort"/>
                <Progress progress="value"  color='blue' size='small' total='10' value={avgPrice} label="Price"/>
                <Progress progress="value"  color='blue' size='small'  total='10' value={ avgLocation}  label="Location"/>



            </div>
        );
    }
}

export default avgRatingBar;
