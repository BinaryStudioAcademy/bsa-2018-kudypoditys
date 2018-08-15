import React, { Component, Fragment } from "react";
import {  Header} from "semantic-ui-react";

import RegistrationForm from './registeredForm';


class TabRegistration extends Component {

    render() {
        return (
            <Fragment textAlign='center'>
                <Header as='h2'>Welcome Elvira!</Header>
                Start by telling us your property's name, contact details, and address.
                <RegistrationForm />
                </Fragment>
        );
    }
}
export default TabRegistration ;
