import { Rating, Header } from "semantic-ui-react";
import React, { Fragment } from "react";

export default class RatingForm extends React.Component {

    render() {

        const {name} = this.props;

        return (
            <Fragment>
                <div className={"rating_item"}>
                    <Header as="h4" style={{margin: 0}}>{name}</Header>

                    <Rating name={name} maxRating={10} defaultRating={0}  size='huge'
                            onRate={this.props.onSelect}/>


                </div>
            </Fragment>
        )
    }
}