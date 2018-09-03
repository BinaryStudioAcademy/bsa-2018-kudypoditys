import React from "react";
import "./index.scss";
import { Header } from "semantic-ui-react";
import PropTypes from "prop-types";
import formatNumber from "client/helpers/formatNumber";
import { connect } from "react-redux";
import { mapStateToProps } from "./container";

export class SearchSummary extends React.Component {
    render() {
        const destination = this.props.destination,
            numbers = formatNumber(this.props.totalCount);
        // console.log("SearchSummary "+ JSON.stringify(this.props.destination) + JSON.stringify(this.props.totalCount))

        return (
            <Header as="search-summary__header">
                {destination}: {numbers}
                {this.props.totalCount === 1
                    ? " property "
                    : " properties"}{" "}
                found
            </Header>
        );
    }
}

SearchSummary.propTypes = {
    destination: PropTypes.string,
    totalCount: PropTypes.number
};

export default connect(mapStateToProps)(SearchSummary);
