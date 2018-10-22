import React, { Fragment, Component } from "react";
import PropertyForm from "client/components/property-form";
import "./index.scss";
// import { Header } from "semantic-ui-react";
import Header from "client/components/header";


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
