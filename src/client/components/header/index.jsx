import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Grid, Image, Dropdown, Button, Menu } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './index.scss';
import { mapStateToProps, mapDispatchToProps } from './container';

export class MainHeader extends Component {

    componentDidMount() {
        // this.props.getCurrentUser();
        // this.props.getCurrencies();
    }

    logout = () => {
        // this.props.logout();
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

                    <Dropdown
                        fluid
                        selection
                        name='currency'
                        options={currencies}
                        value={selectedCurrency}
                        onChange={(event, input) => this.props.onCurrencyChange(input.value)}
                        className="menu__dropdown"
                    />

                    <Menu.Item className="menu__welcome">
                        {currentUser ?
                            <Fragment>
                                Wellcome  {currentUser}
                                <Button inverted className="menu__logout" onClick={this.logout}>Logout</Button>
                            </Fragment> :
                            <Fragment>
                                <Button inverted className="menu__login">Login</Button>
                                <Button inverted className="menu__register">Register</Button>
                            </Fragment>}
                    </Menu.Item>

                </Menu.Menu>

            </Menu>
        );
    }
}

MainHeader.propTypes = {
    currencies: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            value: PropTypes.number.isRequired
        })
    ).isRequired,
    currentUser: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(MainHeader);
