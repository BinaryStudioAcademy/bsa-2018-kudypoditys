import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Dropdown, Button, Menu } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import history from 'client/history';

import './index.scss';
import { mapStateToProps, mapDispatchToProps } from './container';

export class MainHeader extends Component {

    logout = () => {
        this.props.logout();
    }

    login = () => {
        history.push('/log');
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
                                Wellcome  {currentUser.fullName}
                                <Button inverted className="menu__logout" onClick={this.logout}>Logout</Button>
                            </Fragment> :
                            <Fragment>
                                <Button inverted className="menu__login" onClick={this.login}>Login</Button>
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
    currentUser: PropTypes.shape({
        fullName: PropTypes.string.isRequired
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(MainHeader);
