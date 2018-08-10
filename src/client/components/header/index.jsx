import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Grid, Image, Dropdown, Button, Menu } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './index.scss';
import { mapStateToProps, mapDispatchToProps } from './container';

export class MainHeader extends Component {

    componentDidMount() {
        this.props.getCurrentUser();
        this.props.getCurrencies();
    }

    render() {
        const {
            currencies,
            selectedCurrency,
            currentUser
        } = this.props;

        return (

            <Menu size='small' className="main-menu">
                <Menu.Item className="menu__logo">KudyPoditys</Menu.Item>

                <Menu.Menu position='right'>
                    {/* <Dropdown item text='Language'>
                        <Dropdown.Menu>
                            <Dropdown.Item>English</Dropdown.Item>
                            <Dropdown.Item>Russian</Dropdown.Item>
                            <Dropdown.Item>Spanish</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown> */}

                    <Dropdown
                        fluid
                        selection
                        name='currency'
                        options={currencies}
                        value={selectedCurrency}
                        onChange={(event, input) => this.props.onCurrencyChange(input.value)}
                        className="menu__dropdown"
                    />

                    <Menu.Item>
                        {currentUser ?
                            "Wellcome" + currentUser.name :
                            <Fragment>
                                <Button inverted>Login</Button>
                                <Button inverted>Register</Button>
                            </Fragment>}
                    </Menu.Item>

                </Menu.Menu>

            </Menu>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainHeader);
