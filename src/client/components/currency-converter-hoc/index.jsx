import React from "react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./container";
import { round, convertCurrencyByName, getRatio } from "client/helpers/convertCurrency";

function CurrencyConverterHOCWrapper(Component) {
    class CurrencyConverterHOC extends React.Component {
        render() {
            return <Component
                convert={convertCurrencyByName}
                getRatio={getRatio}
                round={round}
                {...this.props}
            />;
        }
    }

    return connect(
        mapStateToProps,
        mapDispatchToProps
    )(CurrencyConverterHOC);
}

export default CurrencyConverterHOCWrapper;