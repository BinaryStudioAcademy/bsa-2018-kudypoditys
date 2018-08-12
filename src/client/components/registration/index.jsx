import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import {Container, Header, Divider} from 'semantic-ui-react';
import 'client/components/registration/index.scss';

import Registrationform from './form';

import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from "./container";

export class Registration extends Component {
    render() {
        return (
            <Container text className='registration-c-wrapper'>
                <Header className='registration-c-header'>Register</Header>
                <Registrationform
                    onSubmit={this.props.handleRegistrationSubmit}
                />

                <Divider hidden/>
            </Container>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration);