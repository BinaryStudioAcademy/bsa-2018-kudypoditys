import React from "react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./container";
import { round, convertCurrencyByName, getRatio } from "client/helpers/convertCurrency";

class CurrencyConverterHOC extends React.Component {

    render() {
        const { Component } = this.props;

        return <Component
            convert={convertCurrencyByName}
            currenciesRatio={this.props.currenciesRatio}
            getRatio={getRatio}
            round={round}
        />;
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CurrencyConverterHOC);
