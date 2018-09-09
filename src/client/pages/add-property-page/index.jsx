import React, { Fragment, Component } from "react";
import PropertyRegistration from "client/components/property-registration";
import "./index.scss";
// import { Header } from "semantic-ui-react";
import Header from "client/components/header";


export default class AddPropertyPage extends Component {
    render() {

        return (
            <Fragment>
                <Header />
                <PropertyRegistration />
            </Fragment>
        );
    }
}
