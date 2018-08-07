import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Label } from 'semantic-ui-react';

export class NavigationBar extends React.Component {

    render() {
        return (
            <Menu stackable fluid widths={4}>
                <Menu.Item
                    name='info-and-price'
                    onClick={this.props.infoClick}
                    children='Room info and price'
                />
                <Menu.Item
                    name='facilities'
                    onClick={this.props.facilitiesClick}
                    children='Facilities'
                />
                <Menu.Item
                    name='good-to-know'
                    onClick={this.props.goodToKnowClick}
                    children='Good to know'
                />
                <Menu.Item name='reviews'
                    onClick={this.props.reviewsClick}>
                    Guest reviews
                    <Label color='teal'>{this.props.reviewsCount}</Label>
                </Menu.Item>
            </Menu>
        )
    }
}

NavigationBar.defaultProps = {
    reviewsCount: 0
};

NavigationBar.propTypes = {
    reviewsCount: PropTypes.number.isRequired
};