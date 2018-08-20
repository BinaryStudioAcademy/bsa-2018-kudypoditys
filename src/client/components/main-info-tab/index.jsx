import React, { Component } from "react";
import PaymentTab from "client/components/property-payment-tab";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./container";

export class MainInfoTab extends Component {
    state = {
        currentTab: "paymentTab"
    };

    handleContinue = ({ from }) => {
        if(from === "paymentTab") {
            this.props.registerProperty();
        } else {
            this.setState({
                currentTab: from
            })
        }
    };

    render() {
        return (
            <div>
                <PaymentTab submitContinue={this.handleContinue}/>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainInfoTab);