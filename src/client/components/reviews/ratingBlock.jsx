import React, { Fragment } from "react";
import './index.scss';







import {getGroupedArray, getAvgFromArray, getPropertyStatus} from 'client/helpers/avgReviewRating';

class RatingBlock extends React.Component {
    constructor(props){
        super(props);

    }

    render(){

        const {avgPropRating} = this.props
        const {reviewsCount} = this.props
        const ratingStatus = getPropertyStatus(avgPropRating);

        return(
            <div className="rating_block">
                <div style={{
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    paddingRight: 10
                }}>
                    <div className="ratingName">
                        {" "}
                        {ratingStatus}
                    </div>
                    <br/>
                    <span className="reviewsNumber">{reviewsCount} reviews</span>

                </div>


                <div className="rating_num"> {avgPropRating}</div>
            </div>
        )
    }
}

export default RatingBlock;

