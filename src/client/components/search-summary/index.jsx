import React from "react";
import "./index.scss";
import { Header } from "semantic-ui-react";
import PropTypes from "prop-types";
import formatNumber from "client/helpers/formatNumber";
import { connect } from "react-redux";
import { mapStateToProps } from "./container";

export class SearchSummary extends React.Component {
    render() {
        const numbersToPrettify = this.props.totalCount,
            destination = this.props.destination,
            numbers = formatNumber(numbersToPrettify);

        return (
            <Header as="h1" style={{ fontSize: 23, lineHeight: 1.2 }}>
                {destination}: {numbers} properties found
            </Header>
        );
    }
}

SearchSummary.propTypes = {
    destination: PropTypes.string,
    totalCount: PropTypes.number
};

export default connect(mapStateToProps)(SearchSummary);
