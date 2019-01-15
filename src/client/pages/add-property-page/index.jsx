import React, { Fragment, Component } from "react";
import PropertyForm from "../../components/property-form/property-form-component"
import Header from "../../components/header";

import "./index.scss";

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
