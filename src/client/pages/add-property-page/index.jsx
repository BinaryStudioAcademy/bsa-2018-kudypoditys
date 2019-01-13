import React, { Fragment, Component } from "react";
import PropertyForm from "../../components/property-form";
import "./index.scss";
import Header from "../../components/header";

export default class AddPropertyPage extends Component {
    render() {

        return (
            <Fragment>
                <Header />
                <PropertyForm />
            </Fragment>
        );
    }
}
