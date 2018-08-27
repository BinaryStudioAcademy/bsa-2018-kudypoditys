import React, { Component, Fragment } from "react";
import Header from "client/components/header";
import AvailabilityCalendar from "client/components/property-availability-calendar";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./container";
import "./index.scss";

export class HomePage extends Component {
    render() {
        return (
            <div className="main--wraper">
                <Header showSearch={true} />
                <AvailabilityCalendar />
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);
