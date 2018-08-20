import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import history from 'client/history';

import './index.scss';
import { mapStateToProps, mapDispatchToProps } from './container';

export class MainHeader extends Component {

    logout = () => {
        this.props.logout();
    }

    login = () => {
        history.push('/login');
    }

    state = { activeItem: 'about-us' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state;

        const {
            currencies,
            selectedCurrency,
            currentUser
        } = this.props;

        return (


            <Menu size='small' id="main-menu" pointing secondary >
                <Menu.Item className="menu__logo">KudyPoditys</Menu.Item>

                <Menu.Menu position='right' className="menu__right">

                    <Menu.Menu className="menu__languages">
                        <Menu.Item className="menu__language" >UAH</Menu.Item>
                        <Menu.Item className="menu__language" >ENG</Menu.Item>
                    </Menu.Menu>

                    <Menu.Item className="menu__about-us" name='about-us' active={activeItem === 'about-us'}>About us</Menu.Item>
                    <Menu.Item className="menu__properties" name='propeties'>Properties</Menu.Item>

                    {currentUser ?
                        <Fragment>
                            Wellcome  {currentUser.fullName}
                            <Menu.Item className="menu__logout" onClick={this.logout}>Logout</Menu.Item >
                        </Fragment> :
                        <Fragment>
                            <Menu.Item className="menu__login" onClick={this.login}>Login</Menu.Item >
                            <Menu.Item className="menu__register">Register</Menu.Item >
                        </Fragment>}

                </Menu.Menu>

            </Menu >
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
